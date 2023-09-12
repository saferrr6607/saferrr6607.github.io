import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InviteScreen from "./InviteScreen";
import { Text } from "tamagui";
import LoginScreen from "./Login";
import React from "react";

const NavigationStack = createNativeStackNavigator();

function LandingNavigation(): JSX.Element {

    return <NavigationStack.Navigator
        initialRouteName="Landing.Invite"
        screenOptions={props => ({
            headerShown: false,
        })}
    >
        <NavigationStack.Screen name="Landing.Invite" component={InviteScreen} />
        <NavigationStack.Screen name="Invite.Login" component={LoginScreen} />
    </NavigationStack.Navigator>

}

export default LandingNavigation;