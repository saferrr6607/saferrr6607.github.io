import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DataStore } from "aws-amplify";
import React, { PropsWithChildren, useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Adapt, Button, Dialog, DialogProps, Separator, Sheet, Spinner, Stack, styled, Text, Unspaced, XStack, ZStack } from "tamagui";
import { EmergencyContact, MedicalRecord } from "../../models";
import { checkTorchPermission } from "../../utils/permissions.android";
import DrawerScreen from "./components/DrawerScreen";
import Geolocation from '@react-native-community/geolocation';
import MapView, { Region } from "react-native-maps";
import { Alert, FlatList, Platform, Share, StyleSheet, ToastAndroid } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import axios from "axios";
import { Text as RText } from 'react-native';
import Feather from 'react-native-vector-icons/dist/Feather';

import ReactNativeBlobUtil from 'react-native-blob-util'
import { AppContext } from "../../contexts/AppContext";
import { setPath } from "react-native-reanimated/lib/types/lib/reanimated2/animation/styleAnimation";
import ContactListItem from "../../components/ContactListItem";
import { ContactPersonType } from "../../types/contacts";
import { createSOSMsg, sendSMS } from "../../utils/sms";
var RNFS = require('react-native-fs');

const DefaultButton = styled(Button, {
    height: 80,
    color: "white",
    pressStyle: { opacity: 0.75 },
});

function useGeoCode(shareMode: boolean) {

    const [myLoc, setMyLoc] = useState<string>('');
    const [shareableLink, setShareableLink] = useState<string>('');
    const [searching, setSearch] = useState<boolean>(false);

    useEffect(() => {
        if (shareMode) {
            setSearch(true);
            const apikey = Platform.select({
                android: "YOUR_MAP_API_KEY",
                ios: "YOUR_MAP_IOS_API_KEY",
            });
            Geolocation.getCurrentPosition(async info => {
                const coor = info.coords;
                const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coor.latitude},${coor.longitude}&key=${apikey}`;
                setShareableLink(`https://www.google.com/maps/search/?api=1&query=${coor.latitude},${coor.longitude}`);
                return axios.get(url)
                    .then(response => {
                        const data = response.data;
                        const results = data.results;
                        const geoplus = data.plus_code;
                        setMyLoc(geoplus.compound_code);
                        setSearch(false);
                    });
            });
        }
    }, [shareMode]);

    return [myLoc, shareableLink, searching];

}

const sharePhases = ['initial', 'contact', 'link'] as const;
type SharePhaseType = typeof sharePhases[number];
function ShareDialog(props: PropsWithChildren & DialogProps & { onOpenChange: Function, link: string }): JSX.Element {

    const { onOpenChange, link } = props;

    const [phase, setPhase] = useState<SharePhaseType>('initial');

    const app_ctx = useContext(AppContext);
    const me = app_ctx?.cognito ?? null;
    const name = me?.name ?? '';

    const [model, setModel] = useState<{ [key: string]: ContactPersonType | null } | null | undefined>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        return function () {
            setPhase('initial');
            setModel(null);
            setLoading(false);
        }
    }, []);

    const toggleModel = (id: string, name: string, phone_number: string) => {

        let selected = Boolean(model) ? Object.values(model) : [];
        selected = selected.filter(item => Boolean(item));

        const in_selected = Boolean(model && model[id]);
        console.log('check in selected');
        if (in_selected) {
            setModel(model => ({ ...model, [id]: null }));
            // setSelected(ids => {
            //     return ids.filter(v => v != id);
            // });
        } else {
            if (selected.length < 5) {
                setModel(model => ({ ...model, [id]: { id, name, phone_number } }));
            }
        }
    };

    const handleOnShareToContacts = () => setPhase('contact');
    const handleOnShareLink = () => {
        onOpenChange(false);
        setPhase('initial');
        const content = createSOSMsg(name, link);
        Share.share({
            message: content,
        });
        // share link
    }

    const handleOnShare = async () => {
        let selected = Boolean(model) ? Object.values(model) : [];
        selected = selected.filter(item => Boolean(item));

        if (selected.length == 0) {
            if (Platform.OS == 'android') {
                ToastAndroid.showWithGravityAndOffset("Please select at least 1 emergency contact", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
            } else {
                Alert.alert("Please select at least 1 emergency contact");
            }
            return;
        }

        setLoading(true);

        try {
            for (let contact of selected) {
                if (contact?.phone_number) {
                    const response = await sendSMS(contact?.phone_number, link, name);
                }
            }
        } catch (err) {
            console.log('err@handleOnShare', err.message);
        }

        setLoading(false);

        onOpenChange(false);

    }

    return <Dialog modal open={props.open} onOpenChange={onOpenChange}>
        <Dialog.Portal>
            <Dialog.Overlay
                key="overlay"
                animation="quick"
                opacity={0.5}
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
            />
            <Dialog.Content marginHorizontal={20}>
                <Dialog.Title height={32}>
                </Dialog.Title>
                {phase == 'initial' && <>
                    <Dialog.Description fontSize={18} fontWeight={'700'} flexWrap='wrap' textAlign="center" px={10} mb={40}>
                        How do you want to share your location?
                    </Dialog.Description>
                    <Stack gap={12}>
                        <PrimaryButton onPress={handleOnShareToContacts}>Share to my emegency contact</PrimaryButton>
                        <SecondaryButton onPress={handleOnShareLink}>Create a shareable link</SecondaryButton>
                    </Stack>
                </>}
                {phase == 'contact' && <>
                    <Dialog.Description fontSize={18} fontWeight={'700'} flexWrap='wrap' textAlign="center" px={10} mb={40}>
                        Share to my emergency contact
                    </Dialog.Description>
                    {app_ctx?.myContacts.map((item, index) => {
                        const checked = Boolean(model && model[item.id]);
                        return <React.Fragment key={`x${index}-${Boolean(model && model[item.id]) ? item.id : 'x'}`}>
                            <ContactListItem key={`${index}-${Boolean(model && model[item.id]) ? item.id : 'x'}`} {...item} updateModel={toggleModel} checked={checked} />
                            <Separator mb={10} />
                        </React.Fragment>
                    })}
                    <PrimaryButton
                        disabled={loading}
                        onPress={handleOnShare}
                    >
                        {!loading && `Share`}
                        {loading && <><Spinner color='white' mr={5} /><Text color='white'>Sharing...</Text></>}
                    </PrimaryButton>
                </>}
                <Unspaced>
                    <Dialog.Close asChild>
                        <Button
                            position="absolute"
                            top={5}
                            right={5}
                            circular
                            bg='transparent'
                            icon={<Feather name='x' size={24} />}
                        />
                    </Dialog.Close>
                </Unspaced>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog >
}

