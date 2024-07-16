import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import InviteScreen from "./InviteScreen";
import { Text } from "tamagui";
import LoginScreen from "./Login";
import React, { PropsWithChildren, useCallback, useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import { useFocusEffect } from "@react-navigation/native";
import ConfirmLoginScreen from "./ConfirmLoginScreen";
import { isEnabledBiometric } from "../../services/authentication";
import { Platform } from "react-native";

const NavigationStack = createNativeStackNavigator();

function LandingNavigation(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const app_ctx = useContext(AppContext);
    const cognito = app_ctx?.cognito;
    const { navigation } = props;

    useFocusEffect(useCallback(() => {
        if (cognito) {
            isEnabledBiometric(Platform.OS === 'ios' ? 'ios' : 'android')
                .then(({ isEnabled, key }) => {
                    console.log('isEnabled', isEnabled, key)
                    if (isEnabled) {
                        navigation.replace('Confirm.Login');
                    } else {
                        navigation.replace('App.Main');
                    }
                });
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