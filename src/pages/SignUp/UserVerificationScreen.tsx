import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Circle, Image, ScrollView, Spinner, Square, Stack, Text, XStack } from "tamagui";
import PrimaryButton from "../../components/PrimaryButton";
import { HeaderText, SubHeader } from "./recipe";
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import { Camera, useCameraDevices } from "react-native-vision-camera";
import DocumentPicker from 'react-native-document-picker'
import * as mime from 'react-native-mime-types';
import { getImagePath, upload, uriToBlob } from "../../utils/upload";
import ReactNativeBlobUtil from "react-native-blob-util";
import PdfThumbnail from "react-native-pdf-thumbnail";
import { alertUser } from "../../utils/alert";
import { DataStore } from "aws-amplify";
import { LazyUserVerification, UserVerification } from "../../models";
import { __modelMeta__ } from "@aws-amplify/datastore";
import { uploadFileDefault, UploadFileType } from "../../types/upload";
var RNFS = require('react-native-fs');

const phases = ['initial', 'id', 'face'] as const;
type Phases = typeof phases[number];

type DefaultPhaseScreenProps = {
    show: boolean;
};

const UploadImageStyle = StyleSheet.create({
    box: {
        borderColor: '#989898',
        borderStyle: 'dashed',
        borderWidth: 2,
        width: '100%',
        height: 150,
        marginTop: 10,
        marginBottom: 5,
        borderRadius: 10,
    },
    circle: {
        backgroundColor: 'rgb(222,222,222)',
    }
});

function IDScreen(props: PropsWithChildren & DefaultPhaseScreenProps & { idFile: UploadFileType, onUpdateId: Function }): JSX.Element {

    const { show = false, idFile: uploadFile, onUpdateId: setUploadFile } = props;

    if (!show) return <></>;

    const handleUploadId = () => {
        DocumentPicker.pickSingle({
            type: [
                'public.jpeg',
                'public.png',
                'image/jpg',
                'image/jpeg',
                'image/png',
                'com.adobe.pdf',
                mime.lookup('pdf') || '',
                mime.lookup('png') || '',
                mime.lookup('jpg') || '',
            ]
        })
            .then(async doc => {
                try {

                    const uploadFile = {
                        preview: '',
                        upload: {},
                    };

                    const uri = doc.uri;
                    let path = uri;

                    if (uri.startsWith('content://')) {
                        const fileNameAndExtension = doc.name;
                        path = `${RNFS.TemporaryDirectoryPath}/${fileNameAndExtension}`

                        await RNFS.copyFile(uri, path)
                    }

                    const fs_stat = await ReactNativeBlobUtil.fs.stat(path)

                    let uri_path = fs_stat.path;

                    if (Platform.OS == 'android') {
                        uri_path = uri_path.substring(1);
                    }
                    uri_path = getImagePath(uri_path);

                    const mime_type = mime.lookup(fs_stat.filename) || '';
                    const ext = mime.extension(mime_type);

                    if (ext == 'pdf') {
                        const pdf = await PdfThumbnail.generate(uri_path, 0);
                        uploadFile.preview = pdf.uri;
                    } else {
                        uploadFile.preview = uri_path;
                    }

                    uploadFile.upload = {
                        name: doc.name,
                        mime_type: doc.type,
                        path: uri_path,
                    };

                    setUploadFile(uploadFile);

                } catch (err) {
                    console.log('err@pickDoc', err.message);
                }
            });
    }

    return <Stack flex={1} px={10}>
        {/* <Image></Image> */}
        <Text lineHeight={12 * 1.25} fontSize={12} fontWeight="500" color="$textSecondary">
            Upload your ID to secure your account and unlock more SafeHer features.
        </Text>
        <Square style={UploadImageStyle.box} onPress={handleUploadId} pressStyle={{ opacity: 0.75 }}>
            {Boolean(uploadFile?.preview) && <Image source={{ uri: uploadFile?.preview }} style={StyleSheet.compose(StyleSheet.absoluteFillObject, { zIndex: 20 })} />}
            <Circle style={UploadImageStyle.circle} size={36}>
                <FontAwesome name='camera' size={18} color="rgb(162,162,162)" />
            </Circle>
            <Text fontSize={12}>Upload Document</Text>
        </Square>
        <Text lineHeight={10 * 1.25} fontSize={10} fontWeight="500" color="$textSecondary">Accepted format: JPEG, PNG, or PDF. Up to 5MB.</Text>
    </Stack>
}
IDScreen.displayName = "IDScreen";

