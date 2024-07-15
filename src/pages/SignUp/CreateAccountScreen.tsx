import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Auth } from "aws-amplify";
import React, { PropsWithChildren, useCallback, useContext, useReducer, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, ScrollView, Stack, Text, XStack } from "tamagui";
import { FormContext } from ".";
import PrimaryButton from "../../components/PrimaryButton";
import { AppContext } from "../../contexts/AppContext";
import { alertUser } from "../../utils/alert";
import { HeaderText, InputWithError, SubHeader } from "./recipe";
import { AccountErrorType } from "./types";
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

type reducerActionType = {
    type: string,
    payload?: any,
};

const INITIAL_ACCOUNT_ERROR_STATE: AccountErrorType = {
    first_name: false,
    last_name: false,
    email: false,
    password: false,
};
function accountErrorReducer(state: AccountErrorType, action: reducerActionType & { payload?: boolean | string }) {
    const payload = action.payload;
    let first_name, last_name, email, password;
    switch (action.type) {
        case "RESET":
            return INITIAL_ACCOUNT_ERROR_STATE;
        case "FIRST_NAME":
            first_name = payload;
            return { ...state, first_name, };
        case "LAST_NAME":
            last_name = payload;
            return { ...state, last_name, };
        case "EMAIL":
            email = payload;
            return { ...state, email, };
        case "PASSWORD":
            password = payload;
            return { ...state, password, };
        default:
            return state;
    }
}
function useAccountError(): [AccountErrorType, Function, Function] {
    const [accountState, dispatchAccountError] = useReducer(accountErrorReducer, INITIAL_ACCOUNT_ERROR_STATE);

    const onUpdate = (type: "FIRST_NAME" | "LAST_NAME" | "EMAIL" | "PASSWORD", form: boolean | string) => {
        dispatchAccountError({
            type,
            payload: form,
        });
    };
    const onReset = () => {
        dispatchAccountError({ type: "RESET" });
    };

    return [accountState, onUpdate, onReset];
}

function CreateAccountScreen(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    console.log('rendering CreateAccountScreen');

    const { navigation } = props;
    const app_ctx = useContext(AppContext);

    const ctx = useContext(FormContext);
    const [error, updateError, resetError] = useAccountError();

    const validateForm = () => {
        let valid = true;
        const error = "This field is required.";

        resetError();

        if (!Boolean(ctx.first_name)) { updateError("FIRST_NAME", error); valid = false; }
        if (!Boolean(ctx.last_name)) { updateError("LAST_NAME", error); valid = false; }
        if (!Boolean(ctx.email)) { updateError("EMAIL", error); valid = false; }
        else {
            const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!ctx.email.match(validRegex)) {
                updateError("EMAIL", "Invalid email format.");
                valid = false;
            }
        }
        if (!Boolean(ctx.password)) { updateError("PASSWORD", error); valid = false; }
        else {
            console.log("HERER")
            const alphaRegex = /[a-zA-Z]/;
            const numericRegex = /[0-9]/;
            const symbolRegex = /[.!@#$%^&*()_+-=]/;
            if (ctx.password.length < 8) { updateError("PASSWORD", "Password must have 8 or more characters."); valid = false; }
            // else if (!ctx.password.match(alphaRegex)) updateError("PASSWORD", "Password must contain at least 1 alphabet character.");
            // else if (!ctx.password.match(numericRegex)) updateError("PASSWORD", "Password must contain at least 1 alphabet character.");
            // else if (!ctx.password.match(symbolRegex)) updateError("PASSWORD", "Password must contain at least 1 symbol.");
        }

        if (valid) {
            Auth.signUp({
                username: ctx.email,
                password: ctx.password,
                attributes: {
                    given_name: ctx.first_name,
                    family_name: ctx.last_name,
                    email: ctx.email,
                },
                autoSignIn: {
                    enabled: true
                }
            })
                .then(resp => {
                    console.log(resp);
                    navigation.replace("SignUp.OTP");
                })
                .catch(err => {
                    console.log("err", err);
                    alertUser(err.message);
                });
            // navigation.navigate("SignUp.MedicalRecord");
        }
    };

    useFocusEffect(useCallback(() => {

        let mounted = true;

        if (mounted) {
            app_ctx?.updateUserState('signup');
        }

        return function () {
            mounted = false;
        }

    }, [app_ctx]));

    const [showPwd, setShowPwd] = useState<boolean>(false);
    const showIcon = showPwd ? 'eye-off' : 'eye';

    return <SafeAreaView style={{
        height: "100%",
        backgroundColor: "white"
    }}>
        <ScrollView pt={40} px={16}>
            <HeaderText mb={4}>Create an account</HeaderText>
            <SubHeader mb={24}>Step 1/2: Account information</SubHeader>
            <InputWithError
                value={ctx.first_name}
                onChangeText={(v: string) => ctx.onUpdateAccount("FIRST_NAME", v)}
                error={error.first_name}
                InputProps={{
                    fontSize: 12,
                    placeholder: "First name*",
                    returnKeyType: "next",
                }}
                mb={12}
            />
            <InputWithError
                value={ctx.last_name}
                onChangeText={(v: string) => ctx.onUpdateAccount("LAST_NAME", v)}
                error={error.last_name}
                InputProps={{
                    fontSize: 12,
                    placeholder: "Last name*",
                    returnKeyType: "next",
                }}
                mb={12}
            />
            <InputWithError
                value={ctx.email}
                onChangeText={(v: string) => ctx.onUpdateAccount("EMAIL", v)}
                error={error.email}
                InputProps={{
                    fontSize: 12,
                    placeholder: "Email Address*",
                    returnKeyType: "next",
                    keyboardType: "email-address",
                }}
                mb={12}
            />
            <XStack gap={5}>
                <InputWithError
                    value={ctx.password}
                    onChangeText={(v: string) => ctx.onUpdateAccount("PASSWORD", v)}
                    error={error.password}
                    InputProps={{
                        fontSize: 12,
                        placeholder: "Password (8+ characters)",
                        secureTextEntry: !showPwd,
                    }}
                    mb={12}
                    flex={1}
                />
                <Button icon={<Ionicons name={showIcon} size={24} />} onPress={() => setShowPwd(v => !v)} />
            </XStack>
            <Text>By continuing, you agree to SafeHer's Terms & Conditions and Privacy Policy.</Text>
        </ScrollView>
        <Stack mb={24} px={16}>
            <PrimaryButton onPress={validateForm}>Continue</PrimaryButton>
        </Stack>
    </SafeAreaView>
}

export default CreateAccountScreen;