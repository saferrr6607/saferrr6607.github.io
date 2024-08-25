/**
 * AccountHeldScreen.tsx - screen for account being verified or denied
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Auth, DataStore } from "aws-amplify";
import React, { PropsWithChildren } from "react";
import { SafeAreaView } from "react-navigation";
import { Stack, Text } from "tamagui";
import SecondaryButton from "../../components/SecondaryButton";

function AccountHeldScreen(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const { navigation, route } = props;

    const verificationStatus = route.params?.status;

    const accountHeldTitle = verificationStatus === "denied" ? "APP ACCESS DENIED!" : "Give us a second!";
    const accountHeldMessage = verificationStatus === "denied" ? "Your account has been denied" : "Your account is being verified";

    const handleOnLogout = async () => {
        try {
            console.log('@handle logout');
            await Auth.signOut();
            console.log('@signout');
            await DataStore.clear();
            console.log('@DS clear');
            navigation.navigate("App.Landing");

        } catch (err) {
            console.log("err@handleLogout");
            console.log(err);
        }
    }

    return <SafeAreaView style={{
        height: "100%",
        backgroundColor: "#FFF7F6"
    }}>
        <Stack style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 12 }}>
            <Text fontSize={28} color="#463D3C" textTransform="uppercase" fontWeight={"500"}>{accountHeldTitle}</Text>
            <Text fontSize={16} color="#463D3C">{accountHeldMessage}</Text>
            <SecondaryButton onPress={handleOnLogout}>OK</SecondaryButton>
        </Stack>
    </SafeAreaView>

}

export default AccountHeldScreen;