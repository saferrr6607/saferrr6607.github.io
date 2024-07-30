import React, { useContext } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsWithChildren, createRef, forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Stack, Text, XStack } from "tamagui";
import Button from "../../components/Button";
import { HeaderText } from "./recipe";
import moment from 'moment';
import { TextInput, TextInputKeyPressEventData } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { alertUser } from "../../utils/alert";
import { FormContext } from ".";
import { Auth, DataStore } from "aws-amplify";
import { AccountInvites } from "../../models";
import { InviteCodes } from "../../models";

const useResetOTP = (email: string) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const [otpResetState, setOtpResetState] = useState<string>('initial');

    // Function to reset OTP and disable button
    const resetOTP = useCallback(() => {
        console.log("Resetting OTP for", email);
        // Call your existing reset OTP function here
        // Assuming resetOtpFunction() is the function that resets OTP
        Auth.resendSignUp(email)
            .then(resp => {
                console.log(resp);
                setIsButtonDisabled(true);
                setCountdown(120); // Set countdown for 2 minutes (120 seconds)

            }).catch(err => {
                const _err = err.message || JSON.stringify(err);
                let text1 = 'Error encountered', text2 = _err;
                alertUser(text2);
            });

    }, []);

    const interval = useRef<ReturnType<typeof setInterval> | null>(null);

    // Effect to handle countdown
    useEffect(() => {
        console.log('@effect', isButtonDisabled, countdown, otpResetState);
        if ((isButtonDisabled && countdown > 0) || otpResetState === 'initial') {
            interval.current = setInterval(() => {
                setCountdown((currentCountdown) => currentCountdown - 1);
                setOtpResetState('counting');
            }, 1000);
        } else {
            if (countdown === 0) {
                setIsButtonDisabled(false);
                setOtpResetState('stopped');
            }
        }
        return () => {
            console.log('UNMOUNT RESET')
            if (interval.current !== null) {
                clearInterval(interval.current);
            }
            interval.current = null;
        };
    }, [interval.current, isButtonDisabled, setCountdown, countdown, otpResetState]);

    return {
        isButtonDisabled,
        resetOTP,
        countdown
    };
};

const generateRandomArray = (): number[] => {
    const arraySize = 6;
    const min = 1;
    const max = 10;
    const randomArray: number[] = [];

    while (randomArray.length < arraySize) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!randomArray.includes(randomNumber)) {
            randomArray.push(randomNumber);
        }
    }

    return randomArray;
};

const randomArray = generateRandomArray();

type OTPFieldRef = {
    reset: () => void;
};
const OTPField = forwardRef((props: { updateOTP: (otp: string) => void }, ref: React.Ref<OTPFieldRef>) => {

    const { updateOTP } = props;

    // State to store each digit of the OTP
    const [otp, setOtp] = useState(new Array(6).fill(''));
    // References for each input field to manage focus
    const inputRefs = Array.from({ length: 6 }, () => createRef<TextInput>());

    useImperativeHandle(ref, () => ({
        reset: () => {
            setOtp(new Array(6).fill(''));
            inputRefs[0].current?.focus();
            updateOTP('');
        }
    }));

    const handleChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
        // Move focus to next input if text is not empty and it is not the last input
        updateOTP(newOtp.join(''));
        if (text && index < 5) {
            inputRefs[index + 1].current?.focus();
        }
    };

    const handleKeyPress = (keyPressed: string, index: number) => {
        if (keyPressed === 'Backspace' && index > 0 && otp[index] === '') {
            const newOtp = [...otp];
            newOtp[index - 1] = ''; // Clear the previous field
            setOtp(newOtp);
            updateOTP(newOtp.join(''));
            inputRefs[index - 1].current?.focus();
        } else if (keyPressed === 'Enter' && index < 5) {
            inputRefs[index + 1].current?.focus();
        }
    };

    return <XStack padding={20} justifyContent="space-around">
        {otp.map((digit, index) => (
            <TextInput
                key={randomArray[index]}
                style={{ width: 40, height: 40, textAlign: 'center', borderWidth: 1, borderColor: 'grey', borderRadius: 8 }}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                keyboardType="numeric"
                maxLength={1}
                ref={inputRefs[index]}
                returnKeyType={index < 5 ? "next" : "done"}
                onKeyPress={({ nativeEvent }) => {
                    handleKeyPress(nativeEvent.key, index);
                }}
                selectTextOnFocus={true} // Automatically highlight text when focused
            />
        ))}
    </XStack>

});

function OTPScreen(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const { navigation } = props;
    const ctx = useContext(FormContext);
    const email = ctx.email;

    const [otp, setOtp] = useState("");
    const { resetOTP, isButtonDisabled, countdown } = useResetOTP(email);

    const [disabled, setDisabled] = useState(false);

    const ref = useRef<OTPFieldRef>(null);

    const validateForm = () => {
        setDisabled(true);
        Auth.confirmSignUp(
            email,
            otp,
        ).then(async (resp) => {

            const enumCodeKey: (keyof typeof InviteCodes | 'INVALID_CODE') = Object.keys(InviteCodes).find((code) => {
                return InviteCodes[code as keyof typeof InviteCodes] === ctx.inviteCode;
            }) as keyof typeof InviteCodes | 'INVALID_CODE' || 'INVALID_CODE';

            console.log('enumCodeKey', enumCodeKey);

            if (enumCodeKey !== 'INVALID_CODE') {
                const _data = new AccountInvites({
                    code: InviteCodes[enumCodeKey],
                });
                console.log('save invite record', _data);
                return DataStore.save(_data)
                    .then(resp => {
                        navigation.replace('SignUp.MedicalRecord');
                    });
            } else {
                alertUser("Invalid invite code!");
                Auth.signOut();
                navigation.replace('App.Landing');
            }

        }).catch((err) => {
            const _err = err.message || JSON.stringify(err);
            let text1 = 'Error encountered', text2 = _err;
            alertUser(text2);
            ref.current?.reset();
        }).finally(() => {
            setDisabled(false);
        });
    };

    useEffect(() => {
        let mounted = true;
        if (otp.length === 6 && mounted) {
            validateForm();
        }
        return function () {
            mounted = false;
        }
    }, [otp]);

    const resetOTPText = countdown > 0 ? `${moment.utc(countdown * 1000).format("mm:ss")}` : "Resend OTP";

    return <SafeAreaView style={{
        height: "100%",
        backgroundColor: "white"
    }}>
        <ScrollView paddingTop={40} paddingHorizontal={16}>
            <HeaderText marginBottom={4}>Confirm your account</HeaderText>
            <Text marginBottom={20}>Please check the otp in your email.</Text>

            <OTPField updateOTP={setOtp} ref={ref} />

            <Button onPress={resetOTP} disabled={disabled || isButtonDisabled} variant='secondary' alignSelf="center" width={150} fontSize={14}>{resetOTPText}</Button>

        </ScrollView>
        <Stack marginBottom={24} paddingHorizontal={16}>
            <Button variant="primary" disabled={disabled} onPress={validateForm}>Confirm with OTP</Button>
        </Stack>
    </SafeAreaView>

}

export default OTPScreen;