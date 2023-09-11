import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Circle, Image, ScrollView, Square, Stack, Text } from "tamagui";
import PrimaryButton from "../../components/PrimaryButton";
import { HeaderText, SubHeader } from "./recipe";
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import { Camera, useCameraDevices } from "react-native-vision-camera";

const phases = ['initial', 'id', 'face'] as const;
type Phases = typeof phases[number];

type DefaultPhaseScreenProps = {
    show: boolean;
};

const UploadImageStyle = StyleSheet.create({
    box: {
        borderColor: '#989898',
        borderStyle: 'dashed',
        borderWidth: 2,
        width: '100%',
        height: 150,
        marginTop: 10,
        marginBottom: 5,
        borderRadius: 10,
    },
    circle: {
        backgroundColor: 'rgb(222,222,222)',
    }
});

function IDScreen(props: PropsWithChildren & DefaultPhaseScreenProps): JSX.Element {

    const { show = false } = props;

    if (!show) return <></>;

    return <Stack flex={1} px={10}>
        {/* <Image></Image> */}
        <Text lineHeight={12 * 1.25} fontSize={12} fontWeight="500" color="$textSecondary">
            Upload your ID to secure your account and unlock more SafeHer features.
        </Text>
        <Square style={UploadImageStyle.box}>
            <Circle style={UploadImageStyle.circle} size={36}>
                <FontAwesome name='camera' size={18} color="rgb(162,162,162)" />
            </Circle>
            <Text fontSize={12}>Upload Document</Text>
        </Square>
        <Text lineHeight={10 * 1.25} fontSize={10} fontWeight="500" color="$textSecondary">Accepted format: JPEG, PNG, or PDF. Up to 5MB.</Text>
    </Stack>
}
IDScreen.displayName = "IDScreen";

function FaceScreen(props: PropsWithChildren & DefaultPhaseScreenProps): JSX.Element {

    const { show = false } = props;

    const devices = useCameraDevices();
    const [permission, setPermission] = useState('');

    useEffect(() => {

        Camera.requestCameraPermission()
            .then((newCameraPermission) => {
                if (newCameraPermission != "authorized") {
                    // request permission
                }
                setPermission(newCameraPermission);
            })
            .catch(err => {
                console.log(err);
            })

    }, []);

    const active: boolean = show && Boolean(devices) && permission == 'authorized';
    const cameraRef = useRef<Camera>(null);

    if (!show) return <></>;

    return <Stack flex={1} px={10}>
        {/* <Image></Image> */}
        <Text lineHeight={12 * 1.25} fontSize={12} fontWeight="500" color="$textSecondary">
            To validate your identity, we require you to take a selfie.
        </Text>
        <Stack style={{ flex: 1 }} my={10}>
            {active && <Camera
                ref={cameraRef}
                style={StyleSheet.absoluteFill}
                device={devices.front || devices.back}
                photo={true}
                isActive={active}
            />}
        </Stack>
    </Stack>
}
FaceScreen.displayName = "FaceScreen";

function InitialScreen(props: PropsWithChildren & DefaultPhaseScreenProps): JSX.Element {

    const { show = false } = props;

    if (!show) return <></>;

    return <Stack justifyContent="center" alignItems="center" flex={1}>
        {/* <Image></Image> */}
        <Text textAlign="center" lineHeight={12 * 1.25} px={10} fontSize={12} fontWeight="500" color="$textSecondary">To keep the app safe to use for everyone, we encourage our users to verify their identity by uploading a valid ID and taking a selfie.</Text>
    </Stack>
}
InitialScreen.displayName = "InitialScreen";

function UserVerificationScreen(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const { navigation } = props;

    const [phase, setPhase] = useState<Phases>('initial');

    const handleOnContinue = () => {
        switch (phase) {
            case "initial":
                setPhase("id");
                break;
            case "id":
                // check if has image and upload image
                setPhase("face");
                break;
            case "face":
                // take photo of self
                navigation.navigate("SignUp.EmergencyContact");
                setPhase('initial');
                break;
        }
    }

    return <SafeAreaView style={{
        height: "100%",
        backgroundColor: "white"
    }}>
        <ScrollView pt={40} px={16} contentContainerStyle={{ flex: 1 }}>
            <HeaderText mb={4}>Create an account</HeaderText>
            <SubHeader mb={24}>Step 2/2: Account verification</SubHeader>
            <InitialScreen show={phase == 'initial'} />
            <IDScreen show={phase == 'id'} />
            <FaceScreen show={phase == 'face'} />
        </ScrollView>
        <Stack mb={24} px={16}>
            <PrimaryButton onPress={handleOnContinue}>Continue</PrimaryButton>
        </Stack>
    </SafeAreaView>

}

export default UserVerificationScreen;