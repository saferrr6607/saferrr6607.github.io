import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Auth, DataStore } from "aws-amplify";
import React, { PropsWithChildren, useCallback, useContext, useEffect, useState } from "react";
import { Alert, Platform, Pressable, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { Button, Circle, getTokens, Image, Input, Stack, Text, XStack } from "tamagui";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import { AppContext } from "../../contexts/AppContext";
import { alertUser } from "../../utils/alert";
import { InputWithError } from "../SignUp/recipe";
import ReactNativeBiometrics from "react-native-biometrics";
import { isEnabledBiometric, verifySignatureWithServer } from "../../services/authentication";
import { useFocusEffect } from "@react-navigation/native";

const logo = require("../../assets/img/Logo-initial.png");
const biometricImage = require("../../assets/img/biometric.png");

function maskName(name: string): string {
    const nameArray = name.split('');
    return nameArray.map((char, index) => {
        // Preserve the first two characters, last two characters, and spaces
        if (index < 2 || index >= name.length - 2 || char === ' ') {
            return char;
        } else {
            return '*';
        }
    }).join('');
}

function ConfirmLoginScreen(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const { navigation } = props;

    const app_ctx = useContext(AppContext);

    const [pwd, setPwd] = useState<string>('');
    const [showPwd, setShowPwd] = useState<boolean>(false);
    const showIcon = showPwd ? 'eye-off' : 'eye';

    const [allowBiometricLogin, setAllowBiometricLogin] = useState<boolean>(false);

    const [initials, setInitials] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const maskedName = maskName(userName);

    const secondary = getTokens().color.secondary.val;

    useEffect(() => {
        // Auth.currentSession()
        //     .then(session => {
        //         console.log('session');
        //         console.log(session);
        //     });
        Auth.currentUserInfo()
            .then(userInfo => {
                const { given_name = '', family_name = '', email } = userInfo.attributes;
                const name = `${given_name} ${family_name}`;
                const initials = `${given_name.charAt(0)}${family_name.charAt(0)}`;

                setUserName(name);
                setInitials(initials);
                setEmail(email);
            });
    }, []);

    const handleBiometricAuth = async () => {
        try {
            const rnBiometrics = new ReactNativeBiometrics();
            if (Platform.OS === 'android') {
                const { success, error } = await rnBiometrics.simplePrompt({ promptMessage: 'Authenticate to continue' });

                if (success) {
                    Alert.alert(`Welcome back, ${userName}`);
                    navigation.replace('App.Main');
                    return true;
                } else {
                    Alert.alert('Authentication failed', 'Biometric authentication failed');
                    return false;
                }
            } else if (Platform.OS == 'ios') {
                const timestamp = Math.round(
                    new Date().getTime() / 1000,
                ).toString();
                const payload = `${app_ctx?.cognito?.sub}__${timestamp}`;

                const rnBiometrics = new ReactNativeBiometrics();

                const { success, signature } = await rnBiometrics.createSignature(
                    {
                        promptMessage: 'Sign in',
                        payload,
                    },
                );
                if (!success) {
                    alertUser(
                        'Something went wrong during authentication with Face ID. Please try again.',
                    );
                }

                const { status, message } = await verifySignatureWithServer({
                    signature: signature as string,
                    payload,
                });

                if (status != 'success') {
                    alertUser('Biometric authentication failed');
                    return false;
                } else {
                    Alert.alert(`Welcome back, ${userName}`);
                    navigation.replace('App.Main');
                    return true;
                }
            }
        } catch (error) {
            console.error('[handleBiometricAuth] Error:', error);
            Alert.alert('Error', 'Biometric authentication failed from device');
            return false;
        }
    };


    const handleOnLogin = () => {
        Auth.signIn(email, pwd)
            .then(resp => {
                navigation.replace('App.Main');
            })
            .catch(err => {
                console.log(err);
                alertUser(err.message);
            })
            .finally(() => {
            });
    }

    const handleOnLogout = async () => {
        try {
            console.log('@handle logout');
            await Auth.signOut();
            console.log('@signout');
            await DataStore.clear();
            console.log('@DS clear');
            navigation.navigate("Invite.Login");

        } catch (err) {
            console.log("err@handleLogout");
            console.log(err);
        }
    }

    useFocusEffect(useCallback(() => {
        isEnabledBiometric(Platform.OS === 'ios' ? 'ios' : 'android')
            .then(({ isEnabled, key }) => {
                console.log('isEnabled', isEnabled, key)
                setAllowBiometricLogin(isEnabled);
            });
    }, []));

    return <SafeAreaView style={{
        height: "100%",
        backgroundColor: secondary,
    }}>
        <Stack paddingHorizontal={40} paddingTop={60} paddingBottom={30}>
            <XStack style={{ width: "100%" }}>
                <Image source={logo} width={150} height={75} marginBottom={25} resizeMode="contain" />
            </XStack>
            <Stack justifyContent="center" alignItems="center" gap={14} marginBottom={18}>
                <Circle width={72} height={72} backgroundColor={'$primary'}>
                    <Text fontSize={32} color='white'>{initials}</Text>
                </Circle>
                <Text fontSize={18} fontWeight={'600'}>{maskedName}</Text>
            </Stack>
            <XStack gap={5}>
                <InputWithError
                    value={pwd}
                    onChangeText={setPwd}
                    error={''}
                    InputProps={{
                        fontSize: 12,
                        placeholder: "Password",
                        secureTextEntry: !showPwd,
                    }}
                    marginBottom={12}
                    flex={1}
                />
                <Button icon={<Ionicons name={showIcon} size={24} />} onPress={() => setShowPwd(v => !v)} />
            </XStack>
            <PrimaryButton onPress={handleOnLogin}>Login</PrimaryButton>
        </Stack>
        {allowBiometricLogin && <Stack flexDirection="row" justifyContent="center">
            <Stack
                alignItems="center"
                flexDirection="column"
                onPress={handleBiometricAuth}
                padding={14}
            >
                <Image source={biometricImage} width={95} height={95} />
                <Text>Use Biometrics</Text>
            </Stack>
        </Stack>}
        <Stack flex={1} justifyContent="flex-end">
            <XStack justifyContent="center" paddingBottom={30}>
                <SecondaryButton onPress={handleOnLogout}>Sign out</SecondaryButton>
            </XStack>
        </Stack>
    </SafeAreaView>
}
ConfirmLoginScreen.displayName = "ConfirmLoginScreen";

export default ConfirmLoginScreen;