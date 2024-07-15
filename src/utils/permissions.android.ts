import { PermissionStatus, PermissionsAndroid } from "react-native";
import Torch from 'react-native-torch';
// import Contacts from "react-native-contacts";

export async function checkContactPermission() {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
            title: 'Contacts',
            message: 'This app would like to view your contacts as reference for your would-be emergency contacts.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        },
    );
    return granted;
}

export async function checkTorchPermission() {
    const granted = await Torch.requestCameraPermission(
        'Camera Permissions', // dialog title
        'We require camera permissions to take photos from your front and back cameras, and to use the torch on the back of your phone for SOS alerts.' // dialog body
    );
    return granted;
}

export async function checkAudioPermission(): Promise<PermissionStatus> {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
            title: 'Microphone',
            message: 'This app would like to use your microphone to identify if you are in danger.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        },
    );
    return granted;
}

export async function checkStoragePermission() {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
            title: 'File Storage',
            message: 'This app needs to write your audio files in your local storage to identify if you are in danger.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        },
    );
    return granted;
}

export async function checkFineLocPermission() {
    console.log('request map')
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
            title: 'Map Location',
            message: 'This app needs to identify your location which will be shared to your emergency contacts in case of emergency.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        },
    );
    console.log(granted);
    return granted;
}

export async function checkMultiplePermissions() {

    const granted = await PermissionsAndroid.requestMultiple(
        [
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ]
    )

    return granted;

}