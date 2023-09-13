// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Notification, LocationReport, IncidentReport, MedicalRecord, EmergencyContact, UserVerification } = initSchema(schema);

export {
  Notification,
  LocationReport,
  IncidentReport,
  MedicalRecord,
  EmergencyContact,
  UserVerification
};