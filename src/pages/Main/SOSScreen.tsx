import Geolocation from "@react-native-community/geolocation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { PropsWithChildren, useContext, useEffect, useMemo, useRef, useState } from "react";
import { BackHandler, Platform, StyleSheet, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SoundPlayer from "react-native-sound-player";
import Torch from 'react-native-torch';
import Tts from "react-native-tts";
import FIcon from 'react-native-vector-icons/dist/FontAwesome5';
import { Camera, useCameraDevices } from "react-native-vision-camera";
import { Circle, CircleProps, ListItem as TamagListItem, Square, Stack, styled, Text as TamagText, ZStack } from "tamagui";
import AlertButton from "../../components/AlertButton";
import { AppContext } from "../../contexts/AppContext";
import { EmergencyContact } from "../../models";
import { localPath } from "../../utils/files";
import { sendSOS } from "../../utils/sms";
import { upload } from "../../utils/upload";

const Text = styled(TamagText, {
    color: 'white'
});

const ListItem = styled(TamagListItem, {
    backgroundColor: 'transparent',
    color: "white"
});

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#231E20",
        height: '100%',
    },
    sos_outer: {
        backgroundColor: "#D35D5266",
    },
    sos_middle: {
        backgroundColor: "#D35D5266",
    },
    sos_inner: {
        backgroundColor: "#D35D52",
    },
});

const baseHeight = 298;

function Circlez(props: PropsWithChildren & CircleProps & { size: number }): JSX.Element {

    const { size, ..._props } = props;

    const { width: screenWidth } = useWindowDimensions();

    return <Circle
        left={screenWidth / 2 - size / 2}
        top={baseHeight / 2 - size / 2}
        size={size}
        {..._props}
    ></Circle>

}
Circlez.displayName = "Circlez";

const BoxIconStyles = StyleSheet.create({
    default: {
        borderRadius: 8,
    },
    active: {
        backgroundColor: "#B0B97A",
    },
    disabled: {
        backgroundColor: "#DD636E",
    },
});

const ItemIcon = (props: { active: boolean }): JSX.Element => {
    const { active } = props;

    const boxStyle = useMemo(() => {
        const defaultStyle = BoxIconStyles.default;
        let c = BoxIconStyles.disabled;
        if (active) c = BoxIconStyles.active;
        return StyleSheet.compose(defaultStyle, c);
    }, [active]);

    const icon_name = useMemo(() => active ? "check" : "times", [active]);

    return <Square size={24} style={boxStyle}>
        <FIcon name={icon_name} color="white" />
    </Square>
};

function useFlashingLight() {
    const [light, setLight] = useState<boolean>(false);
    const [flashing, setFlashing] = useState<boolean>(false);

    const startFlashing = () => setFlashing(true);
    const stopFlashing = () => setFlashing(false);

    useEffect(() => {
        let timeout: any;
        if (flashing) {
            timeout = setTimeout(() => {
                Torch.switchState(light);
                setLight(l => !l);
            }, light ? 500 : 1000);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [light, setLight, flashing]);

    // ON UNMOUNT
    useEffect(() => {
        return () => Torch.switchState(false)
    }, []);

    return [startFlashing, stopFlashing];

}

function useAudioPlayback() {

    useEffect(() => {

        let mounted = true;

        const speak = () => {
            SoundPlayer.playSoundFile('sample', 'wav');
        }

        speak();

        SoundPlayer.addEventListener('FinishedPlaying', () => {
            SoundPlayer.stop();
            setTimeout(() => {
                if (mounted) {
                    speak();
                }
            }, 1500);
        })

        return () => {
            mounted = false;
            SoundPlayer.stop();
        }

    }, []);

}

const speech = [
    "Hey! Stop harassing me!",
    "Stop it. Right now!",
    "I already contacted the authorities!"
] as const;
type SpeechType = typeof speech[number];
function useTTS() {

    const [speakCount, setSpeakCount] = useState<number>(0);

    const speak = (index: number) => {
        Tts.speak(speech[index % speech.length],);
    }

    const increment = () => {
        setSpeakCount(c => c + 1);
    }

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            speak(speakCount);
        }

        return function () {
            Tts.stop();
        }
    }, [speakCount]);

    useEffect(() => {

        let mounted = true;

        Tts.getInitStatus()
            .then(() => speak(0))
            .catch(err => {
                console.log("err", err);
            })

        Tts.addEventListener('tts-finish', () => {
            Tts.stop();
            setTimeout(() => {
                increment();
            }, 1500);
        });

        return () => {
            mounted = false;
            Tts.stop();
            setSpeakCount(0);
        }
    }, [setSpeakCount]);

}

function useSMS() {
    // send sms to emergency contact/s

    const app_ctx = useContext(AppContext);
    const my_contacts: Array<EmergencyContact> = app_ctx?.myContacts ?? [];
    const me = app_ctx?.cognito ?? null;
    const name = me?.name ?? '';

    const [canSend, setCanSend] = useState<boolean>(false);

    const sendMySMS = () => {
        Geolocation.getCurrentPosition(async info => {
            try {
                const coor = info.coords;
                const url = `https://www.google.com/maps/search/?api=1&query=${coor.latitude},${coor.longitude}`;
                for (let item of my_contacts) {
                    if (item.phone_number) {
                        // const response = await sendSOS(item.phone_number, url, name);
                    }
                }
            } catch (err) {
                console.log('err', err);
            }
        });
    }

    useEffect(() => {
        let mounted = true;

        setCanSend(my_contacts?.length > 0 ?? false);
        if (my_contacts?.length > 0 ?? false) {
            if (mounted) {
                sendMySMS();
            }
        }

        return function () {
            mounted = false;
        }
    }, [my_contacts]);

    return canSend;

}

