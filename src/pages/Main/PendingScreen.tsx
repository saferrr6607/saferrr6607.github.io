import React from "react";
import { SafeAreaView } from "react-navigation";
import { ActivityIndicator } from "react-native";
import { Stack } from "tamagui";

function PendingScreen() {

    return <SafeAreaView style={{
        height: "100%",
        backgroundColor: "#FFF7F6"
    }}>
        <Stack style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color="#DB8780" />
        </Stack>
    </SafeAreaView>

}

export default PendingScreen;