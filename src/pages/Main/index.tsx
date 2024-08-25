import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Feather from 'react-native-vector-icons/Feather';
import { Button, Image, Text } from "tamagui";
import FileReportNavigation from "../FileReport";
import NotificationNavigation from "../Notification";
import CommutingDiaryScreen from "./CommutingDiaryScreen";
import DashboardScreen from "./DashboardScreen";
import EmergencyContactScreen from "./EmergencyContactScreen";
import HotlineScreen from "./HotlineScreen";
import SOSScreen from "./SOSScreen";
import TermsAndPrivacyScreen from "./TermsAndPrivacyScreen";
import TestScreen from "./TestScreen";
import { NativeModules, Platform } from "react-native";
import { AudioRecorder } from "../../utils/audio";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import SettingsScreen from "./SettingsScreen";
import BiometricsSetupScreen from "./BiometricsSetupScreen";
import SafeWordsSetupScreen from "./SafeWordsSetupScreen";
import useSafeWords from "../../hooks/useSafeWords";
import { isInitializedSafeWords } from "../../services/safeWords";
import FAQsScreen from "./components/FAQsScreen";
import PendingScreen from "./PendingScreen";
import { API, DataStore } from "aws-amplify";
import { EagerMobileAppOptions, LazyMobileAppOptions, MobileAppOptions, UserVerification } from "../../models";
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import * as queries from "../../graphql/queries";
import awsmobile from "../../aws-exports";
import { ListMobileAppOptionsQuery, ModelMobileAppOptionsFilterInput } from "../../API";
import AccountHeldScreen from "./AccountHeldScreen";

const NavigationStack = createNativeStackNavigator();
const logo = require("../../assets/img/Logo-initial.png");

const { MFCCModule } = NativeModules;

function useWatcher() {

    const [watch, setWatch] = useState<boolean>(false);

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const [listening, setListening] = React.useState<boolean>(false);

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const checkIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const startListener = () => {
        if (listening) return;
        AudioRecorder.start()
            .then(() => {
                setListening(true);
                timeoutRef.current = setTimeout(() => {
                    AudioRecorder.stop((res: string) => {
                        let _res = "";
                        if (res == "isolated-screams") { _res = "scream" }
                        else { _res = "not-scream" }

                        console.log('scream?', _res);

                        if (_res == 'scream') {
                            navigation.navigate('Main.SOS');
                        }
                        clearTimeout(timeoutRef.current!);
                        setListening(false);
                    });
                }, 15000);
            });
    };

    useEffect(() => {
        if (Platform.OS === 'android') {
            AudioRecorder.init();
            MFCCModule.initialize(() => {
                setWatch(true);
            });
        }
        return function () {
            if (Platform.OS === 'android') {
                setWatch(false);
            }
        }
    }, []);

    useEffect(() => {
        if (Platform.OS === 'android') {
            if (watch) {
                console.log('STARTED!');
                startListener();
                checkIntervalRef.current = setInterval(() => {
                    console.log('interval triggered');
                    startListener();
                }, 30000);
            } else {
                checkIntervalRef.current && clearInterval(checkIntervalRef.current);
                timeoutRef.current && clearTimeout(timeoutRef.current);
                AudioRecorder.stop(() => { });
                setListening(false);
            }
        }
        return function () {
            console.log('STOPPED!');
            if (Platform.OS === 'android') AudioRecorder.stop(() => { });
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setListening(false);
            checkIntervalRef.current && clearInterval(checkIntervalRef.current);
        }
    }, [watch]);

    return { startWatcher: () => setWatch(true), stopWatcher: () => setWatch(false) };

}

/**
 * hook to check if the app requires the account to be verified to access the app. grants access accordingly.
 * @returns 
 */
