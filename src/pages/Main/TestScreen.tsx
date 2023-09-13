import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { PropsWithChildren, useCallback, useEffect, useMemo, useState } from "react";
import { NativeModules, PermissionsAndroid } from "react-native";
import AudioRecord from "react-native-audio-record";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, Text } from "tamagui";
import PrimaryButton from "../../components/PrimaryButton";
import { alertUser } from "../../utils/alert";
import { checkAudioPermission } from "../../utils/permissions.android";
import DrawerScreen from "./components/DrawerScreen";

const { MFCCModule } = NativeModules;

const audioConfig = {
    sampleRate: 22050, // Adjust according to your model requirements
    channels: 1,
    bitsPerSample: 16,
    wavFile: 'audio.wav', // Specify the output file name
};

class AudioRecorder {

    static init = async () => {
        try {
            const granted_mic = await checkAudioPermission();
            console.log("granted_mic", granted_mic);
            // const granted_file = await checkStoragePermission();
            // console.log("granted_file", granted_file);

            if (
                granted_mic === PermissionsAndroid.RESULTS.GRANTED
            ) {
                // startRecording();
                AudioRecord.init(audioConfig);
            } else {
                alertUser("Missing permissions!");
            }
        } catch (error) {
            console.log('Error requesting permissions: ', error);
        }
    }

    static start = async () => {
        try {
            const granted_mic = await checkAudioPermission();
            // const granted_file = await checkStoragePermission();
            // console.log("granted_file", granted_file);

            if (
                granted_mic === PermissionsAndroid.RESULTS.GRANTED
            ) {
                AudioRecord.start();
            } else {
                alertUser("Give permission to microphone!");
            }
        } catch (error) {
            console.log('Error requesting permissions: ', error);
        }
    }
    static stop = async (cb: Function) => {
        try {
            const audioFile = await AudioRecord.stop();

            console.log(audioFile);

            MFCCModule.extractMFCC(audioFile, audioConfig.sampleRate, (result: string) => {
                console.log("from python");
                console.log(result);
                cb(result);
            });

        } catch (err) {
            console.log("err", err);
        }
    }

}

function TestScreen(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const { navigation } = props;

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        MFCCModule.initialize(() => setLoading(false));
        AudioRecorder.init();
    }, []);

    const [listening, setListening] = useState<boolean>(false);
    const text = useMemo(() => listening ? "Press to stop listening" : "Press and scream", [listening]);

    const onListen = () => {
        setListening(x => !x);
    };

    const [state, setState] = useState<string>('');

    useFocusEffect(useCallback(() => {
        setState("");
    }, []));

    useEffect(() => {

        let mounted = true;

        console.log("listengin", listening, "state", state);

        if (listening) {
            if (state !== "listening") {
                setState('listening');
                AudioRecorder.start();
            }
        } else {
            if (state == "listening") {
                setState('identifying');
                AudioRecorder.stop((res: string) => {
                    let _res = "";
                    if (res == "isolated-screams") { _res = "scream" }
                    else { _res = "not-scream" }
                    setState("identified-" + _res);
                });
            }
        }

        return function () {
            mounted = false;
        }

    }, [listening, state]);

    let status = "";
    if (state == "recording") {
        status = "Recording audio...";
    } else if (state == "identifying") {
        status = "Evaluating audio...";
    } else if (state == "identified-scream") {
        status = "Identified as scream!";
    } else if (state == "identified-not-scream") {
        status = "Identified as not a scream...";
    } else {
        status = "---";
    }

    return <DrawerScreen active="test">
        <SafeAreaView style={{
            height: "100%",
            backgroundColor: "white"
        }}>
            <Stack backgroundColor={"$secondary"} flex={1} justifyContent="center" alignItems="center">
                <PrimaryButton mb={10} onPress={onListen} disabled={state == "identifying"}>{text}</PrimaryButton>
                <Text>Status: <Text fontWeight={"700"}>{status}</Text></Text>
                <Text mt={8} fontSize={12}>First run might take some time</Text>
            </Stack>
        </SafeAreaView>
    </DrawerScreen>

}

export default TestScreen;