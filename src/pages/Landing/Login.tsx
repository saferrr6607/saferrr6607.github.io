import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { PropsWithChildren, useCallback, useContext, useState } from "react";
import { Button, Image, Input, Stack, Text, View, XStack, getTokens, styled } from "tamagui";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import { useFocusEffect } from "@react-navigation/native";
import { AppContext } from "../../contexts/AppContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, ToastAndroid, useWindowDimensions } from "react-native";
import { InputWithError } from "../SignUp/recipe";
import { Auth } from "aws-amplify";
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const logo = require("../../assets/img/Logo-initial.png");

function LoginScreen(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const { navigation } = props;
    const app_ctx = useContext(AppContext);

    const [username, setUsername] = useState<string>('');
    const [pwd, setPwd] = useState<string>('');

    const { width, height } = useWindowDimensions();

    const secondary = getTokens().color.secondary.val;

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
                setLoading(false);
            })
            .catch(err => {
                ToastAndroid.showWithGravityAndOffset(err.message, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
            });
    }

    const [showPwd, setShowPwd] = useState<boolean>(false);

    const showIcon = showPwd ? 'eye-off' : 'eye';

    return <SafeAreaView style={{
        height: "100%",
        backgroundColor: secondary,
    }}>
        <Stack flex={1} px={40} pt={60}>
            <XStack style={{ width: "100%" }}>
                <Image source={logo} width={150} height={75} mb={25} resizeMode="contain" />
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
                mb={12}
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
                    mb={12}
                    flex={1}
                />
                <Button icon={<Ionicons name={showIcon} size={24} />} onPress={() => setShowPwd(v => !v)} />
            </XStack>
            <XStack mb={40} justifyContent="flex-end">
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