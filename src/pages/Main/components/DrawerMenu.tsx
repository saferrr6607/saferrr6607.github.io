import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Auth, DataStore } from "aws-amplify";
import { PropsWithChildren } from "react";
import React, { Platform, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { Image, ListItem, Separator, Stack, View } from "tamagui";

const biometric_icon = require('../../../assets/img/bio-id.png');
const safeword_icon = require('../../../assets/img/safe-word.png');
// @ts-ignore
import BioIdIcon from '../../../assets/img/bio-id.svg';
// @ts-ignore
import SafeWordIcon from '../../../assets/img/safe-word.svg';

function DrawerMenu(props: PropsWithChildren & { active: string }) {

    const { active = "home" } = props;
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const atHome = active == "home";
    const atNotif = active == "notif";
    const atTestSite = active == "test";
    const atTermsOfUse = active == "terms";
    const atDiary = active == "diary";
    const atSettings = active == "settings";

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
    const gotoContacts = () => navigation.navigate("Main.Contacts");
    const gotoHotline = () => navigation.navigate("Main.Hotline");
    const gotoCommutingDiary = () => navigation.navigate("Main.CommutingDiary");
    const gotoSettings = () => navigation.navigate("Main.Settings");

    const gotoBiometricsSetup = () => navigation.navigate('Main.Biometrics');
    const gotoSafeWords = () => navigation.navigate('Main.SafeWords');

    return <Stack style={{ height: "100%", paddingBottom: 10, backgroundColor: "white" }}>
        <TouchableOpacity onPress={gotoDashboard}><ListItem bg={atHome ? "$secondary" : "initial"} icon={<Icon name="home" size={16} />}>Dashboard</ListItem></TouchableOpacity>
        <Separator marginVertical={12} />
        <TouchableOpacity onPress={gotoNotification}><ListItem bg={atNotif ? "$secondary" : "initial"} icon={<Icon name="bell" size={16} />}>Notifications</ListItem></TouchableOpacity>
        <TouchableOpacity onPress={gotoContacts}><ListItem bg={atNotif ? "$secondary" : "initial"} icon={<Icon name="bell" size={16} />}>Emergency Contacts</ListItem></TouchableOpacity>
        {/* {Platform.OS == 'android' && <TouchableOpacity onPress={gotoTest}><ListItem bg={atTestSite ? "$secondary" : "initial"} icon={<Icon name="tool" size={16} />}>Testing Space</ListItem></TouchableOpacity>} */}
        <TouchableOpacity onPress={gotoBiometricsSetup}><ListItem bg={atNotif ? "$secondary" : "initial"} icon={<BioIdIcon width={15} height={15} />}>Enable Biometrics</ListItem></TouchableOpacity>
        <TouchableOpacity onPress={gotoHotline}><ListItem bg={atNotif ? "$secondary" : "initial"} icon={<Icon name="phone-call" size={16} />}>Hotline Database</ListItem></TouchableOpacity>
        <TouchableOpacity onPress={gotoCommutingDiary}><ListItem bg={atDiary ? "$secondary" : "initial"} icon={<AntIcon name="book" size={16} />}>Commuting Diary</ListItem></TouchableOpacity>
        <TouchableOpacity onPress={gotoSafeWords}><ListItem bg={atNotif ? "$secondary" : "initial"} icon={<SafeWordIcon width={16} height={16} />}>SafeWord</ListItem></TouchableOpacity>
        {/* <Separator marginVertical={12} /> */}
        {/* <TouchableOpacity onPress={gotoSettings}><ListItem bg={atSettings ? "$secondary" : "initial"} icon={<AntIcon name="setting" size={16} />}>Settings</ListItem></TouchableOpacity> */}
        <View flex={1} />
        <TouchableOpacity onPress={gotoTerms}><ListItem bg={atTermsOfUse ? "$secondary" : "initial"} icon={<Icon name="book" size={16} />}>Terms of Use and Privacy Policy</ListItem></TouchableOpacity>
        <Separator mb={12} mt={4} />
        <TouchableOpacity onPress={handleLogout}><ListItem icon={<Icon name="log-out" size={16} />}>Log out</ListItem></TouchableOpacity>
    </Stack>

}
DrawerMenu.displayName = "DrawerMenu";

export default DrawerMenu;