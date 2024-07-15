import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { PropsWithChildren, memo, useEffect, useState } from "react";
import { Pressable, useWindowDimensions } from "react-native";
import Icon from 'react-native-vector-icons/dist/Feather';
import { Stack, styled } from "tamagui";
import DrawerMenu from "./DrawerMenu";

const DrawerBackdrop = styled(Stack, {
    backgroundColor: "#00000075",
    top: 0,
    bottom: 0,
    position: "absolute",
    zIndex: 500,
    width: "100%",
});

const DrawerSheet = styled(Stack, {
    backgroundColor: "white",
    position: 'absolute',
    right: 0,
    bottom: 0,
    top: 0,
});

function DrawerScreen(props: PropsWithChildren & { active: string }): JSX.Element {

    const { active = "home" } = props;
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const [open, setOpen] = useState<boolean>(false);

    const toggleOpen = () => setOpen(v => !v);

    useEffect(() => {
        let mounted = true;

        navigation.setOptions({
            headerRight: () => {
                const icon = open ? "x" : "menu";

                return <Pressable onPress={toggleOpen}>
                    <Icon name={icon} size={24} color="#B5908D" />
                </Pressable>
            }
        });

    }, [open]);

    useEffect(() => {
        return function () { setOpen(false); }
    }, []);

    const { width } = useWindowDimensions();

    const _left = open ? 0 : width;

    return <Stack flex={1}>
        <DrawerBackdrop style={{ left: _left }}>
            <DrawerSheet width={width * 0.75}>
                <DrawerMenu active={active} />
            </DrawerSheet>
        </DrawerBackdrop>
        {props.children}
    </Stack>
}

export default DrawerScreen;