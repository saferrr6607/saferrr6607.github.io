import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DataStore } from "aws-amplify";
import axios from "axios";
import moment from "moment";
import React, { PropsWithChildren, useContext, useEffect, useState } from "react";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { createThumbnail } from "react-native-create-thumbnail";
import { launchImageLibrary } from 'react-native-image-picker';
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import { Circle, Image, Input, Progress, ScrollView, Spinner, Square, Stack, styled, Text, TextArea, XStack } from "tamagui";
import PrimaryButton from "../../components/PrimaryButton";
import { IncidentReport } from "../../models";
import { UploadFileType } from "../../types/upload";
import { alertUser } from "../../utils/alert";
import { pushNotification } from "../../utils/notification";
import { upload } from "../../utils/upload";
import { FileReportContext } from "./index";

const InputLabel = styled(Text, {
    color: "#463D3C",
    fontWeight: "600",
    fontSize: 10,
    marginBottom: 4,
});

const categories = ['touching', 'ogling', 'facial-expressions', 'sexual-assault', 'cat-call', 'indecent-exposure'] as const;
const categoryDescMap = {
    touching: "Touching",
    ogling: "Ogling",
    "facial-expessions": "Facial expressions",
    "sexual-assault": "Sexual assault",
    "cat-call": "Cat call",
    "indecent-exposure": "Indecent exposure",
};
type CategoryType = typeof categories[number];

function RadioOption(props: PropsWithChildren & { value: CategoryType, selected: boolean, onPress: (str) => void, disabled: boolean }) {

    const { value, selected, onPress } = props;

    const buttonColor = selected ? "#463D3C" : "#E7E7E7";

    return <Square
        borderWidth={1}
        borderRadius={4}
        flex={1}
        px={12}
        py={10}
        pressStyle={{ opacity: 0.5 }}
        onPress={() => onPress(value)}
        borderColor="#E7E7E7"
        justifyContent="flex-start"
        flexDirection="row"
        disabled={props.disabled}
    >
        <Text flex={1} pr={5}>{props.children}</Text>
        <Circle borderColor={buttonColor} size={16} borderWidth={1}>
            {selected && <Circle borderColor={buttonColor} bg={buttonColor} size={8} borderWidth={1}></Circle>}
        </Circle>
    </Square >
}
RadioOption.displayName = "RadioOption";

function Gallery(props: PropsWithChildren & { photos: Array<UploadFileType>, onUpdatePhotos: Function, disabled: boolean }) {

    const { photos, onUpdatePhotos } = props;

    const handlePickMedia = async () => {
        try {

            const result = await launchImageLibrary({
                mediaType: 'mixed',
                selectionLimit: 0,
            });

            const { assets = [] } = result;
            if (assets.length > 0) {

                const sources: Array<UploadFileType> = [];

                for (let j = 0; j < assets.length; j++) {
                    const asset = assets[j];
                    console.log(asset);
                    const filename = asset.fileName;
                    const type = asset.type || '';
                    const uri = asset.uri || '';
                    let preview = uri;

                    if (type.indexOf('video') >= 0) {
                        const resp = await createThumbnail({
                            url: uri,
                            timeStamp: 1000,
                        });
                        preview = resp.path;
                    }

                    sources.push({
                        preview,
                        upload: {
                            mime_type: type,
                            name: filename,
                            path: uri,
                        }
                    });

                }

                onUpdatePhotos(sources);

            }

        } catch (err) {
            console.log('err@handlePickMedia', err.message);
        }
    }

    return <XStack gap={8} flexWrap="wrap">
        {photos.map((item, index) => {
            return <Square key={index} size={96} borderRadius={4}>
                <Image source={{ uri: item.preview }} style={StyleSheet.absoluteFill} borderRadius={4} />
            </Square>
        })}
        <Square bg="#E7E7E7" size={96} borderRadius={4} pressStyle={{ opacity: 0.5 }} onPress={handlePickMedia} disabled={props.disabled}>
            <FontAwesome name="plus" color="#676464" size={20} />
        </Square>
    </XStack>

}
Gallery.displayName = 'Gallery';

