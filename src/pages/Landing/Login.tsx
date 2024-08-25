import React, { PropsWithChildren, useContext, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Auth } from "aws-amplify";
import { Pressable, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, getTokens, Image, Stack, Text, XStack } from "tamagui";
import PrimaryButton from "../../components/PrimaryButton";
import { AppContext } from "../../contexts/AppContext";
import { alertUser } from "../../utils/alert";
import { InputWithError } from "../SignUp/recipe";

const logo = require("../../assets/img/Logo-initial.png");

function LoginScreen(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const { navigation } = props;
    const app_ctx = useContext(AppContext);

    const [username, setUsername] = useState<string>('');
    const [pwd, setPwd] = useState<string>('');

    const { width, height } = useWindowDimensions();

    // @ts-ignore
    const secondary = getTokens().color.secondary.val || getTokens().color.secondary;

    const handleOnSignup = () => {
        navigation.navigate("App.SignUp");
    }

    const [loading, setLoading] = useState<boolean>(false);

    const handleOnLogin = () => {
        setLoading(true);
        Auth.signIn(username, pwd)
            .then(resp => {
                navigation.replace('App.Main');
                setUsername('');
                setPwd('');
            })
            .catch(err => {
                console.log('@lgin', err.message);
                if (err.message === 'User is not confirmed.') {
                    navigation.navigate('App.SignUp', {
                        continueSignup: true,
                        target: 'SignUp.OTP',
                        metadata: {
                            username,
                            password: pwd,
                        }
                    });
                }
                alertUser(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const [showPwd, setShowPwd] = useState<boolean>(false);

    const showIcon = showPwd ? 'eye-off' : 'eye';

    return <SafeAreaView style={{
        height: "100%",
        backgroundColor: secondary,
    }}>
        <Stack paddingHorizontal={40} paddingTop={60} marginBottom={30}>
            <XStack style={{ width: "100%" }}>
                <Image source={logo} width={150} height={75} marginBottom={25} resizeMode="contain" />
            </XStack>
            <InputWithError
                value={username}
                onChangeText={setUsername}
                error={''}
                InputProps={{
                    fontSize: 12,
                    placeholder: "Email",
                    returnKeyType: "next",
                }}
                disabled={loading}
                marginBottom={12}
            />
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
                    disabled={loading}
                    marginBottom={12}
                    flex={1}
                />
                <Button icon={<Ionicons name={showIcon} size={24} />} onPress={() => setShowPwd(v => !v)} />
            </XStack>
            <XStack marginBottom={40} justifyContent="flex-end">
                <Pressable onPress={handleOnSignup} disabled={loading}>
                    <Text fontSize={11} color={"#0EA5EF"} textDecorationLine="underline">Don't have an account?</Text>
                </Pressable>
            </XStack>
            <PrimaryButton disabled={loading} onPress={handleOnLogin}>Login</PrimaryButton>
        </Stack>
    </SafeAreaView>
}
LoginScreen.displayName = "LoginScreen";

export default LoginScreen;