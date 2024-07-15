import Voice, { SpeechResultsEvent } from '@react-native-voice/voice';
import { checkAudioPermission } from "../utils/permissions.android";
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { getSafeWords, initializeSafeWords, isInitializedSafeWords } from '../services/safeWords';
import { SafeWords } from '../models';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function stopSafeWordsEngine() {
    Voice.stop();
}

export default function useSafeWords() {

    const [initialized, setInitialized] = useState<boolean>(false);
    const [list, setList] = useState<SafeWords[]>([]);

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const startSafeWordsEngine = async () => {
        let started = false, message = '';
        let granted = '';

        try {

            console.log('attempt start');

            const list = await getSafeWords();

            if (Platform.OS == 'android') {
                granted = await checkAudioPermission();
            } else {
                granted = 'granted'; // ??
            }

            if (granted === 'granted') {

                Voice.onSpeechStart = (event) => {
                    console.log('startedxxx', event)
                };

                Voice.onSpeechEnd = (event) => {
                    console.log('stopped', event)
                };

                Voice.onSpeechRecognized = (event: any) => {
                    console.log('onSpeechRecognized: ', event);
                };

                Voice.onSpeechResults = (event: any) => {
                    console.log('onSpeechResults: ', event);
                    Voice.stop();
                    setTimeout(() => {
                        Voice.start('en-US')
                    }, 500);
                };

                Voice.onSpeechPartialResults = (event) => {
                    const markers = list.map((item) => item.safe_word?.replace(/[^a-zA-Z]/g, '').toLowerCase());
                    console.log('onSpeechPartialResuxxxlts: ', event);
                    console.log('markers', markers);
                    const results = event.value;
                    let _: string[] = [];
                    if (results && results.length > 0) {
                        console.log("results", results);
                        console.log("join", results.join(" "));
                        console.log("split", results.join(" ").split(" "));
                        _ = results.join(" ").split(" ");
                    }

                    const matched = _;
                    console.log('matched', matched);
                    const has_match = matched.some((word: string) => markers.includes(word.toLowerCase()));
                    console.log('has_match', has_match);

                    if (has_match) {
                        navigation.push('Main.SOS');
                        setTimeout(() => {
                            Voice.destroy().then(Voice.removeAllListeners)
                        }, 1000);
                    }
                }

                console.log("START VOCIE!")

                await Voice.cancel();
                await Voice.stop();

                await Voice.start('en-US')
                    .then(resp => {
                        console.log('vpoice start', resp);
                    })
                    .catch(err => {
                        console.log('cannot start', err)
                    });

                started = true;

            } else {
                started = false;
                message = "Please manually allow the microphone from the app settings.";
            }

        } catch (err) {
            console.log(err);
            throw err;
        }

        return granted;
    }

    const initializer = async () => {
        try {

            const { initialized, enableSafeWords } = await isInitializedSafeWords()

            if (!initialized) {
                await initializeSafeWords();
            } else {
                if (!enableSafeWords) {
                    setInitialized(false);
                    return;
                }
            }

            await startSafeWordsEngine();

            const list = await getSafeWords();

            setInitialized(true);
            setList(list);

        } catch (err) {
            console.log(err);
        }

    }

    // useEffect(() => {
    //     function onSpeechStart(e: any) {
    //         console.log('onSpeechStart: ', e);
    //     };
    //     function onSpeechEnd(e: any) {
    //         console.log('onSpeechEnd: ', e);
    //     };
    //     function onSpeechError(e: any) {
    //         console.log('onSpeechError: ', e);
    //     };
    //     function onSpeechResults(e: any) {
    //         console.log('onSpeechResults: ', e);
    //     };
    //     function onSpeechPartialResults(e: any) {
    //         const markers = list.map((item) => item.safe_word);
    //         console.log('onSpeechPartialResuxxxlts: ', e);
    //         console.log('markers', markers);
    //         const matched = e.value[0].split(' ');
    //         console.log('matched', matched);
    //         const has_match = matched.some((word: string) => markers.includes(word));
    //         console.log('has_match', has_match);
    //         Voice.stop();
    //     };
    //     function onSpeechVolumeChanged(e: any) {
    //         // console.log('onSpeechVolumeChanged: ', e);
    //     };

    //     if (initialized) {
    //         Voice.onSpeechStart = onSpeechStart;
    //         Voice.onSpeechEnd = onSpeechEnd;
    //         Voice.onSpeechError = onSpeechError;
    //         Voice.onSpeechResults = onSpeechResults;
    //         Voice.onSpeechPartialResults = onSpeechPartialResults;
    //         Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
    //     } else {
    //         Voice.cancel()
    //         Voice.stop();
    //     }

    //     return () => {
    //         setTimeout(() => {
    //             Voice.destroy().then(Voice.removeAllListeners)
    //         }, 1000);
    //     };
    // }, [initialized, list]);

    return {
        manualStart: startSafeWordsEngine,
        initialize: initializer,
        list,
        reloadList: () => {
            return getSafeWords().then(setList)
        },
    };

}