function FileIncidentScreen(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const ctx = useContext(FileReportContext);
    const { navigation } = props;
    const image = ctx.image;
    const location = ctx.location;

    const [myLoc, setMyLoc] = useState<string>('');
    const [dateTime, setDateTime] = useState<string>('');

    const [category, setCategory] = useState<CategoryType | ''>('');
    const onChangeCategory = (v) => setCategory(v);

    const [description, setDescription] = useState<string>('');

    const [photos, setPhotos] = useState<Array<UploadFileType>>([]);

    const [loading, setLoading] = useState<boolean>(false);

    const handleOnUpdatePhotos = (v) => setPhotos(x => x.concat(v));

    useEffect(() => {
        setDateTime(moment().format('MMMM DD, YYYY hh:mm A'));
    }, []);

    useEffect(() => {

        let mounted = true;

        const apikey = Platform.select({
            android: "YOUR_MAP_API_KEY",
            ios: "YOUR_MAP_IOS_API_KEY",
        });

        if (location) {
            const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${apikey}`;
            axios.get(url)
                .then(response => {
                    const data = response.data;
                    const geoplus = data.plus_code;
                    setMyLoc(geoplus.compound_code);
                });
        }

        return function () {
            mounted = false;
        }

    }, [location]);

    const handleOnSubmit = async () => {

        setLoading(true);

        try {

            const media = [];

            for (let photo of photos) {
                const _upload = photo.upload;
                console.log(_upload);
                const s3 = await upload(_upload.path, 'incident-report', true);
                const item = {
                    s3_key: s3.key,
                    mime_type: _upload.mime_type,
                    name: _upload.name,
                };
                media.push(JSON.stringify(item));
            }

            const formData = new IncidentReport({
                category: [category],
                datetime: dateTime,
                description,
                coordinates: JSON.stringify(location),
                location: myLoc,
                media,
            });

            const report = await DataStore.save(formData);
            console.log(JSON.stringify(report, null, 3));
            const desc = categoryDescMap[category];
            const notif = await pushNotification('incident', `${desc} incident reported`, `An incident (${desc}) has been reported in ${myLoc}`, null);
            console.log(JSON.stringify(notif, null, 3));

            alertUser('Incident report filed successfully');

            navigation.navigate('Main.Dashboard');

        } catch (err) {
            console.log('err@handleOnSubmit', err.message);
        }

        setLoading(false);

    }

    return <SafeAreaView style={{
        height: '100%',
        backgroundColor: 'white'
    }}>
        <Progress value={100} borderRadius={0} height={5}>
            <Progress.Indicator bg="#DB8780" />
        </Progress>
        <ScrollView>
            <Image source={{ uri: image }} style={{ width: '100%', height: Dimensions.get('window').height * 0.50, }} />
            <Stack px={16} py={16}>
                <InputLabel>Location</InputLabel>
                <Input value={myLoc} mb={16} disabled={true} />
                <InputLabel>Date & Time</InputLabel>
                <Input value={dateTime} mb={16} disabled={true} />
                <InputLabel>Category</InputLabel>
                <Stack gap={12} mb={16}>
                    <XStack gap={12}>
                        <RadioOption disabled={loading} selected={category == 'touching'} onPress={onChangeCategory} value='touching'>Touching</RadioOption>
                        <RadioOption disabled={loading} selected={category == 'ogling'} onPress={onChangeCategory} value='ogling'>Ogling</RadioOption>
                    </XStack>
                    <XStack gap={12}>
                        <RadioOption disabled={loading} selected={category == 'facial-expressions'} onPress={onChangeCategory} value='facial-expressions'>Facial expressions</RadioOption>
                        <RadioOption disabled={loading} selected={category == 'sexual-assault'} onPress={onChangeCategory} value='sexual-assault'>Sexual assault</RadioOption>
                    </XStack>
                    <XStack gap={12}>
                        <RadioOption disabled={loading} selected={category == 'cat-call'} onPress={onChangeCategory} value='cat-call'>Cat call</RadioOption>
                        <RadioOption disabled={loading} selected={category == 'indecent-exposure'} onPress={onChangeCategory} value='indecent-exposure'>Indecent exposure</RadioOption>
                    </XStack>
                </Stack>
                <InputLabel>Description</InputLabel>
                <TextArea fontSize={14} alignItems='flex-start' mb={16} value={description} onChangeText={setDescription} disabled={loading} />
                <InputLabel>Photo/video</InputLabel>
                <Gallery photos={photos} onUpdatePhotos={handleOnUpdatePhotos} disabled={loading} />
            </Stack>
            <Stack height={40} />
        </ScrollView>
        <Stack px={16} py={24} bg="white">
            <PrimaryButton onPress={handleOnSubmit} disabled={loading}>
                {loading && <><Spinner color='white' mr={5} /><Text color='white'>Submitting report...</Text></>}
                {!loading && 'Submit Report'}
            </PrimaryButton>
        </Stack>
    </SafeAreaView>
}

export default FileIncidentScreen;