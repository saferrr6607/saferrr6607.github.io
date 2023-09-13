import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Image } from "tamagui";
import FileReportNavigation from "../FileReport";
import NotificationNavigation from "../Notification";
import DashboardScreen from "./DashboardScreen";
import SOSScreen from "./SOSScreen";
import TermsAndPrivacyScreen from "./TermsAndPrivacyScreen";
import TestScreen from "./TestScreen";

const NavigationStack = createNativeStackNavigator();
const logo = require("../../assets/img/Logo-initial.png");

function MainNavigation(): JSX.Element {

    return <NavigationStack.Navigator
        initialRouteName="Main.Dashboard"
        screenOptions={props => ({
            headerBackVisible: false,
            headerTitle: () => <Image source={logo} />,
            headerShadowVisible: false,
        })}
    >
        <NavigationStack.Screen name="Main.Dashboard" component={DashboardScreen} />
        <NavigationStack.Screen name="Main.Test" component={TestScreen} />
        <NavigationStack.Screen name="Main.SOS" component={SOSScreen} />
        <NavigationStack.Screen name="Main.TermsPrivacy" component={TermsAndPrivacyScreen} />
        <NavigationStack.Screen name="Main.FileReport" component={FileReportNavigation} options={props => ({
            headerShown: false,
        })} />
        <NavigationStack.Screen name="Main.Notifications" component={NotificationNavigation} options={props => ({
            headerShown: false,
        })} />
    </NavigationStack.Navigator>

}

export default MainNavigation;