function useAccountVerifiedStatus() {

    const [verificationStatus, setVerificationStatus] = useState<'checking' | 'granted' | 'verifying' | 'denied' | 'resubmission'>('checking');

    useFocusEffect(useCallback(() => {
        console.log('useAccountVerifiedStatus check');
        API.graphql<GraphQLQuery<ListMobileAppOptionsQuery>>({
            query: queries.listMobileAppOptions,
            variables: {
                // limit: 1,
            },
            authMode: GRAPHQL_AUTH_MODE.API_KEY,
            authToken: awsmobile.aws_appsync_apiKey,
        })
            .then(resp => {
                if (resp.data) {
                    if (resp.data.listMobileAppOptions) {
                        try {
                            const options = resp.data.listMobileAppOptions.items;
                            const appOption = options.filter((opt) => opt !== null && (opt?._deleted == null ?? false));
                            if (appOption.length > 0) {
                                if (appOption[0]?.requireVerifiedAccount) {
                                    DataStore.query(
                                        UserVerification,
                                    ).then((resp) => {
                                        if (resp && resp.length > 0) {
                                            const verification = resp[0];
                                            if (verification.verified) {
                                                setVerificationStatus('granted');
                                            } else {
                                                if (verification.verify_status == 'denied') {
                                                    setVerificationStatus('denied');
                                                } else {
                                                    setVerificationStatus('verifying');
                                                }
                                            }
                                        } else {
                                            setVerificationStatus('resubmission');
                                        }
                                    });
                                } else {
                                    setVerificationStatus('granted');
                                }
                            } else {
                                setVerificationStatus('denied');
                            }
                        } catch (err) {
                            console.log('error', err);
                        }
                    }
                }
            })
            .catch(err => {
                console.log('err', err)
            });
    }, []));

    console.log('verificationStatus', verificationStatus);

    return verificationStatus;

}

function MainNavigation({ navigation }: { navigation: any }): JSX.Element {

    // useWatcher();

    const safeWordsEngine = useSafeWords();
    const accountStatus = useAccountVerifiedStatus();

    useEffect(() => {
        if (accountStatus == 'granted') {
            navigation.replace('Main.Dashboard');
            isInitializedSafeWords().then((resp) => {
                if (resp.initialized && resp.enableSafeWords) {
                    safeWordsEngine.manualStart();
                }
            });
        } else if (accountStatus != 'checking') {
            navigation.replace('Main.HeldAccount', { status: accountStatus });
        }
    }, [accountStatus]);

    return <NavigationStack.Navigator
        initialRouteName="Main.Pending"
        screenOptions={props => ({
            headerBackVisible: false,
            headerTitle: () => <Image source={logo} />,
            headerShadowVisible: false,
        })}
    >
        <NavigationStack.Screen name="Main.Pending" component={PendingScreen} options={({ navigation }) => ({
            headerShown: false,
        })} />
        <NavigationStack.Screen name="Main.HeldAccount" component={AccountHeldScreen} options={({ navigation }) => ({
            headerShown: false,
        })} />
        <NavigationStack.Screen name="Main.Dashboard" component={DashboardScreen} />
        <NavigationStack.Screen name="Main.Test" component={TestScreen} />
        <NavigationStack.Screen name="Main.SOS" component={SOSScreen} />
        <NavigationStack.Screen name="Main.TermsPrivacy" component={TermsAndPrivacyScreen} />
        <NavigationStack.Screen name="Main.Hotline" component={HotlineScreen} options={({ navigation }) => ({
            headerBackVisible: false,
            headerTitle: () => <Text fontWeight={'600'} fontSize={20}>Hotline Database</Text>,
            headerLeft: () => <Button marginRight={5} paddingHorizontal={12} icon={<Feather name='arrow-left' size={20} />} backgroundColor='transparent' onPress={() => navigation.goBack()} />,
            headerShadowVisible: false,
        })} />
        <NavigationStack.Screen name="Main.CommutingDiary" component={CommutingDiaryScreen} />
        <NavigationStack.Screen name="Main.Biometrics" component={BiometricsSetupScreen} />
        <NavigationStack.Screen name="Main.FileReport" component={FileReportNavigation} options={props => ({
            headerShown: false,
        })} />
        <NavigationStack.Screen name="Main.Notifications" component={NotificationNavigation} options={props => ({
            headerShown: false,
        })} />
        <NavigationStack.Screen name="Main.Contacts" component={EmergencyContactScreen} options={props => ({
            headerShown: false,
        })} />
        <NavigationStack.Screen name="Main.SafeWords" component={SafeWordsSetupScreen} />
        <NavigationStack.Screen name="Main.Settings" component={SettingsScreen} options={({ navigation }) => ({
            headerBackVisible: false,
            headerTitle: () => <Text fontWeight={'600'} fontSize={20}>Settings</Text>,
            headerLeft: () => <Button marginRight={5} paddingHorizontal={12} icon={<Feather name='arrow-left' size={20} />} backgroundColor='transparent' onPress={() => navigation.goBack()} />,
            headerShadowVisible: false,
        })} />
        <NavigationStack.Screen name="Main.FAQs" component={FAQsScreen} />
    </NavigationStack.Navigator>

}

export default MainNavigation;