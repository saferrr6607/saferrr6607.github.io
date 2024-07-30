import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DataStore } from "aws-amplify";
import axios from "axios";
import moment from "moment";
import React, { PropsWithChildren, useContext, useEffect, useState } from "react";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { createThumbnail } from "react-native-create-thumbnail";
import { launchImageLibrary } from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import { SafeAreaView } from "react-navigation";
import { Button, Circle, Image, Input, Progress, ScrollView, Spinner, Square, Stack, styled, Text, TextArea, XStack } from "tamagui";
import PrimaryButton from "../../components/PrimaryButton";
import { LocationReport } from "../../models";
import { UploadFileType } from "../../types/upload";
import { alertUser } from "../../utils/alert";
import { pushNotification } from "../../utils/notification";
import { cleanIOSPath, upload } from "../../utils/upload";
import { FileReportContext } from "./index";
import { RadioOption } from "./FileIncidentScreen";
import { ReportType } from "../../types/report";
import { smsLocationReport } from "../../services/fileReport";
import { AppContext } from "../../contexts/AppContext";

const InputLabel = styled(Text, {
    color: "#463D3C",
    fontWeight: "600",
    fontSize: 10,
    marginBottom: 4,
});

const ratings = ['cleanliness', 'lighting', 'crowd', 'security', 'walkability'] as const;
type RatingsType = typeof ratings[number];
const ratingsMap = {
    cleanliness: 0,
    lighting: 0,
    crowd: 0,
    security: 0,
    walkability: 0,
} as const;
type RatingsMapType = typeof ratingsMap;

function Ratings(props: PropsWithChildren & { value: RatingsType, onPress: (k, v) => void, ratings: number, disabled: boolean }) {

    const { value, onPress, ratings } = props;

    return <Stack>
        <InputLabel>{props.children}</InputLabel>
        <XStack gap={4}>
            {(new Array(5).fill(0).map((item, index) => {
                const lit = ratings >= index + 1;
                const bg = lit ? "#FCD900" : "#E7E7E7";
                return <Square pressStyle={{ opacity: 0.5 }} key={'star-' + index} onPress={() => onPress(value, index + 1)} disabled={props.disabled}>
                    <FontAwesome name="star" size={24} color={bg} />
                </Square>
            }))}
        </XStack>
    </Stack>
}
Ratings.displayName = "Ratings";

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

    const app_ctx = useContext(AppContext);
    const ctx = useContext(FileReportContext);
    const { navigation } = props;
    const image = ctx.image;
    const location = ctx.location;

    const [myLoc, setMyLoc] = useState<string>('');
    const [dateTime, setDateTime] = useState<string>('');

    const [ratings, setRatings] = useState<RatingsMapType>(ratingsMap);
    const onChangeRatings = (key, value) => {
        setRatings(x => ({ ...x, [key]: value }));
    }

    const [reportType, setReportType] = useState<ReportType | ''>('test-report');
    const onChangeReportType = (v) => setReportType(v);

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
            android: "AIzaSyDPHQCpHt-sLOC4yQbCgNOJdCG6HwUM0F8",
            ios: "AIzaSyCewTU6Aq_ro1SzmocbuHrdhqj_fK7Pq4E",
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
                let path = _upload.path;
                if (Platform.OS == 'ios') {
                    path = cleanIOSPath(path, 'file://');
                }
                const s3 = await upload(path, 'location-report', true);
                const item = {
                    s3_key: s3.key,
                    mime_type: _upload.mime_type,
                    name: _upload.name,
                };
                media.push(JSON.stringify(item));
            }

            const formData = new LocationReport({
                report_type: reportType,
                ratings: JSON.stringify(ratings),
                datetime: dateTime,
                description,
                coordinates: JSON.stringify(location),
                location: myLoc,
                media,
            });

            const report = await DataStore.save(formData);
            console.log(JSON.stringify(report, null, 3));
            const notif = await pushNotification('location', `Current location reviewed succesfully`, `You have successfully submitted a review on your current location ${myLoc}`, null);
            console.log(JSON.stringify(notif, null, 3));

            // await smsLocationReport(
            //     app_ctx?.cognito?.name ?? "",
            //     report
            // );

            alertUser('You have reviewed your location successfully');

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
                <InputLabel>Report Type</InputLabel>
                <Stack gap={12} mb={16} width={'50%'}>
                    <RadioOption disabled={loading} selected={reportType == 'test-report'} onPress={onChangeReportType} value='test-report'>Test Report</RadioOption>
                    <RadioOption disabled={loading} selected={reportType == 'real-report'} onPress={onChangeReportType} value='real-report'>Real Report</RadioOption>
                </Stack>
                <InputLabel>Location</InputLabel>
                <Input value={myLoc} mb={16} disabled={true} />
                <InputLabel>Date & Time</InputLabel>
                <Input value={dateTime} mb={16} disabled={true} />
                <Stack gap={16} mb={16}>
                    <Ratings disabled={loading} ratings={ratings.cleanliness} onPress={onChangeRatings} value='cleanliness'>Cleanliness</Ratings>
                    <Ratings disabled={loading} ratings={ratings.lighting} onPress={onChangeRatings} value='lighting'>Lighting</Ratings>
                    <Ratings disabled={loading} ratings={ratings.crowd} onPress={onChangeRatings} value='crowd'>Crowd</Ratings>
                    <Ratings disabled={loading} ratings={ratings.security} onPress={onChangeRatings} value='security'>Security</Ratings>
                    <Ratings disabled={loading} ratings={ratings.walkability} onPress={onChangeRatings} value='walkability'>Walkability</Ratings>
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