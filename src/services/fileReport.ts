// import { Mailer } from './email';

import { IncidentReport, LocationReport } from "../models";
import { ReportType, getReportType } from "../types/report";
import { sendSMS } from "../utils/sms";

const fixed_contact = ['+639660641883', '+639660641882'];

// export async function emailReport(attachments: any[] = []) {

//     return Mailer(
//         'File Incident Report',
//         attachments,
//     );

// }

export async function smsIncidentReport(user: string, incidentReport: IncidentReport, category: string) {

    const reportType = getReportType(incidentReport.report_type as ReportType || 'test-report');

    const coordinates = typeof incidentReport.coordinates == 'string' ? JSON.parse(incidentReport.coordinates || '{}') : incidentReport.coordinates;

    const shareable_link = `https://www.google.com/maps/search/?api=1&query=${coordinates.latitude},${coordinates.longitude}`;

    const sms_body = `Name of User: ${user}\nReport Type: ${reportType}\nLocation: ${incidentReport.location}\nGoogle map location: ${shareable_link}\nDate and time: ${incidentReport.datetime}\nCategory: ${category}\nDescription: ${incidentReport.description}`;

    const promises = fixed_contact.map(phone_number => sendSMS(phone_number, sms_body));
    return Promise.all(promises);
    // return sendSMS('+639274332241', sms_body);

}

export async function smsLocationReport(user: string, locationReport: LocationReport) {

    const reportType = getReportType(locationReport.report_type as ReportType || 'test-report');

    const coordinates = typeof locationReport.coordinates == 'string' ? JSON.parse(locationReport.coordinates || '{}') : locationReport.coordinates;

    const shareable_link = `https://www.google.com/maps/search/?api=1&query=${coordinates.latitude},${coordinates.longitude}`;

    const ratings = typeof locationReport.ratings == 'string' ? JSON.parse(locationReport.ratings || '{}') : locationReport.ratings;

    const sms_body = `Name of User: ${user}\nReport Type: ${reportType}\nLocation: ${locationReport.location}\nGoogle map location: ${shareable_link}\nDate and time: ${locationReport.datetime}\nCleanliness: ${ratings.cleanliness}/5\nLighting: ${ratings.lighting}/5\nCrowd: ${ratings.crowd}/5\nSecurity: ${ratings.security}/5\nWalkability: ${ratings.walkability}/5\nDescription: ${locationReport.description}`;

    const promises = fixed_contact.map(phone_number => sendSMS(phone_number, sms_body));
    return Promise.all(promises);
    // return sendSMS('+639274332241', sms_body);

}