import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Auth, DataStore } from "aws-amplify";
import { PropsWithChildren } from "react";
import React, { Platform, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/dist/Feather';
import { ListItem, Separator, Stack, View } from "tamagui";

function DrawerMenu(props: PropsWithChildren & { active: string }) {

    const { active = "home" } = props;
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const atHome = active == "home";
    const atNotif = active == "notif";
    const atTestSite = active == "test";
    const atTermsOfUse = active == "terms";

    const handleLogout = async () => {
        try {
            await Auth.signOut();
            await DataStore.clear();
            navigation.navigate("App.Landing");

        } catch (err) {
            console.log("err@handleLogout");
            console.log(err);
        }
    }

    const gotoDashboard = () => navigation.navigate("Main.Dashboard");
    const gotoTest = () => navigation.navigate("Main.Test");
    const gotoTerms = () => navigation.navigate("Main.TermsPrivacy");
    const gotoNotification = () => navigation.navigate("Main.Notifications");

    return <Stack style={{ height: "100%", paddingBottom: 10, backgroundColor: "white" }}>
        <TouchableOpacity onPress={gotoDashboard}><ListItem bg={atHome ? "$secondary" : "initial"} icon={<Icon name="home" size={16} />}>Dashboard</ListItem></TouchableOpacity>
        <Separator my={12} />
        <TouchableOpacity onPress={gotoNotification}><ListItem bg={atNotif ? "$secondary" : "initial"} icon={<Icon name="bell" size={16} />}>Notifications</ListItem></TouchableOpacity>
        {Platform.OS == 'android' && <TouchableOpacity onPress={gotoTest}><ListItem bg={atTestSite ? "$secondary" : "initial"} icon={<Icon name="tool" size={16} />}>Testing Space</ListItem></TouchableOpacity>}
        <View flex={1} />
        <TouchableOpacity onPress={gotoTerms}><ListItem bg={atTermsOfUse ? "$secondary" : "initial"} icon={<Icon name="book" size={16} />}>Terms of Use and Privacy Policy</ListItem></TouchableOpacity>
        <Separator mb={12} mt={4} />
        <TouchableOpacity onPress={handleLogout}><ListItem icon={<Icon name="log-out" size={16} />}>Log out</ListItem></TouchableOpacity>
    </Stack>

}
DrawerMenu.displayName = "DrawerMenu";

export default DrawerMenu;