function FaceScreen(props: PropsWithChildren & DefaultPhaseScreenProps & { selfie: UploadFileType, onUpdateSelfie: Function }): JSX.Element {

    const { show = false, selfie, onUpdateSelfie: setSelfie } = props;

    const devices = useCameraDevices();
    const [permission, setPermission] = useState('');

    useEffect(() => {

        Camera.requestCameraPermission()
            .then((newCameraPermission) => {
                if (newCameraPermission != "authorized") {
                    // request permission
                }
                setPermission(newCameraPermission);
            })
            .catch(err => {
                console.log(err);
            })

    }, []);

    const [phase, setPhase] = useState<'capture' | 'preview'>('capture');

    useEffect(() => {
        return () => {
            setPhase('capture');
        }
    }, []);


    const active: boolean = show && Boolean(devices) && permission == 'authorized' && phase == 'capture';
    const cameraRef = useRef<Camera>(null);

    const resetSelfie = () => {
        setSelfie(uploadFileDefault);
        setPhase('capture');
    };

    const handleTakeSelfie = async () => {
        try {
            const photo = Platform.OS === 'android' ? await cameraRef.current?.takeSnapshot({ quality: 85, skipMetadata: true, }) : await cameraRef.current?.takePhoto({});
            const image_path = photo?.path;

            const fs_stat = await ReactNativeBlobUtil.fs.stat(image_path);

            setSelfie({
                preview: getImagePath(fs_stat.path),
                upload: {
                    mime_type: fs_stat.type,
                    name: fs_stat.filename,
                    path: fs_stat.path,
                },
            });

            setPhase('preview');

        } catch (err) {
            console.log("handleTakeSelfie", err);
        }
    }

    if (!show) return <></>;

    return <Stack flex={1} px={10}>
        {/* <Image></Image> */}
        <Text lineHeight={12 * 1.25} fontSize={12} fontWeight="500" color="$textSecondary">
            To validate your identity, we require you to take a selfie.
        </Text>
        <Stack style={{ flex: 1 }} my={10}>
            {active && <Camera
                ref={cameraRef}
                style={StyleSheet.absoluteFill}
                device={devices.front || devices.back}
                photo={true}
                isActive={active}
            />}
            {phase == 'preview' && <Image source={{ uri: selfie.preview }} style={StyleSheet.absoluteFill} />}
            <XStack position="absolute" bottom={20} width="100%" justifyContent="center">

                {
                    phase == 'capture' && <Circle style={{ backgroundColor: "#eee" }} size={72} pressStyle={{ opacity: 0.50 }} onPress={handleTakeSelfie}>
                        <Circle style={{ backgroundColor: "#222222" }} size={64}>
                            <Circle style={{ backgroundColor: "#eee" }} size={48} />
                        </Circle>
                    </Circle>
                }
                {
                    phase == 'preview' && <Button circular icon={<FontAwesome name='undo' size={24} />} onPress={resetSelfie} />
                }

            </XStack>
        </Stack>
    </Stack >
}
FaceScreen.displayName = "FaceScreen";

function InitialScreen(props: PropsWithChildren & DefaultPhaseScreenProps): JSX.Element {

    const { show = false } = props;

    if (!show) return <></>;

    return <Stack justifyContent="center" alignItems="center" flex={1}>
        {/* <Image></Image> */}
        <Text textAlign="center" lineHeight={12 * 1.25} px={10} fontSize={12} fontWeight="500" color="$textSecondary">To keep the app safe to use for everyone, we encourage our users to verify their identity by uploading a valid ID and taking a selfie.</Text>
    </Stack>
}
InitialScreen.displayName = "InitialScreen";

