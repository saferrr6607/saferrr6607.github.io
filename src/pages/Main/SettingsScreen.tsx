import React, { useEffect, useState } from "react";
import { Label, Separator, Switch, Text, View, XStack } from "tamagui";

import Voice, { SpeechResultsEvent } from '@react-native-voice/voice';
import { checkAudioPermission } from "../../utils/permissions.android";
import { alertUser } from "../../utils/alert";
import { Platform } from "react-native";
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'

const rnBiometrics = new ReactNativeBiometrics();

function SettingsScreen() {

    const [allowSafeWords, setAllowSafeWords] = useState<boolean>(false);
    const [textPartialRecognized, setTextPartialRecognized] = useState<string>('');
    const [textRecognized, setTextRecognized] = useState<string>('');

    const [biometricLoginOption, setBiometricLoginOption] = useState<boolean>(false);

    // useEffect(() => {
    //     function onSpeechStart(e) {
    //         console.log('onSpeechStart: ', e);
    //     };
    //     function onSpeechEnd(e) {
    //         console.log('onSpeechEnd: ', e);
    //     };
    //     function onSpeechError(e) {
    //         console.log('onSpeechError: ', e);
    //     };
    //     function onSpeechResults(e) {
    //         console.log('onSpeechResults: ', e);
    //     };
    //     function onSpeechPartialResults(e) {
    //         console.log('onSpeechPartialResults: ', e);
    //     };
    //     function onSpeechVolumeChanged(e) {
    //         // console.log('onSpeechVolumeChanged: ', e);
    //     };
    //     Voice.onSpeechStart = onSpeechStart;
    //     Voice.onSpeechEnd = onSpeechEnd;
    //     Voice.onSpeechError = onSpeechError;
    //     Voice.onSpeechResults = onSpeechResults;
    //     Voice.onSpeechPartialResults = onSpeechPartialResults;
    //     Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
    //     return () => {
    //         Voice.destroy().then(Voice.removeAllListeners);
    //     };
    // }, []);

    // useEffect(() => {

    //     const initiateVoice = async () => {

    //         let resp = '';
    //         if (Platform.OS == 'android') {
    //             resp = await checkAudioPermission();
    //         } else {
    //             resp = 'granted';
    //         }

    //         if (resp === 'granted') {

    //             Voice.onSpeechStart = (event) => {
    //                 console.log('startedxxx', event)
    //             };

    //             Voice.onSpeechPartialResults = (event) => {
    //                 console.log(event);
    //             }

    //             Voice.start('en-US')
    //                 .catch(err => {
    //                     console.log('cannot start', err)
    //                 });

    //         } else {
    //             setAllowSafeWords(false);
    //             alertUser("Please manually allow the microphone from the app settings.");
    //         }

    //     };

    //     if (allowSafeWords) {

    //         initiateVoice();

    //     } else {
    //         Voice.cancel();
    //         Voice.stop();
    //     }

    // }, [allowSafeWords]);

    useEffect(() => {
        rnBiometrics.isSensorAvailable()
            .then(resp => {
                console.log('biometrics available.', resp);
            });
    }, []);

    return <View style={{
        height: '100%',
    }} backgroundColor='white'>
        {/* SafeWords section */}
        <View paddingVertical={12} paddingHorizontal={16}>
            <XStack alignItems="baseline">
                <Label htmlFor='safewords' paddingRight={12}>
                    <Text fontSize={24} fontWeight='400' color='$text'>Safe</Text>
                    <Text fontSize={24} fontWeight='600' color='$primary'>Words</Text>
                </Label>
                <Switch id='safewords' checked={allowSafeWords} onCheckedChange={setAllowSafeWords} size='$2' backgroundColor={allowSafeWords ? '$primary' : '#ecbfbc'}>
                    <Switch.Thumb animation="quicker" backgroundColor={allowSafeWords ? 'white' : '#ffffff90'} />
                </Switch>
            </XStack>
            <Text fontSize={20}>{allowSafeWords ? 'Listening' : '🤫'}</Text>
            {
                allowSafeWords && <>
                    <Text fontSize={16}>Parital: {textPartialRecognized}</Text>
                    <Text fontSize={16}>Full: {textRecognized}</Text>
                </>
            }
        </View>
        <Separator marginVertical={12} />
        {/* Biometric Login */}
        <View paddingVertical={12} paddingHorizontal={16}>
            <XStack alignItems="baseline">
                <Label htmlFor='safewords' paddingRight={12}>
                    <Text fontSize={24} fontWeight='400' color='$text'>Biometric Login</Text>
                </Label>
                <Switch id='safewords' checked={biometricLoginOption} onCheckedChange={setBiometricLoginOption} size='$2' backgroundColor={biometricLoginOption ? '$primary' : '#ecbfbc'}>
                    <Switch.Thumb animation="quicker" backgroundColor={biometricLoginOption ? 'white' : '#ffffff90'} />
                </Switch>
            </XStack>
            <Text>Enable this option to use your {Platform.OS == 'ios' ? 'Face ID' : 'biometrics'} for logging in.</Text>
        </View>
    </View>

}

export default SettingsScreen;