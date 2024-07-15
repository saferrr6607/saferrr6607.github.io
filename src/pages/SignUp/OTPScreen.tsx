import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsWithChildren, useContext, useMemo, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, InputProps, ScrollView, Square, Stack, Text, XStack, YStack } from "tamagui";
import { HeaderText } from "./recipe";
import PrimaryButton from "../../components/PrimaryButton";
import { Alert, NativeSyntheticEvent, TextInput, TextInputChangeEventData } from "react-native";
import { Auth } from "aws-amplify";
import { FormContext } from ".";

function OTPScreen(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const { navigation } = props;

    const ctx = useContext(FormContext);

    const [b1, setB1] = useState<String>();
    const [b2, setB2] = useState<String>();
    const [b3, setB3] = useState<String>();
    const [b4, setB4] = useState<String>();
    const [b5, setB5] = useState<String>();
    const [b6, setB6] = useState<String>();

    const code = useMemo(() => {
        return `${b1}${b2}${b3}${b4}${b5}${b6}`;
    }, [b1, b2, b3, b4, b5, b6]);

    const validateForm = async () => {
        if (code.length == 6) {
            Auth.confirmSignUp(ctx.email, code)
                .then(resp => {
                    console.log("WOAH");
                    console.log(resp);
                })
                .then(_ => navigation.navigate("SignUp.MedicalRecord"))
                .catch(err => {
                    console.log("err", err, err.message);
                    Alert.alert("Oops", err.message);
                });
        }
    }

    const box1 = useRef<TextInput>(null);
    const box2 = useRef<TextInput>(null);
    const box3 = useRef<TextInput>(null);
    const box4 = useRef<TextInput>(null);
    const box5 = useRef<TextInput>(null);
    const box6 = useRef<TextInput>(null);

    const handleB1 = (text: string) => {
        setB1(text.slice(-1));
        if (text.length == 0) { }
        else box2.current?.focus();
    };
    const handleB2 = (text: string) => {
        setB2(text.slice(-1));
        if (text.length == 0) box1.current?.focus();
        else box3.current?.focus();
    };
    const handleB3 = (text: string) => {
        setB3(text.slice(-1));
        if (text.length == 0) box2.current?.focus();
        else box4.current?.focus();
    };
    const handleB4 = (text: string) => {
        setB4(text.slice(-1));
        if (text.length == 0) box3.current?.focus();
        else box5.current?.focus();
    };
    const handleB5 = (text: string) => {
        setB5(text.slice(-1));
        if (text.length == 0) box4.current?.focus();
        else box6.current?.focus();
    };
    const handleB6 = (text: string) => {
        setB6(text.slice(-1));
        if (text.length == 0) box5.current?.focus();
        else { box6.current?.blur(); validateForm(); }
    };

    const InputProps: InputProps = {
        maxWidth: 50,
        textAlign: "center",
        returnKeyType: "next",
        selectTextOnFocus: true,
        keyboardType: "number-pad",
    };

    return <SafeAreaView style={{
        height: "100%",
        backgroundColor: "white"
    }}>
        <ScrollView pt={40} px={16}>
            <HeaderText mb={4}>Confirm your account</HeaderText>
            <Text mb={20}>Please check the otp in your email.</Text>

            <XStack gap={5} mt={20}>
                <Input ref={box1} onChangeText={handleB1} {...InputProps} />
                <Input ref={box2} onChangeText={handleB2} {...InputProps} />
                <Input ref={box3} onChangeText={handleB3} {...InputProps} />
                <Input ref={box4} onChangeText={handleB4} {...InputProps} />
                <Input ref={box5} onChangeText={handleB5} {...InputProps} />
                <Input ref={box6} onChangeText={handleB6} returnKeyType="done" {...InputProps} />
            </XStack>
        </ScrollView>
        <Stack mb={24} px={16}>
            <PrimaryButton onPress={validateForm}>Confirm with OTP</PrimaryButton>
        </Stack>
    </SafeAreaView>

}

export default OTPScreen;