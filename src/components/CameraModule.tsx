import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { Camera, CameraDevice, useCameraDevices } from "react-native-vision-camera";
import { Stack } from "tamagui";

interface CameraModuleTypes {
    show: boolean,
    cameraProps?: PropsWithChildren,
    Interface?: JSX.Element | null,
    device: CameraDevice,
}
const CameraModule = React.forwardRef((props: CameraModuleTypes, ref) => {

    const { show = false, cameraProps = null, Interface = null, device } = props;
    const navigation = useNavigation();

    const [permission, setPermission] = useState("");

    const localRef = useRef(null);
    const internalRef = ref || localRef;

    const focused = useIsFocused();

    useEffect(() => {

        Camera.requestCameraPermission()
            .then((newCameraPermission) => {
                if (newCameraPermission != "authorized") {
                    navigation.goBack();
                }
                setPermission(newCameraPermission);
            })
            .catch(err => {
                console.log(err);
            })

    }, []);

    const active = show && focused && Boolean(device) && permission == "authorized";

    if (!active) return null;
    return <Camera
        ref={internalRef}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={active}
        photo={true}
        {...cameraProps}
    />

});

export default CameraModule;