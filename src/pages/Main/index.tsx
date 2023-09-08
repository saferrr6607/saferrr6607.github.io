import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "./DashboardScreen";
import { Image, Text } from "tamagui";
import Icon from 'react-native-vector-icons/dist/Feather';
import TestScreen from "./TestScreen";
import SOSScreen from "./SOSScreen";
import TermsAndPrivacyScreen from "./TermsAndPrivacyScreen";

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
    </NavigationStack.Navigator>

}

export default MainNavigation;