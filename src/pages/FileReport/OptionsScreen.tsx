import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { PropsWithChildren, useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Progress, Square, Stack, Text, XStack } from "tamagui";
import PrimaryButton from "../../components/PrimaryButton";

const warning = require("../../assets/img/warning.png");
const world_map = require("../../assets/img/world-map.png");

const selectionStyle = StyleSheet.create({
    default: {
        flex: 1,
        borderWidth: 1,
        padding: 12,
        borderRadius: 4,
        height: 171,
    },
    selected: {
        backgroundColor: "rgba(219, 135, 128, 0.10)",
    },
});
function Selection(props: PropsWithChildren & { icon: number, label: string, selected: boolean, onPress: () => void }): JSX.Element {

    const { icon, label, selected, onPress } = props;

    const style = useMemo(() => {
        let style = selectionStyle.default;
        console.log('isselcted', selected)
        if (selected) style = StyleSheet.compose(selectionStyle.default, selectionStyle.selected);
        return style;
    }, [selected]);

    const borderColor = selected ? "#DB8780" : "#E7E7E7";

    return <Square style={style} borderColor={borderColor} pressStyle={{ opacity: 0.5 }} onPress={onPress}>
        <Image source={icon} />
        <Text>{label}</Text>
    </Square>

}

function OptionsScreen(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const { navigation } = props;

    const [selected, setSelected] = useState<'incident' | 'location'>('incident');

    const handleOnNext = () => {
        let target = '';
        if (selected == 'incident') {
            target = 'FileReport.Incident';
        } else if (selected == 'location') {
            target = 'FileReport.Location';
        } else return;
        navigation.navigate(target);
    }

    return <SafeAreaView style={{
        height: '100%',
        backgroundColor: 'white',
    }}>
        <Progress value={50} borderRadius={0} height={5}>
            <Progress.Indicator bg="#DB8780" />
        </Progress>
        <XStack gap={16} px={16} pt={16} flex={1}>
            <Selection label="Report incident" icon={warning} selected={selected == 'incident'} onPress={() => setSelected('incident')} />
            <Selection label="Report location" icon={world_map} selected={selected == 'location'} onPress={() => setSelected('location')} />
        </XStack>
        <Stack px={16} pb={24}>
            <PrimaryButton onPress={handleOnNext}>Next</PrimaryButton>
        </Stack>
    </SafeAreaView>
}

export default OptionsScreen;