import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import InviteScreen from "./InviteScreen";
import { Text } from "tamagui";
import LoginScreen from "./Login";
import React, { PropsWithChildren, useCallback, useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import { useFocusEffect } from "@react-navigation/native";
import ConfirmLoginScreen from "./ConfirmLoginScreen";

const NavigationStack = createNativeStackNavigator();

function LandingNavigation(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const app_ctx = useContext(AppContext);
    const cognito = app_ctx?.cognito;
    const { navigation } = props;

    useFocusEffect(useCallback(() => {
        if (cognito) {
            navigation.replace('Confirm.Login');
        }
        return () => {

        }
    }, [cognito]));

    return <NavigationStack.Navigator
        initialRouteName="Landing.Invite"
        screenOptions={props => ({
            headerShown: false,
        })}
    >
        <NavigationStack.Screen name="Landing.Invite" component={InviteScreen} />
        <NavigationStack.Screen name="Invite.Login" component={LoginScreen} />
        <NavigationStack.Screen name="Confirm.Login" component={ConfirmLoginScreen} />
    </NavigationStack.Navigator>

}

export default LandingNavigation;