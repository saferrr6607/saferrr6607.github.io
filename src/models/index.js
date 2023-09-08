// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MedicalRecord, EmergencyContact } = initSchema(schema);

export {
  MedicalRecord,
  EmergencyContact
};