type UserVerificationType = Omit<UserVerification, typeof __modelMeta__ | 'id'> & { id?: string };
async function upsertUserVerification(data: UserVerificationType) {

    try {

        const myData = await DataStore.query(UserVerification);
        console.log('mydfata', myData);
        if (myData.length > 0) {
            const original = myData[0];
            return DataStore.save(UserVerification.copyOf(original, updated => {
                for (let key in data) {
                    if (key == 'id') continue;
                    updated[key] = data[key];
                }
            }));
        } else {
            const _ = new UserVerification(data);
            return DataStore.save(_);
        }

    } catch (err) {
        console.log('err@upsertUserVerification', err.message);
    }

}

function UserVerificationScreen(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const { navigation } = props;

    const [phase, setPhase] = useState<Phases>('initial');

    const [idFile, setIdFile] = useState<UploadFileType>(uploadFileDefault);
    const handleOnUpdateId = (idObj: UploadFileType) => {
        setIdFile(idObj);
    }

    const [selfie, setSelfie] = useState<UploadFileType>(uploadFileDefault);
    const handleOnUpdateSelfie = (idObj: UploadFileType) => {
        setSelfie(idObj);
    }

    const [uploading, setUploading] = useState<'id' | 'face' | false>(false);

    const uploadID = async () => {

        setUploading('id');

        try {

            const uploadFile = idFile.upload;

            const s3 = await upload(uploadFile.path, 'verify', true);
            await upsertUserVerification({
                id_key: s3.key,
                id_mime_type: uploadFile.mime_type,
                id_name: uploadFile.name,
            });

            setPhase('face');

        } catch (err) {
            console.log('err@uplaodID', err.message);
        }

        setUploading(false);

    };

    const uploadSelfie = async () => {

        setUploading('face');

        try {

            const uploadFile = selfie.upload;

            const s3 = await upload(uploadFile.path, 'verify');
            await upsertUserVerification({
                selfie_key: s3.key,
                selfie_mime_type: uploadFile.mime_type,
                selfie_name: uploadFile.name,
            });

            navigation.navigate("SignUp.EmergencyContact");
            setPhase('initial');

        } catch (err) {
            console.log('err@uplaodID', err.message);
        }

        setUploading(false);

    };

    const handleOnContinue = () => {
        switch (phase) {
            case "initial":
                setPhase("id");
                break;
            case "id":
                // check if has image and upload image
                if (!idFile.preview) alertUser("Please upload your ID.");
                else uploadID();
                break;
            case "face":
                // take photo of self
                if (!selfie.preview) alertUser("Please tke a selfie.");
                else uploadSelfie();
                break;
        }
    }

    return <SafeAreaView style={{
        height: "100%",
        backgroundColor: "white"
    }}>
        <ScrollView pt={40} px={16} contentContainerStyle={{ flex: 1 }}>
            <HeaderText mb={4}>Create an account</HeaderText>
            <SubHeader mb={24}>Step 2/2: Account verification</SubHeader>
            <InitialScreen show={phase == 'initial'} />
            <IDScreen show={phase == 'id'} idFile={idFile} onUpdateId={handleOnUpdateId} />
            <FaceScreen show={phase == 'face'} selfie={selfie} onUpdateSelfie={handleOnUpdateSelfie} />
        </ScrollView>
        <Stack mb={24} px={16}>
            <PrimaryButton
                onPress={handleOnContinue}
                disabled={Boolean(uploading)}
            >
                {uploading == 'id' && <><Spinner color='white' mr={5} /><Text color='white'>Uploading ID</Text></>}
                {uploading == 'face' && <><Spinner color='white' mr={5} /><Text color='white'>Uploading Selfie</Text></>}
                {!uploading && `Continue`}
            </PrimaryButton>
        </Stack>
    </SafeAreaView>

}

export default UserVerificationScreen;