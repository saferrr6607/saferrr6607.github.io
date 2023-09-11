import axios from "axios";
import moment from "moment";

const send_sms = 'https://api.semaphore.co/api/v4/messages';
// const send_sms = 'https://api.semaphore.co/api/v4/priority';
const api_key = "YOUR_SEMAPHORE_API_KEY";

function getDefaultMsg(loc: string, name: string): string {

    let msg = '';

    msg = `Help! I am probably in danger. I am currently at:\n${loc}\n\nThis automated message is sent at ${moment().format('MMM DD, YYYY h:mm:ss a')}`;

    return msg;

}

export function createSOSMsg(name: string, loc: string): string {
    return `SafeHer Alert: ${name} might be in danger. She is currently at:\n\n${loc}\n\nYou are receiving this alert because you are one of her emergency contacts. You can immediately contact her or the nearest authorities at 911 or 117.`;
}

export function sendSMS(recepient: string, loc: string, name: string): Promise<object> {

    const msg = createSOSMsg(name, loc);

    const params = {
        apikey: api_key,
        number: recepient,
        message: msg,
        // sendername: sender,
    };

    return axios.post(send_sms, params);

}