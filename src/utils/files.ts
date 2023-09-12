import moment from "moment";
import { Platform } from "react-native";

var RNFS = require('react-native-fs');

async function localPath(image: string): Promise<string> {
    let newPath: string;

    const fileName = image.split('/').pop();
    const ext = fileName?.substring(fileName.lastIndexOf('.'));
    const today = moment().format('YYYY-MM-DD_HH-mm-ssA');
    let path = Platform.select({
        android: RNFS.PicturesDirectoryPath,
        ios: RNFS.DocumentDirectoryPath,
    });
    RNFS.mkdir(`${path}/SafeHer/`);
    newPath = `${path}/SafeHer/${today}-report${ext}`;

    console.log(image, "to", newPath);

    // COPY the file
    return RNFS.copyFile(image, newPath)
        .then(() => {
            console.log('IMG COPIED!');
            console.log(newPath);
            return newPath;
        })
        .catch((err: any) => {
            console.log('copy failed');
            console.log(err.message);
        });
}

export { localPath };