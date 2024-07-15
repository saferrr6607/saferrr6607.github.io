import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { PropsWithChildren } from "react";
import Feather from 'react-native-vector-icons/dist/Feather';
import { Button, Text } from "tamagui";
import ListingScreen from "./ListingScreen";

const NavigationStack = createNativeStackNavigator();

function NotificationNavigation(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    return <NavigationStack.Navigator
        initialRouteName="Notification.Listing"
        screenOptions={({ navigation }) => ({
            headerBackVisible: false,
            headerLeft: () => <Button left={-12} px={12} icon={<Feather name='arrow-left' size={20} />} bg='transparent' onPress={() => navigation.goBack()} />,
            headerTitle: () => <Text fontSize={20} fontWeight="600">Notifications</Text>,
            headerShadowVisible: false,
        })}
    >
        <NavigationStack.Screen name="Notification.Listing" component={ListingScreen} />
    </NavigationStack.Navigator>

}

export default NotificationNavigation;