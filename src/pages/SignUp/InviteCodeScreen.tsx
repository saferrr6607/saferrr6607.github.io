import React, { PropsWithChildren, useCallback, useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Stack } from "tamagui";
import { HeaderText, InputWithError, SubHeader } from "./recipe";
import { useFocusEffect } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { AccountInvites, InviteCodes } from "../../models";
import PrimaryButton from "../../components/PrimaryButton";
import { alertUser } from "../../utils/alert";
import { FormContext } from ".";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

console.log(InviteCodes)
const acceptedCodes = Object.values(InviteCodes);

function InviteCodeScreen(props: PropsWithChildren & NativeStackScreenProps<any>) {

    const { navigation } = props;

    const ctx = useContext(FormContext);

    const [inviteCode, setInviteCode] = useState<string>('');
    const [inviteCodeError, setInviteCodeError] = useState<string>('');

    const validateInviteCode = () => {
        if (inviteCode === '') {
            setInviteCodeError('Please enter a valid invite code');
            return;
        }

        if (!acceptedCodes.includes(inviteCode as InviteCodes)) {
            setInviteCodeError('Invalid invite code');
            return;
        }

        setInviteCodeError('');
        alertUser('Invite code accepted');
        ctx.updateInviteCode(inviteCode);

        navigation.navigate("SignUp.CreateAccount");

    };

    return <SafeAreaView style={{
        height: "100%",
        backgroundColor: "white"
    }}>
        <ScrollView paddingTop={40} paddingHorizontal={16}>
            <HeaderText marginBottom={4}>Enter your invite code</HeaderText>
            <InputWithError
                value={inviteCode}
                onChangeText={(text) => {
                    setInviteCodeError('');
                    setInviteCode(text);
                }}
                error={inviteCodeError}
                style={{ marginTop: 24 }}
                InputProps={{
                    style: { backgroundColor: 'white' }
                }}
            />
        </ScrollView>
        <Stack marginBottom={24} paddingHorizontal={16}>
            <PrimaryButton onPress={validateInviteCode}>Continue</PrimaryButton>
        </Stack>
    </SafeAreaView>
}

export default InviteCodeScreen;