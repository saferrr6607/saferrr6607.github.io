// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const InviteCodes = {
  "SAFE_HER2024": "SafeHer2024",
  "SAFE_HER_COMMUTE": "SafeHerCommute",
  "SDRC1979": "SDRC1979",
  "IDRC_RESPONSIBLE_AI": "IDRC_ResponsibleAI",
  "SDG5": "SDG5"
};

const { Notification, LocationReport, IncidentReport, MedicalRecord, EmergencyContact, UserVerification, SafeWords, AccountSettings, AccountInvites, MobileAppOptions, SignupStage } = initSchema(schema);

export {
  Notification,
  LocationReport,
  IncidentReport,
  MedicalRecord,
  EmergencyContact,
  UserVerification,
  SafeWords,
  AccountSettings,
  AccountInvites,
  MobileAppOptions,
  SignupStage,
  InviteCodes
};