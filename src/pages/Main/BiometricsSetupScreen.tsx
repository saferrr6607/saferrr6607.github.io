import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { PropsWithChildren, useCallback, useEffect, useState } from "react";
import Feather from 'react-native-vector-icons/Feather';
import { Button, Image, Progress, ScrollView, Stack, Text, View, styled } from "tamagui";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import { updateBiometricOption } from "../../services/authentication";
import { useFocusEffect } from "@react-navigation/native";

import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import { alertUser } from "../../utils/alert";
import { Platform } from "react-native";

const MyButton = styled(Button, {
    color: '#000000',
    borderWidth: 1,
    borderColor: '#463D3C',
    borderRadius: 1000,
    backgroundColor: 'transparent',
    fontWeight: '700',
});

const successGuard = require("../../assets/img/success-guard.png");

function ConfirmationMessage(props: { allowed: boolean }) {
    const { allowed } = props;

    const message = allowed ? "Success! You've activated your Biometrics." : "Got it! We've disabled your Biometrics."

    return <ScrollView>
        <Stack alignItems="center" paddingTop={107} gap={50}>
            <Image source={successGuard} width={87.55} height={100} />
            <Text fontWeight={'600'} fontSize={24} textAlign="center">{message}</Text>
        </Stack>
    </ScrollView>
}

function BiometricsSetupScreen({ navigation }: PropsWithChildren & NativeStackScreenProps<any>) {

    const [page, setPage] = useState<number>(1);
    const [allowed, setAllowed] = useState<boolean>(false);

    useEffect(() => {
        navigation.setOptions({
            headerBackVisible: false,
            headerTitle: () => <Text fontWeight={'600'} fontSize={20}>Enable Biometrics</Text>,
            headerLeft: () => <Button mr={5} px={12} icon={<Feather name='arrow-left' size={20} />} bg='transparent' onPress={() => navigation.goBack()} />,
            headerShadowVisible: false,
        });
    }, []);

    useFocusEffect(useCallback(() => {
        setPage(1);
    }, []));

    const allowBioId = async (allow: boolean) => {

        try {

            const rnBiometrics = new ReactNativeBiometrics();

            const { available, biometryType } = await rnBiometrics.isSensorAvailable();

            if (!available) {
                alertUser('Oops! Biometrics not available');
                return;
            }

            let key = '';
            if (biometryType === BiometryTypes.FaceID) {
                const { publicKey } = await rnBiometrics.createKeys();
                key = publicKey
            }

            await updateBiometricOption(allow, key, Platform.OS === 'ios' ? 'ios' : 'android');
            setAllowed(allow);
            setPage(2);
        } catch (err) {

        }

    }

    return <View style={{
        height: '100%',
        backgroundColor: 'white',
    }}>
        <Progress value={page * 50} borderRadius={0} height={5}>
            <Progress.Indicator backgroundColor="#DB8780" />
        </Progress>
        <ScrollView paddingHorizontal={23} gap={26}>
            {page == 1 && <Stack justifyContent="center" marginTop={48}>
                <Text fontWeight={'600'} fontSize={20} textAlign="center" marginBottom={14}>
                    Activate Biometrics to login?
                </Text>
                <Text fontWeight={'300'} fontSize={16} textAlign="center" lineHeight={16.8}>
                    Enable to allow passwordless login for your account.
                </Text>
            </Stack>}
            {page == 2 && <ConfirmationMessage allowed={allowed} />}
        </ScrollView>
        {page == 1 && <Stack paddingHorizontal={16} paddingVertical={24} backgroundColor="white" gap={12}>
            <SecondaryButton borderColor='black' color='black' fontWeight='600' onPress={() => allowBioId(false)}>
                Don't Allow
            </SecondaryButton>
            <PrimaryButton onPress={() => allowBioId(true)}>
                Confirm
            </PrimaryButton>
        </Stack>}
        {page == 2 && <Stack paddingHorizontal={16} paddingVertical={24} backgroundColor="white" gap={12}>
            <PrimaryButton onPress={() => navigation.push('Main.Dashboard')}>
                Go to Dashboard
            </PrimaryButton>
        </Stack>}
    </View>
}

export default BiometricsSetupScreen; 