function DashboardScreen(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const { navigation } = props;

    const gotoSOS = () => navigation.navigate("Main.SOS");

    const [initialCoor, setInitialCoor] = useState<Region>({ latitude: 0, longitude: 0, latitudeDelta: 0, longitudeDelta: 0 });
    const [init, setInit] = useState<boolean>(false);
    const [mapbox, setMapbox] = useState<{ width: number, height: number }>({ width: 0, height: 0 });

    useEffect(() => {
        Geolocation.getCurrentPosition(info => {
            const coor = info.coords;

            if (mapbox.width > 0) {
                setInitialCoor({
                    latitude: coor.latitude,
                    longitude: coor.longitude,
                    latitudeDelta: 0.004757,
                    longitudeDelta: 0.006866,
                });
                setInit(true);
            }

        });
    }, [mapbox]);

    const [shareMode, setShareMode] = useState<boolean>(false);

    const onPressShare = () => setShareMode(true);
    const onPressStopShare = () => setShareMode(false);

    const [myLoc, shareLink, searching] = useGeoCode(shareMode);

    useEffect(() => {
        navigation.setOptions({
            headerShown: !shareMode,
        });
    }, [shareMode]);

    useEffect(() => {
        return () => onPressStopShare();
    }, []);

    const [showShare, setShowShare] = useState<boolean>(false);

    return <DrawerScreen
        active="home"
    >
        <ShareDialog open={showShare} onOpenChange={(open) => setShowShare(open)} link={shareLink} />
        <SafeAreaView style={{
            height: "100%",
            backgroundColor: "white"
        }}>
            <Stack style={{ width: '100%', height: '100%', flex: 1 }} onLayout={(event) => {
                var { width, height } = event.nativeEvent.layout;
                setMapbox({ width, height })
            }}>
                {init && <MapView
                    initialRegion={initialCoor}
                    style={{ flex: 1 }}
                    provider='google'
                    showsUserLocation={true}
                    followsUserLocation={true}
                // loadingEnabled={true}
                />}
            </Stack>
            {!shareMode && <Stack backgroundColor={"white"} p={16} gap={16}>
                <DefaultButton bg="$emergency" onPress={gotoSOS}>Emergency SOS</DefaultButton>
                <XStack gap={16}>
                    <DefaultButton flex={1} bg="$file">File a report 🚧</DefaultButton>
                    <DefaultButton flex={1} bg="$loc" onPress={onPressShare}>Share location</DefaultButton>
                </XStack>
            </Stack>}
            {shareMode && <ZStack style={StyleSheet.absoluteFill}>
                <XStack style={{ position: "absolute", width: '100%', top: 24 }} px={16}>
                    <Stack bg='$file' px={24} py={16} flex={1} borderRadius={50} alignItems="center" flexDirection="row">
                        {searching && <><Spinner mr={4} color="white" /><Text color='white'>Getting my location</Text></>}
                        {!searching && <Text flex={1} color='white' textAlign="center">{myLoc}</Text>}
                    </Stack>
                </XStack>
                <XStack p={8} gap={4} style={{ position: "absolute", width: '100%', bottom: 24 }}>
                    <SecondaryButton bg={'white'} onPress={onPressStopShare} flex={0}>Cancel</SecondaryButton>
                    <PrimaryButton flex={1} onPress={() => {
                        setShowShare(true);
                        // if (Platform.OS == 'android') {
                        //     ToastAndroid.showWithGravityAndOffset(`Shareable link: ${shareLink}`, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50); ToastAndroid
                        // } else {
                        //     Alert.alert(`Shareable link: ${shareLink}`);
                        // }
                    }}>
                        Share live location
                    </PrimaryButton>
                </XStack>
            </ZStack>
            }
        </SafeAreaView>
    </DrawerScreen>

}

export default DashboardScreen;