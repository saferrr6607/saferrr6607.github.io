import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useRef, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import SettingsScreen from "./SettingsScreen";
import BiometricsSetupScreen from "./BiometricsSetupScreen";
import SafeWordsSetupScreen from "./SafeWordsSetupScreen";
import useSafeWords from "../../hooks/useSafeWords";
import { isInitializedSafeWords } from "../../services/safeWords";

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

function MainNavigation(): JSX.Element {

    // useWatcher();

    const safeWordsEngine = useSafeWords();

    useEffect(() => {
        isInitializedSafeWords().then((resp) => {
            if (resp.initialized && resp.enableSafeWords) {
                safeWordsEngine.manualStart();
            }
        });
    }, []);

    return <NavigationStack.Navigator
        initialRouteName="Main.Dashboard"
        screenOptions={props => ({
            headerBackVisible: false,
            headerTitle: () => <Image source={logo} />,
            headerShadowVisible: false,
        })}
    >
        <NavigationStack.Screen name="Main.Dashboard" component={DashboardScreen} />
        <NavigationStack.Screen name="Main.Test" component={TestScreen} />
        <NavigationStack.Screen name="Main.SOS" component={SOSScreen} />
        <NavigationStack.Screen name="Main.TermsPrivacy" component={TermsAndPrivacyScreen} />
        <NavigationStack.Screen name="Main.Hotline" component={HotlineScreen} options={({ navigation }) => ({
            headerBackVisible: false,
            headerTitle: () => <Text fontWeight={'600'} fontSize={20}>Hotline Database</Text>,
            headerLeft: () => <Button marginRight={5} paddingHorizontal={12} icon={<Feather name='arrow-left' size={20} />} bg='transparent' onPress={() => navigation.goBack()} />,
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
            headerLeft: () => <Button marginRight={5} paddingHorizontal={12} icon={<Feather name='arrow-left' size={20} />} bg='transparent' onPress={() => navigation.goBack()} />,
            headerShadowVisible: false,
        })} />
    </NavigationStack.Navigator>

}

export default MainNavigation;