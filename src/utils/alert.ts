import { Alert, Platform, ToastAndroid } from "react-native";

export function alertUser(msg: string) {

    if (Platform.OS == 'android') {
        ToastAndroid.showWithGravityAndOffset(msg, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
    } else {
        Alert.alert(msg);
    }

}