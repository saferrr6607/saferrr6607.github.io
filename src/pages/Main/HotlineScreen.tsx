import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Progress, ScrollView, Select, SelectProps, Text, View, XStack, YStack, styled } from "tamagui";
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';

type NationalHotline = { name: string; service: string; hotline: string; };
const hardcodedHotlines: NationalHotline[] = [
    { name: 'Bantay Bata', service: 'Child Protection', hotline: '163' },
    { name: 'Bureau of Fire Protection', service: 'Firefighting', hotline: '911' },
    { name: 'Commission on Human Rights', service: 'Medical Emergency', hotline: '1343' },
    { name: 'Department of Health', service: 'Medical Emergency', hotline: '1555' },
    { name: 'LTFRB', service: 'Public Transportation', hotline: '1342' },
    { name: 'National Complaint Hotline', service: 'Public Service', hotline: '8888' },
    { name: 'Philippine National Police', service: 'Police', hotline: '911' },
    { name: 'Philippine Red Cross', service: 'Humanitarian Aid', hotline: '143' },
];

function ChevronDown(props: any) {
    return <Feather {...props} name='chevron-down' />
};
function ChevronUp(props: any) {
    return <Feather {...props} name='chevron-up' />
};
function Check(props: any) {
    return <Feather {...props} name='check-circle' />
};

type BrgyHotline = { region: string; city: string; brgy: string; hotline: string; };
const brgyHotlines: BrgyHotline[] = [
    { region: 'NCR', city: 'Pasay City', brgy: 'Barangay Leveriza', hotline: '+63926-724-8782' },
    { region: 'NCR', city: 'Pasig City', brgy: 'Barangay Santolan', hotline: 'VAWC Hotline: 0966 064 1883\nVAWC Email: santolan02vawc@gmail.com\nBSF Hotline: 0966 064 1882' },
];

const HotlineCell = styled(Text, {
    backgroundColor: '#A2A9B11A',
    borderColor: '#0000001A',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontWeight: '300',
});

const selectStyle = StyleSheet.create({
    input: {
        backgroundColor: '#A2A9B11A',
        borderColor: '#0000001A',
        borderWidth: 1,
        color: '#463D3C',
        fontWeight: '300',
        fontSize: 12,
        paddingVertical: 4,
        paddingRight: 30,
    },
});

function HotSelectRegion(props: { value: string; onValueChange: Dispatch<SetStateAction<string>> }) {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        'NCR',
    ].map(item => ({ label: item, value: item })));

    return (
        <DropDownPicker
            open={open}
            value={props.value}
            items={items}
            setOpen={setOpen}
            setValue={props.onValueChange}
            setItems={setItems}
            placeholder="Choose Province"
            style={{ backgroundColor: '#A2A9B11A', borderColor: "#0000001A" }}
            listMode="MODAL"
        />
    );
}

function HotSelectCity(props: { value: string; onValueChange: Dispatch<SetStateAction<string>> }) {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        'Pasay City',
        'Pasig City',
    ].map(item => ({ label: item, value: item })));

    return (
        <DropDownPicker
            open={open}
            value={props.value}
            items={items}
            setOpen={setOpen}
            setValue={props.onValueChange}
            setItems={setItems}
            placeholder="Choose City"
            style={{ backgroundColor: '#A2A9B11A', borderColor: "#0000001A" }}
            listMode="MODAL"
        />
    );
}

function HotSelectBrgy(props: { value: string; onValueChange: Dispatch<SetStateAction<string>> }) {

    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        'Barangay Leveriza',
        'Barangay Santolan',
    ].map(item => ({ label: item, value: item })));

    return (
        <DropDownPicker
            open={open}
            value={props.value}
            items={items}
            setOpen={setOpen}
            setValue={props.onValueChange}
            setItems={setItems}
            placeholder="Choose Barangay"
            style={{ backgroundColor: '#A2A9B11A', borderColor: "#0000001A" }}
            listMode="MODAL"
        />
    );
}

function HotlineScreen({ navigation }: PropsWithChildren & NativeStackScreenProps<any>) {

    const [nationalHotlines, setNationalHotlines] = React.useState<NationalHotline[]>(hardcodedHotlines);

    const [region, setRegion] = React.useState<string>('');
    const [city, setCity] = React.useState<string>('');
    const [brgy, setBrgy] = React.useState<string>('');

    const [filteredHotlines, setFilteredHotlines] = React.useState<BrgyHotline[]>([]);

    React.useEffect(() => {
        const filteredHotlines = brgyHotlines.filter(hotline => {
            return (
                hotline.region === region &&
                hotline.city === city &&
                hotline.brgy === brgy
            );
        });
        console.log(region, city, brgy, filteredHotlines);
        setFilteredHotlines(filteredHotlines);

    }, [region, city, brgy]);


    return <View style={{
        height: '100%',
    }}>
        <Progress value={100} borderRadius={0} height={5}>
            <Progress.Indicator backgroundColor="#DB8780" />
        </Progress>
        <ScrollView>
            <YStack paddingTop={16} paddingBottom={8} paddingHorizontal={20} gap={16}>
                <Text fontSize={20} lineHeight={24} fontWeight={'600'}>Nationwide</Text>
                <YStack gap={5}>
                    {nationalHotlines.map((hotline, index) => {
                        return <XStack key={index} gap={5}>
                            <HotlineCell flexBasis={165}>{hotline.name}</HotlineCell>
                            <HotlineCell flexBasis={120}>{hotline.service}</HotlineCell>
                            <HotlineCell fontWeight={'400'} flex={1} textAlign="center">{hotline.hotline}</HotlineCell>
                        </XStack>
                    })}
                </YStack>
                <Text fontSize={20} lineHeight={24} fontWeight={'600'}>Barangay Level</Text>
                <YStack gap={10} minWidth={0} >
                    <HotSelectRegion
                        value={region}
                        onValueChange={setRegion}
                    />
                    <HotSelectCity
                        value={city}
                        onValueChange={setCity}
                    />
                    <HotSelectBrgy
                        value={brgy}
                        onValueChange={setBrgy}
                    />
                </YStack>
                <YStack height={344} maxHeight={344} borderColor="#0000001A" backgroundColor={"#A2A9B11A"} borderWidth={1} alignItems="flex-start" paddingHorizontal={8} paddingVertical={8}>
                    {filteredHotlines.length === 0 && <Text fontWeight="300" paddingTop={16}>*Results</Text>}
                    {filteredHotlines.map((hotline, index) => <Text key={index} fontWeight="300" paddingVertical={8}>{hotline.hotline}</Text>)}
                </YStack>
            </YStack>
        </ScrollView>
    </View>
}

export default HotlineScreen; 