import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DataStore } from "aws-amplify";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Dialog, Spinner, Stack, styled, Text, XStack, ZStack } from "tamagui";
import { EmergencyContact, MedicalRecord } from "../../models";
import { checkTorchPermission } from "../../utils/permissions.android";
import DrawerScreen from "./components/DrawerScreen";
import Geolocation from '@react-native-community/geolocation';
import MapView, { Region } from "react-native-maps";
import { Alert, Platform, StyleSheet, ToastAndroid } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import axios from "axios";
import { Text as RText } from 'react-native';;

import ReactNativeBlobUtil from 'react-native-blob-util'
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

function ShareDialog(props) {
    return <Dialog open={props.open}>
        <Dialog.Trigger />
        <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
                <Dialog.Title>
                    Dito?
                </Dialog.Title>
                <Dialog.Description>
                    How do you want to share your location?
                </Dialog.Description>
                <Dialog.Close />
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog>
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

    useEffect(() => {
        console.log("ReactNativeBlobUtil.fs.dirs.DocumentDir", ReactNativeBlobUtil.fs.dirs.DocumentDir);
        console.log("RNFS.DocumentDirectoryPath", RNFS.DocumentDirectoryPath);
    }, []);

    const [showShare, setShowShare] = useState<boolean>(false);

    return <DrawerScreen
        active="home"
    >
        <ShareDialog open={showShare} />
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
                        // setShowShare(true)
                        if (Platform.OS == 'android') {
                            ToastAndroid.showWithGravityAndOffset(`Shareable link: ${shareLink}`, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50); ToastAndroid
                        } else {
                            Alert.alert(`Shareable link: ${shareLink}`);
                        }
                    }}>
                        Share live location 🚧
                    </PrimaryButton>
                </XStack>
            </ZStack>
            }
        </SafeAreaView>
    </DrawerScreen>

}

export default DashboardScreen;