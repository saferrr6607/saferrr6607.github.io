import { DataStore } from "aws-amplify";
import moment from "moment";
import { LazyNotification, Notification } from "../models";

export async function pushNotification(type: string, title: string, description: string, metadata: object | null): Promise<LazyNotification> {

    try {

        const notifData = new Notification({
            title,
            description,
            type,
            metadata: metadata ? JSON.stringify(metadata) : null,
            timestamp: moment().toISOString(),
        });

        return DataStore.save(notifData);

    } catch (err) {
        console.log('err@pushNotification', err.message);
    }

}