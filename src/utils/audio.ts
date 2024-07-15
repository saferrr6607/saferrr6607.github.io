import { NativeModules, PermissionsAndroid } from "react-native";
import AudioRecord from "react-native-audio-record";
import { alertUser } from "./alert";
import { checkAudioPermission } from "./permissions.android";

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

export { AudioRecorder };