import { Storage } from "aws-amplify";
import { Platform } from "react-native";
import ReactNativeBlobUtil from "react-native-blob-util";
import * as mime from 'react-native-mime-types';

export function uriToBlob(uri: string): Promise<Blob> {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        // If successful -> return with blob
        xhr.onload = function () {
            resolve(xhr.response);
        };

        // reject on error
        xhr.onerror = function () {
            reject(new Error('uriToBlob failed'));
        };

        // Set the response type to 'blob' - this means the server's response 
        // will be accessed as a binary object
        xhr.responseType = 'blob';

        // Initialize the request. The third argument set to 'true' denotes 
        // that the request is asynchronous
        xhr.open('GET', uri, true);

        // Send the request. The 'null' argument means that no body content is given for the request
        xhr.send(null);
    });
};

function getImagePathAndroid(path: string): string {
    return `file:///${path}`;
}
function getImagePathIOS(path: string): string {
    return path.replace("/private/", "file:///");
}

export function getImagePath(path: string): string {
    let getPath = Platform.select({
        android: () => getImagePathAndroid(path),
        ios: () => getImagePathIOS(path),
    }) || (() => '');

    return getPath();
}

export async function upload(file: string, folder = 'sos', ignoreTransform = false) {

    try {

        const path = ignoreTransform ? file : getImagePath(file);
        console.log(path);
        // const path = file;
        const fileBlob = await uriToBlob(path);
        const fs_stat = await ReactNativeBlobUtil.fs.stat(path);
        const mime_type = mime.lookup(path) || '';

        const s3_key = `${folder}/${fs_stat.filename}`;

        return Storage.put(s3_key, fileBlob, {
            level: 'protected',
            contentType: mime_type,
        });


    } catch (err) {
        console.log('upload', err.message);
        throw err;
    }

}