const default_cams: Array<'back' | 'front'> = ["front", "back", "front", "back", "front", "back"];

function useCameraPermission() {
    const [permission, setPermission] = useState<boolean>(false);

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    useEffect(() => {

        Camera.requestCameraPermission()
            .then((newCameraPermission) => {
                setPermission(newCameraPermission == "authorized");
            })
            .catch(err => {
                console.log(err);
            })

    }, []);

    return permission;
}

function CameraModule(props: PropsWithChildren & { mount: boolean, requestUnmount: () => void, afterCapture: (v?: boolean) => void, captureCount: number }): JSX.Element {

    const { mount, requestUnmount, afterCapture, captureCount } = props;
    if (!mount) return <></>;

    const camRef = useRef<Camera>(null);

    const [activeCam, setActiveCam] = useState<boolean>(false);
    useEffect(() => {
        setActiveCam(mount);
    }, [mount]);
    const [capturing, setCapturing] = useState<boolean>(false);
    const startCapture = () => setCapturing(true);
    const stopCapture = () => setCapturing(false);

    const devices = useCameraDevices();

    const [orientation, setOrientation] = useState<'back' | 'front' | ''>('');

    useEffect(() => {
        let mounted = true;

        if (capturing) {
            const orientation: 'back' | 'front' = captureCount % 2 == 0 || true ? 'back' : 'front';

            if (!Boolean(devices[orientation])) afterCapture(false);
            else {
                setOrientation(orientation);
            }
        }

        return function () {
            mounted = false;
        }
    }, [capturing, captureCount, devices]);

    useEffect(() => {
        let timeout: any, mounted = true;
        if (orientation) {
            camRef?.current?.takePhoto({
                flash: devices[orientation]?.hasFlash ? "on" : "off",
            })
                .then(photo => {
                    console.log(photo);
                    upload(photo.path.substring(1))
                        .catch(() => {
                            return localPath(photo.path);
                        });
                    timeout = setTimeout(() => {
                        if (mounted) {
                            afterCapture();
                        }
                    }, 3000);
                })
                .catch(err => {
                    console.log("take photo", err);
                    afterCapture(false);
                });
        }
        return function () {
            mounted = false;
            clearTimeout(timeout);
        }
    }, [orientation, devices]);
    console.log(mount, activeCam, capturing, orientation);

    const noCam = !Boolean(devices?.back) && !Boolean(devices?.front);
    if (noCam) return <></>;

    return <Camera
        onInitialized={startCapture}
        ref={camRef}
        photo={true}
        style={StyleSheet.absoluteFill}
        isActive={activeCam}
        device={!orientation ? devices.back : devices[orientation]}
    // torch={"on"}
    />

}

function SOSScreen(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const { navigation } = props;

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
        BackHandler.addEventListener('hardwareBackPress', () => true);
    }, []);

    // const [activeCam, setActiveCam] = useState(false);

    const [startFlashing, stopFlashing] = useFlashingLight();
    useTTS();
    // useAudioPlayback();

    const canSend = useSMS();

    const cameraAllowed = useCameraPermission();

    const [mountCamera, setMountCamera] = useState<boolean>(false);
    const requestUnmount = () => {
        setMountCamera(false);
        startFlashing();
    }

    useEffect(() => {
        setMountCamera(cameraAllowed);
    }, [cameraAllowed]);
    useEffect(() => {
        return function () {
            setMountCamera(false);
            stopFlashing();
        }
    }, []);

    const [captureCount, setCaptureCount] = useState<number>(0);
    const afterCapture = (reset = true) => {
        if (reset) setMountCamera(false);
        setCaptureCount(c => c + 1);
    }
    useEffect(() => {
        if (captureCount >= 6) requestUnmount();
        else {
            setTimeout(() => {
                setMountCamera(true);
            }, 3000);
        }
    }, [captureCount]);

    return <SafeAreaView style={styles.background}>
        <Stack style={{ paddingBottom: 16, flex: 1 }}>
            <Stack style={{ position: 'absolute', height: 0 }}>
                <CameraModule
                    mount={mountCamera}
                    requestUnmount={requestUnmount}
                    afterCapture={afterCapture}
                    captureCount={captureCount}
                />
            </Stack>
            <ZStack style={{ height: 298, width: '100%' }} mb={40} mt={20}>
                <Circlez
                    size={298}
                    style={styles.sos_outer}
                />
                <Circlez
                    size={218}
                    style={styles.sos_middle}
                />
                <Circlez
                    size={138}
                    style={styles.sos_inner}
                >
                    <Text
                        fontSize={18}
                        fontWeight={"600"}

                    >SOS{`\n`}Alert</Text>
                </Circlez>
            </ZStack>
            <Stack flex={1} px={16} alignItems="center">
                <Text fontWeight={"600"} mb={8}>You have activated an SOS alert.</Text>
                <Text mb={16}>The following has been performed to assist you:</Text>
                <ListItem icon={<ItemIcon active={cameraAllowed} />}>Sound alarm enabled</ListItem>
                <ListItem icon={<ItemIcon active={true} />}>Flashing lights enabled</ListItem>
                <ListItem icon={<ItemIcon active={false} />}>Incident reported to 911</ListItem>
                <ListItem icon={<ItemIcon active={canSend} />}>Sent sms to your emergency contacts</ListItem>
                <ListItem icon={<ItemIcon active={cameraAllowed} />}>Front and rear photos taken</ListItem>
            </Stack>
            <AlertButton mx={16} onPress={() => navigation.goBack()}>Cancel Alert</AlertButton>
        </Stack>
    </SafeAreaView>

}

export default SOSScreen;