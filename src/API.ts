/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNotificationInput = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  timestamp?: string | null,
  metadata?: string | null,
  type?: string | null,
  owner?: string | null,
  _version?: number | null,
};

export type ModelNotificationConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  metadata?: ModelStringInput | null,
  type?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelNotificationConditionInput | null > | null,
  or?: Array< ModelNotificationConditionInput | null > | null,
  not?: ModelNotificationConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Notification = {
  __typename: "Notification",
  id: string,
  title?: string | null,
  description?: string | null,
  timestamp?: string | null,
  metadata?: string | null,
  type?: string | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateNotificationInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  timestamp?: string | null,
  metadata?: string | null,
  type?: string | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteNotificationInput = {
  id: string,
  _version?: number | null,
};

export type CreateLocationReportInput = {
  id?: string | null,
  report_type?: string | null,
  coordinates?: string | null,
  location?: string | null,
  datetime?: string | null,
  ratings?: Array< string | null > | null,
  description?: string | null,
  media?: Array< string | null > | null,
  owner?: string | null,
  _version?: number | null,
};

export type ModelLocationReportConditionInput = {
  report_type?: ModelStringInput | null,
  coordinates?: ModelStringInput | null,
  location?: ModelStringInput | null,
  datetime?: ModelStringInput | null,
  ratings?: ModelStringInput | null,
  description?: ModelStringInput | null,
  media?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelLocationReportConditionInput | null > | null,
  or?: Array< ModelLocationReportConditionInput | null > | null,
  not?: ModelLocationReportConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type LocationReport = {
  __typename: "LocationReport",
  id: string,
  report_type?: string | null,
  coordinates?: string | null,
  location?: string | null,
  datetime?: string | null,
  ratings?: Array< string | null > | null,
  description?: string | null,
  media?: Array< string | null > | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateLocationReportInput = {
  id: string,
  report_type?: string | null,
  coordinates?: string | null,
  location?: string | null,
  datetime?: string | null,
  ratings?: Array< string | null > | null,
  description?: string | null,
  media?: Array< string | null > | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteLocationReportInput = {
  id: string,
  _version?: number | null,
};

export type CreateIncidentReportInput = {
  id?: string | null,
  report_type?: string | null,
  coordinates?: string | null,
  location?: string | null,
  datetime?: string | null,
  category?: Array< string | null > | null,
  description?: string | null,
  media?: Array< string | null > | null,
  owner?: string | null,
  _version?: number | null,
};

export type ModelIncidentReportConditionInput = {
  report_type?: ModelStringInput | null,
  coordinates?: ModelStringInput | null,
  location?: ModelStringInput | null,
  datetime?: ModelStringInput | null,
  category?: ModelStringInput | null,
  description?: ModelStringInput | null,
  media?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelIncidentReportConditionInput | null > | null,
  or?: Array< ModelIncidentReportConditionInput | null > | null,
  not?: ModelIncidentReportConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type IncidentReport = {
  __typename: "IncidentReport",
  id: string,
  report_type?: string | null,
  coordinates?: string | null,
  location?: string | null,
  datetime?: string | null,
  category?: Array< string | null > | null,
  description?: string | null,
  media?: Array< string | null > | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateIncidentReportInput = {
  id: string,
  report_type?: string | null,
  coordinates?: string | null,
  location?: string | null,
  datetime?: string | null,
  category?: Array< string | null > | null,
  description?: string | null,
  media?: Array< string | null > | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteIncidentReportInput = {
  id: string,
  _version?: number | null,
};

export type CreateMedicalRecordInput = {
  id?: string | null,
  date_of_birth?: string | null,
  medical_condition?: string | null,
  medical_notes?: string | null,
  medications?: string | null,
  blood_type?: string | null,
  organ_donor?: string | null,
  weight?: string | null,
  height?: string | null,
  skin_color?: string | null,
  hair_color?: string | null,
  tattoo?: string | null,
  owner?: string | null,
  _version?: number | null,
};

export type ModelMedicalRecordConditionInput = {
  date_of_birth?: ModelStringInput | null,
  medical_condition?: ModelStringInput | null,
  medical_notes?: ModelStringInput | null,
  medications?: ModelStringInput | null,
  blood_type?: ModelStringInput | null,
  organ_donor?: ModelStringInput | null,
  weight?: ModelStringInput | null,
  height?: ModelStringInput | null,
  skin_color?: ModelStringInput | null,
  hair_color?: ModelStringInput | null,
  tattoo?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelMedicalRecordConditionInput | null > | null,
  or?: Array< ModelMedicalRecordConditionInput | null > | null,
  not?: ModelMedicalRecordConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type MedicalRecord = {
  __typename: "MedicalRecord",
  id: string,
  date_of_birth?: string | null,
  medical_condition?: string | null,
  medical_notes?: string | null,
  medications?: string | null,
  blood_type?: string | null,
  organ_donor?: string | null,
  weight?: string | null,
  height?: string | null,
  skin_color?: string | null,
  hair_color?: string | null,
  tattoo?: string | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMedicalRecordInput = {
  id: string,
  date_of_birth?: string | null,
  medical_condition?: string | null,
  medical_notes?: string | null,
  medications?: string | null,
  blood_type?: string | null,
  organ_donor?: string | null,
  weight?: string | null,
  height?: string | null,
  skin_color?: string | null,
  hair_color?: string | null,
  tattoo?: string | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteMedicalRecordInput = {
  id: string,
  _version?: number | null,
};

export type CreateEmergencyContactInput = {
  id?: string | null,
  name?: string | null,
  phone_number?: string | null,
  status?: number | null,
  phone_number_id?: string | null,
  owner?: string | null,
  _version?: number | null,
};

export type ModelEmergencyContactConditionInput = {
  name?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  status?: ModelIntInput | null,
  phone_number_id?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelEmergencyContactConditionInput | null > | null,
  or?: Array< ModelEmergencyContactConditionInput | null > | null,
  not?: ModelEmergencyContactConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type EmergencyContact = {
  __typename: "EmergencyContact",
  id: string,
  name?: string | null,
  phone_number?: string | null,
  status?: number | null,
  phone_number_id?: string | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateEmergencyContactInput = {
  id: string,
  name?: string | null,
  phone_number?: string | null,
  status?: number | null,
  phone_number_id?: string | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteEmergencyContactInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserVerificationInput = {
  id?: string | null,
  id_name?: string | null,
  id_mime_type?: string | null,
  id_key?: string | null,
  selfie_name?: string | null,
  selfie_mime_type?: string | null,
  selfie_key?: string | null,
  verified?: boolean | null,
  verify_status?: string | null,
  denied_reason?: string | null,
  owner?: string | null,
  _version?: number | null,
};

export type ModelUserVerificationConditionInput = {
  id_name?: ModelStringInput | null,
  id_mime_type?: ModelStringInput | null,
  id_key?: ModelStringInput | null,
  selfie_name?: ModelStringInput | null,
  selfie_mime_type?: ModelStringInput | null,
  selfie_key?: ModelStringInput | null,
  verified?: ModelBooleanInput | null,
  verify_status?: ModelStringInput | null,
  denied_reason?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelUserVerificationConditionInput | null > | null,
  or?: Array< ModelUserVerificationConditionInput | null > | null,
  not?: ModelUserVerificationConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UserVerification = {
  __typename: "UserVerification",
  id: string,
  id_name?: string | null,
  id_mime_type?: string | null,
  id_key?: string | null,
  selfie_name?: string | null,
  selfie_mime_type?: string | null,
  selfie_key?: string | null,
  verified?: boolean | null,
  verify_status?: string | null,
  denied_reason?: string | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUserVerificationInput = {
  id: string,
  id_name?: string | null,
  id_mime_type?: string | null,
  id_key?: string | null,
  selfie_name?: string | null,
  selfie_mime_type?: string | null,
  selfie_key?: string | null,
  verified?: boolean | null,
  verify_status?: string | null,
  denied_reason?: string | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteUserVerificationInput = {
  id: string,
  _version?: number | null,
};

export type CreateSafeWordsInput = {
  id?: string | null,
  safe_word?: string | null,
  enabled?: boolean | null,
  status?: number | null,
  owner?: string | null,
  _version?: number | null,
};

export type ModelSafeWordsConditionInput = {
  safe_word?: ModelStringInput | null,
  enabled?: ModelBooleanInput | null,
  status?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelSafeWordsConditionInput | null > | null,
  or?: Array< ModelSafeWordsConditionInput | null > | null,
  not?: ModelSafeWordsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type SafeWords = {
  __typename: "SafeWords",
  id: string,
  safe_word?: string | null,
  enabled?: boolean | null,
  status?: number | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateSafeWordsInput = {
  id: string,
  safe_word?: string | null,
  enabled?: boolean | null,
  status?: number | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteSafeWordsInput = {
  id: string,
  _version?: number | null,
};

export type CreateAccountSettingsInput = {
  id?: string | null,
  enableBiometricLogin?: boolean | null,
  enableFaceIdLogin?: boolean | null,
  faceIDKey?: string | null,
  enableSafeWords?: boolean | null,
  owner?: string | null,
  _version?: number | null,
};

export type ModelAccountSettingsConditionInput = {
  enableBiometricLogin?: ModelBooleanInput | null,
  enableFaceIdLogin?: ModelBooleanInput | null,
  faceIDKey?: ModelStringInput | null,
  enableSafeWords?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAccountSettingsConditionInput | null > | null,
  or?: Array< ModelAccountSettingsConditionInput | null > | null,
  not?: ModelAccountSettingsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type AccountSettings = {
  __typename: "AccountSettings",
  id: string,
  enableBiometricLogin?: boolean | null,
  enableFaceIdLogin?: boolean | null,
  faceIDKey?: string | null,
  enableSafeWords?: boolean | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateAccountSettingsInput = {
  id: string,
  enableBiometricLogin?: boolean | null,
  enableFaceIdLogin?: boolean | null,
  faceIDKey?: string | null,
  enableSafeWords?: boolean | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteAccountSettingsInput = {
  id: string,
  _version?: number | null,
};

export type CreateAccountInvitesInput = {
  id?: string | null,
  code?: InviteCodes | null,
  cognito_id?: string | null,
  _version?: number | null,
};

export enum InviteCodes {
  SafeHer2024 = "SafeHer2024",
  SafeHerCommute = "SafeHerCommute",
  SDRC1979 = "SDRC1979",
  IDRC_ResponsibleAI = "IDRC_ResponsibleAI",
  SDG5 = "SDG5",
}


export type ModelAccountInvitesConditionInput = {
  code?: ModelInviteCodesInput | null,
  cognito_id?: ModelStringInput | null,
  and?: Array< ModelAccountInvitesConditionInput | null > | null,
  or?: Array< ModelAccountInvitesConditionInput | null > | null,
  not?: ModelAccountInvitesConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelInviteCodesInput = {
  eq?: InviteCodes | null,
  ne?: InviteCodes | null,
};

export type AccountInvites = {
  __typename: "AccountInvites",
  id: string,
  code?: InviteCodes | null,
  cognito_id?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateAccountInvitesInput = {
  id: string,
  code?: InviteCodes | null,
  cognito_id?: string | null,
  _version?: number | null,
};

export type DeleteAccountInvitesInput = {
  id: string,
  _version?: number | null,
};

export type CreateMobileAppOptionsInput = {
  requireVerifiedAccount?: boolean | null,
  id?: string | null,
  _version?: number | null,
};

export type ModelMobileAppOptionsConditionInput = {
  requireVerifiedAccount?: ModelBooleanInput | null,
  and?: Array< ModelMobileAppOptionsConditionInput | null > | null,
  or?: Array< ModelMobileAppOptionsConditionInput | null > | null,
  not?: ModelMobileAppOptionsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type MobileAppOptions = {
  __typename: "MobileAppOptions",
  requireVerifiedAccount?: boolean | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMobileAppOptionsInput = {
  requireVerifiedAccount?: boolean | null,
  id: string,
  _version?: number | null,
};

export type DeleteMobileAppOptionsInput = {
  id: string,
  _version?: number | null,
};

export type CreateSignupStageInput = {
  id?: string | null,
  step?: string | null,
  owner?: string | null,
  _version?: number | null,
};

export type ModelSignupStageConditionInput = {
  step?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelSignupStageConditionInput | null > | null,
  or?: Array< ModelSignupStageConditionInput | null > | null,
  not?: ModelSignupStageConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type SignupStage = {
  __typename: "SignupStage",
  id: string,
  step?: string | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateSignupStageInput = {
  id: string,
  step?: string | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteSignupStageInput = {
  id: string,
  _version?: number | null,
};

export type ModelNotificationFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  metadata?: ModelStringInput | null,
  type?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelNotificationFilterInput | null > | null,
  or?: Array< ModelNotificationFilterInput | null > | null,
  not?: ModelNotificationFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection",
  items:  Array<Notification | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelLocationReportFilterInput = {
  id?: ModelIDInput | null,
  report_type?: ModelStringInput | null,
  coordinates?: ModelStringInput | null,
  location?: ModelStringInput | null,
  datetime?: ModelStringInput | null,
  ratings?: ModelStringInput | null,
  description?: ModelStringInput | null,
  media?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLocationReportFilterInput | null > | null,
  or?: Array< ModelLocationReportFilterInput | null > | null,
  not?: ModelLocationReportFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelLocationReportConnection = {
  __typename: "ModelLocationReportConnection",
  items:  Array<LocationReport | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelIncidentReportFilterInput = {
  id?: ModelIDInput | null,
  report_type?: ModelStringInput | null,
  coordinates?: ModelStringInput | null,
  location?: ModelStringInput | null,
  datetime?: ModelStringInput | null,
  category?: ModelStringInput | null,
  description?: ModelStringInput | null,
  media?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelIncidentReportFilterInput | null > | null,
  or?: Array< ModelIncidentReportFilterInput | null > | null,
  not?: ModelIncidentReportFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIncidentReportConnection = {
  __typename: "ModelIncidentReportConnection",
  items:  Array<IncidentReport | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMedicalRecordFilterInput = {
  id?: ModelIDInput | null,
  date_of_birth?: ModelStringInput | null,
  medical_condition?: ModelStringInput | null,
  medical_notes?: ModelStringInput | null,
  medications?: ModelStringInput | null,
  blood_type?: ModelStringInput | null,
  organ_donor?: ModelStringInput | null,
  weight?: ModelStringInput | null,
  height?: ModelStringInput | null,
  skin_color?: ModelStringInput | null,
  hair_color?: ModelStringInput | null,
  tattoo?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMedicalRecordFilterInput | null > | null,
  or?: Array< ModelMedicalRecordFilterInput | null > | null,
  not?: ModelMedicalRecordFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelMedicalRecordConnection = {
  __typename: "ModelMedicalRecordConnection",
  items:  Array<MedicalRecord | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelEmergencyContactFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  status?: ModelIntInput | null,
  phone_number_id?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEmergencyContactFilterInput | null > | null,
  or?: Array< ModelEmergencyContactFilterInput | null > | null,
  not?: ModelEmergencyContactFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelEmergencyContactConnection = {
  __typename: "ModelEmergencyContactConnection",
  items:  Array<EmergencyContact | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserVerificationFilterInput = {
  id?: ModelIDInput | null,
  id_name?: ModelStringInput | null,
  id_mime_type?: ModelStringInput | null,
  id_key?: ModelStringInput | null,
  selfie_name?: ModelStringInput | null,
  selfie_mime_type?: ModelStringInput | null,
  selfie_key?: ModelStringInput | null,
  verified?: ModelBooleanInput | null,
  verify_status?: ModelStringInput | null,
  denied_reason?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserVerificationFilterInput | null > | null,
  or?: Array< ModelUserVerificationFilterInput | null > | null,
  not?: ModelUserVerificationFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserVerificationConnection = {
  __typename: "ModelUserVerificationConnection",
  items:  Array<UserVerification | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSafeWordsFilterInput = {
  id?: ModelIDInput | null,
  safe_word?: ModelStringInput | null,
  enabled?: ModelBooleanInput | null,
  status?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSafeWordsFilterInput | null > | null,
  or?: Array< ModelSafeWordsFilterInput | null > | null,
  not?: ModelSafeWordsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSafeWordsConnection = {
  __typename: "ModelSafeWordsConnection",
  items:  Array<SafeWords | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAccountSettingsFilterInput = {
  id?: ModelIDInput | null,
  enableBiometricLogin?: ModelBooleanInput | null,
  enableFaceIdLogin?: ModelBooleanInput | null,
  faceIDKey?: ModelStringInput | null,
  enableSafeWords?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAccountSettingsFilterInput | null > | null,
  or?: Array< ModelAccountSettingsFilterInput | null > | null,
  not?: ModelAccountSettingsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelAccountSettingsConnection = {
  __typename: "ModelAccountSettingsConnection",
  items:  Array<AccountSettings | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAccountInvitesFilterInput = {
  id?: ModelIDInput | null,
  code?: ModelInviteCodesInput | null,
  cognito_id?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAccountInvitesFilterInput | null > | null,
  or?: Array< ModelAccountInvitesFilterInput | null > | null,
  not?: ModelAccountInvitesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelAccountInvitesConnection = {
  __typename: "ModelAccountInvitesConnection",
  items:  Array<AccountInvites | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMobileAppOptionsFilterInput = {
  requireVerifiedAccount?: ModelBooleanInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMobileAppOptionsFilterInput | null > | null,
  or?: Array< ModelMobileAppOptionsFilterInput | null > | null,
  not?: ModelMobileAppOptionsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelMobileAppOptionsConnection = {
  __typename: "ModelMobileAppOptionsConnection",
  items:  Array<MobileAppOptions | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSignupStageFilterInput = {
  id?: ModelIDInput | null,
  step?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSignupStageFilterInput | null > | null,
  or?: Array< ModelSignupStageFilterInput | null > | null,
  not?: ModelSignupStageFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSignupStageConnection = {
  __typename: "ModelSignupStageConnection",
  items:  Array<SignupStage | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  metadata?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionLocationReportFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  report_type?: ModelSubscriptionStringInput | null,
  coordinates?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  datetime?: ModelSubscriptionStringInput | null,
  ratings?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  media?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLocationReportFilterInput | null > | null,
  or?: Array< ModelSubscriptionLocationReportFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIncidentReportFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  report_type?: ModelSubscriptionStringInput | null,
  coordinates?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  datetime?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  media?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionIncidentReportFilterInput | null > | null,
  or?: Array< ModelSubscriptionIncidentReportFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionMedicalRecordFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date_of_birth?: ModelSubscriptionStringInput | null,
  medical_condition?: ModelSubscriptionStringInput | null,
  medical_notes?: ModelSubscriptionStringInput | null,
  medications?: ModelSubscriptionStringInput | null,
  blood_type?: ModelSubscriptionStringInput | null,
  organ_donor?: ModelSubscriptionStringInput | null,
  weight?: ModelSubscriptionStringInput | null,
  height?: ModelSubscriptionStringInput | null,
  skin_color?: ModelSubscriptionStringInput | null,
  hair_color?: ModelSubscriptionStringInput | null,
  tattoo?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMedicalRecordFilterInput | null > | null,
  or?: Array< ModelSubscriptionMedicalRecordFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionEmergencyContactFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  phone_number?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionIntInput | null,
  phone_number_id?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEmergencyContactFilterInput | null > | null,
  or?: Array< ModelSubscriptionEmergencyContactFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserVerificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  id_name?: ModelSubscriptionStringInput | null,
  id_mime_type?: ModelSubscriptionStringInput | null,
  id_key?: ModelSubscriptionStringInput | null,
  selfie_name?: ModelSubscriptionStringInput | null,
  selfie_mime_type?: ModelSubscriptionStringInput | null,
  selfie_key?: ModelSubscriptionStringInput | null,
  verified?: ModelSubscriptionBooleanInput | null,
  verify_status?: ModelSubscriptionStringInput | null,
  denied_reason?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserVerificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserVerificationFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionSafeWordsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  safe_word?: ModelSubscriptionStringInput | null,
  enabled?: ModelSubscriptionBooleanInput | null,
  status?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSafeWordsFilterInput | null > | null,
  or?: Array< ModelSubscriptionSafeWordsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionAccountSettingsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  enableBiometricLogin?: ModelSubscriptionBooleanInput | null,
  enableFaceIdLogin?: ModelSubscriptionBooleanInput | null,
  faceIDKey?: ModelSubscriptionStringInput | null,
  enableSafeWords?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAccountSettingsFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccountSettingsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionAccountInvitesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  code?: ModelSubscriptionStringInput | null,
  cognito_id?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAccountInvitesFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccountInvitesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionMobileAppOptionsFilterInput = {
  requireVerifiedAccount?: ModelSubscriptionBooleanInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMobileAppOptionsFilterInput | null > | null,
  or?: Array< ModelSubscriptionMobileAppOptionsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionSignupStageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  step?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSignupStageFilterInput | null > | null,
  or?: Array< ModelSubscriptionSignupStageFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type CreateNotificationMutationVariables = {
  input: CreateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type CreateNotificationMutation = {
  createNotification?:  {
    __typename: "Notification",
    id: string,
    title?: string | null,
    description?: string | null,
    timestamp?: string | null,
    metadata?: string | null,
    type?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateNotificationMutationVariables = {
  input: UpdateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type UpdateNotificationMutation = {
  updateNotification?:  {
    __typename: "Notification",
    id: string,
    title?: string | null,
    description?: string | null,
    timestamp?: string | null,
    metadata?: string | null,
    type?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteNotificationMutationVariables = {
  input: DeleteNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type DeleteNotificationMutation = {
  deleteNotification?:  {
    __typename: "Notification",
    id: string,
    title?: string | null,
    description?: string | null,
    timestamp?: string | null,
    metadata?: string | null,
    type?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateLocationReportMutationVariables = {
  input: CreateLocationReportInput,
  condition?: ModelLocationReportConditionInput | null,
};

export type CreateLocationReportMutation = {
  createLocationReport?:  {
    __typename: "LocationReport",
    id: string,
    report_type?: string | null,
    coordinates?: string | null,
    location?: string | null,
    datetime?: string | null,
    ratings?: Array< string | null > | null,
    description?: string | null,
    media?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateLocationReportMutationVariables = {
  input: UpdateLocationReportInput,
  condition?: ModelLocationReportConditionInput | null,
};

export type UpdateLocationReportMutation = {
  updateLocationReport?:  {
    __typename: "LocationReport",
    id: string,
    report_type?: string | null,
    coordinates?: string | null,
    location?: string | null,
    datetime?: string | null,
    ratings?: Array< string | null > | null,
    description?: string | null,
    media?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteLocationReportMutationVariables = {
  input: DeleteLocationReportInput,
  condition?: ModelLocationReportConditionInput | null,
};

export type DeleteLocationReportMutation = {
  deleteLocationReport?:  {
    __typename: "LocationReport",
    id: string,
    report_type?: string | null,
    coordinates?: string | null,
    location?: string | null,
    datetime?: string | null,
    ratings?: Array< string | null > | null,
    description?: string | null,
    media?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateIncidentReportMutationVariables = {
  input: CreateIncidentReportInput,
  condition?: ModelIncidentReportConditionInput | null,
};

export type CreateIncidentReportMutation = {
  createIncidentReport?:  {
    __typename: "IncidentReport",
    id: string,
    report_type?: string | null,
    coordinates?: string | null,
    location?: string | null,
    datetime?: string | null,
    category?: Array< string | null > | null,
    description?: string | null,
    media?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateIncidentReportMutationVariables = {
  input: UpdateIncidentReportInput,
  condition?: ModelIncidentReportConditionInput | null,
};

export type UpdateIncidentReportMutation = {
  updateIncidentReport?:  {
    __typename: "IncidentReport",
    id: string,
    report_type?: string | null,
    coordinates?: string | null,
    location?: string | null,
    datetime?: string | null,
    category?: Array< string | null > | null,
    description?: string | null,
    media?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteIncidentReportMutationVariables = {
  input: DeleteIncidentReportInput,
  condition?: ModelIncidentReportConditionInput | null,
};

export type DeleteIncidentReportMutation = {
  deleteIncidentReport?:  {
    __typename: "IncidentReport",
    id: string,
    report_type?: string | null,
    coordinates?: string | null,
    location?: string | null,
    datetime?: string | null,
    category?: Array< string | null > | null,
    description?: string | null,
    media?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMedicalRecordMutationVariables = {
  input: CreateMedicalRecordInput,
  condition?: ModelMedicalRecordConditionInput | null,
};

export type CreateMedicalRecordMutation = {
  createMedicalRecord?:  {
    __typename: "MedicalRecord",
    id: string,
    date_of_birth?: string | null,
    medical_condition?: string | null,
    medical_notes?: string | null,
    medications?: string | null,
    blood_type?: string | null,
    organ_donor?: string | null,
    weight?: string | null,
    height?: string | null,
    skin_color?: string | null,
    hair_color?: string | null,
    tattoo?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMedicalRecordMutationVariables = {
  input: UpdateMedicalRecordInput,
  condition?: ModelMedicalRecordConditionInput | null,
};

export type UpdateMedicalRecordMutation = {
  updateMedicalRecord?:  {
    __typename: "MedicalRecord",
    id: string,
    date_of_birth?: string | null,
    medical_condition?: string | null,
    medical_notes?: string | null,
    medications?: string | null,
    blood_type?: string | null,
    organ_donor?: string | null,
    weight?: string | null,
    height?: string | null,
    skin_color?: string | null,
    hair_color?: string | null,
    tattoo?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMedicalRecordMutationVariables = {
  input: DeleteMedicalRecordInput,
  condition?: ModelMedicalRecordConditionInput | null,
};

export type DeleteMedicalRecordMutation = {
  deleteMedicalRecord?:  {
    __typename: "MedicalRecord",
    id: string,
    date_of_birth?: string | null,
    medical_condition?: string | null,
    medical_notes?: string | null,
    medications?: string | null,
    blood_type?: string | null,
    organ_donor?: string | null,
    weight?: string | null,
    height?: string | null,
    skin_color?: string | null,
    hair_color?: string | null,
    tattoo?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateEmergencyContactMutationVariables = {
  input: CreateEmergencyContactInput,
  condition?: ModelEmergencyContactConditionInput | null,
};

export type CreateEmergencyContactMutation = {
  createEmergencyContact?:  {
    __typename: "EmergencyContact",
    id: string,
    name?: string | null,
    phone_number?: string | null,
    status?: number | null,
    phone_number_id?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateEmergencyContactMutationVariables = {
  input: UpdateEmergencyContactInput,
  condition?: ModelEmergencyContactConditionInput | null,
};

export type UpdateEmergencyContactMutation = {
  updateEmergencyContact?:  {
    __typename: "EmergencyContact",
    id: string,
    name?: string | null,
    phone_number?: string | null,
    status?: number | null,
    phone_number_id?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteEmergencyContactMutationVariables = {
  input: DeleteEmergencyContactInput,
  condition?: ModelEmergencyContactConditionInput | null,
};

export type DeleteEmergencyContactMutation = {
  deleteEmergencyContact?:  {
    __typename: "EmergencyContact",
    id: string,
    name?: string | null,
    phone_number?: string | null,
    status?: number | null,
    phone_number_id?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserVerificationMutationVariables = {
  input: CreateUserVerificationInput,
  condition?: ModelUserVerificationConditionInput | null,
};

export type CreateUserVerificationMutation = {
  createUserVerification?:  {
    __typename: "UserVerification",
    id: string,
    id_name?: string | null,
    id_mime_type?: string | null,
    id_key?: string | null,
    selfie_name?: string | null,
    selfie_mime_type?: string | null,
    selfie_key?: string | null,
    verified?: boolean | null,
    verify_status?: string | null,
    denied_reason?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserVerificationMutationVariables = {
  input: UpdateUserVerificationInput,
  condition?: ModelUserVerificationConditionInput | null,
};

export type UpdateUserVerificationMutation = {
  updateUserVerification?:  {
    __typename: "UserVerification",
    id: string,
    id_name?: string | null,
    id_mime_type?: string | null,
    id_key?: string | null,
    selfie_name?: string | null,
    selfie_mime_type?: string | null,
    selfie_key?: string | null,
    verified?: boolean | null,
    verify_status?: string | null,
    denied_reason?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserVerificationMutationVariables = {
  input: DeleteUserVerificationInput,
  condition?: ModelUserVerificationConditionInput | null,
};

export type DeleteUserVerificationMutation = {
  deleteUserVerification?:  {
    __typename: "UserVerification",
    id: string,
    id_name?: string | null,
    id_mime_type?: string | null,
    id_key?: string | null,
    selfie_name?: string | null,
    selfie_mime_type?: string | null,
    selfie_key?: string | null,
    verified?: boolean | null,
    verify_status?: string | null,
    denied_reason?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSafeWordsMutationVariables = {
  input: CreateSafeWordsInput,
  condition?: ModelSafeWordsConditionInput | null,
};

export type CreateSafeWordsMutation = {
  createSafeWords?:  {
    __typename: "SafeWords",
    id: string,
    safe_word?: string | null,
    enabled?: boolean | null,
    status?: number | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSafeWordsMutationVariables = {
  input: UpdateSafeWordsInput,
  condition?: ModelSafeWordsConditionInput | null,
};

export type UpdateSafeWordsMutation = {
  updateSafeWords?:  {
    __typename: "SafeWords",
    id: string,
    safe_word?: string | null,
    enabled?: boolean | null,
    status?: number | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSafeWordsMutationVariables = {
  input: DeleteSafeWordsInput,
  condition?: ModelSafeWordsConditionInput | null,
};

export type DeleteSafeWordsMutation = {
  deleteSafeWords?:  {
    __typename: "SafeWords",
    id: string,
    safe_word?: string | null,
    enabled?: boolean | null,
    status?: number | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAccountSettingsMutationVariables = {
  input: CreateAccountSettingsInput,
  condition?: ModelAccountSettingsConditionInput | null,
};

export type CreateAccountSettingsMutation = {
  createAccountSettings?:  {
    __typename: "AccountSettings",
    id: string,
    enableBiometricLogin?: boolean | null,
    enableFaceIdLogin?: boolean | null,
    faceIDKey?: string | null,
    enableSafeWords?: boolean | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAccountSettingsMutationVariables = {
  input: UpdateAccountSettingsInput,
  condition?: ModelAccountSettingsConditionInput | null,
};

export type UpdateAccountSettingsMutation = {
  updateAccountSettings?:  {
    __typename: "AccountSettings",
    id: string,
    enableBiometricLogin?: boolean | null,
    enableFaceIdLogin?: boolean | null,
    faceIDKey?: string | null,
    enableSafeWords?: boolean | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAccountSettingsMutationVariables = {
  input: DeleteAccountSettingsInput,
  condition?: ModelAccountSettingsConditionInput | null,
};

export type DeleteAccountSettingsMutation = {
  deleteAccountSettings?:  {
    __typename: "AccountSettings",
    id: string,
    enableBiometricLogin?: boolean | null,
    enableFaceIdLogin?: boolean | null,
    faceIDKey?: string | null,
    enableSafeWords?: boolean | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAccountInvitesMutationVariables = {
  input: CreateAccountInvitesInput,
  condition?: ModelAccountInvitesConditionInput | null,
};

export type CreateAccountInvitesMutation = {
  createAccountInvites?:  {
    __typename: "AccountInvites",
    id: string,
    code?: InviteCodes | null,
    cognito_id?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAccountInvitesMutationVariables = {
  input: UpdateAccountInvitesInput,
  condition?: ModelAccountInvitesConditionInput | null,
};

export type UpdateAccountInvitesMutation = {
  updateAccountInvites?:  {
    __typename: "AccountInvites",
    id: string,
    code?: InviteCodes | null,
    cognito_id?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAccountInvitesMutationVariables = {
  input: DeleteAccountInvitesInput,
  condition?: ModelAccountInvitesConditionInput | null,
};

export type DeleteAccountInvitesMutation = {
  deleteAccountInvites?:  {
    __typename: "AccountInvites",
    id: string,
    code?: InviteCodes | null,
    cognito_id?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMobileAppOptionsMutationVariables = {
  input: CreateMobileAppOptionsInput,
  condition?: ModelMobileAppOptionsConditionInput | null,
};

export type CreateMobileAppOptionsMutation = {
  createMobileAppOptions?:  {
    __typename: "MobileAppOptions",
    requireVerifiedAccount?: boolean | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMobileAppOptionsMutationVariables = {
  input: UpdateMobileAppOptionsInput,
  condition?: ModelMobileAppOptionsConditionInput | null,
};

export type UpdateMobileAppOptionsMutation = {
  updateMobileAppOptions?:  {
    __typename: "MobileAppOptions",
    requireVerifiedAccount?: boolean | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMobileAppOptionsMutationVariables = {
  input: DeleteMobileAppOptionsInput,
  condition?: ModelMobileAppOptionsConditionInput | null,
};

export type DeleteMobileAppOptionsMutation = {
  deleteMobileAppOptions?:  {
    __typename: "MobileAppOptions",
    requireVerifiedAccount?: boolean | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSignupStageMutationVariables = {
  input: CreateSignupStageInput,
  condition?: ModelSignupStageConditionInput | null,
};

export type CreateSignupStageMutation = {
  createSignupStage?:  {
    __typename: "SignupStage",
    id: string,
    step?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSignupStageMutationVariables = {
  input: UpdateSignupStageInput,
  condition?: ModelSignupStageConditionInput | null,
};

export type UpdateSignupStageMutation = {
  updateSignupStage?:  {
    __typename: "SignupStage",
    id: string,
    step?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSignupStageMutationVariables = {
  input: DeleteSignupStageInput,
  condition?: ModelSignupStageConditionInput | null,
};

export type DeleteSignupStageMutation = {
  deleteSignupStage?:  {
    __typename: "SignupStage",
    id: string,
    step?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetNotificationQueryVariables = {
  id: string,
};

export type GetNotificationQuery = {
  getNotification?:  {
    __typename: "Notification",
    id: string,
    title?: string | null,
    description?: string | null,
    timestamp?: string | null,
    metadata?: string | null,
    type?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotificationsQuery = {
  listNotifications?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      title?: string | null,
      description?: string | null,
      timestamp?: string | null,
      metadata?: string | null,
      type?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncNotificationsQuery = {
  syncNotifications?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      title?: string | null,
      description?: string | null,
      timestamp?: string | null,
      metadata?: string | null,
      type?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetLocationReportQueryVariables = {
  id: string,
};

export type GetLocationReportQuery = {
  getLocationReport?:  {
    __typename: "LocationReport",
    id: string,
    report_type?: string | null,
    coordinates?: string | null,
    location?: string | null,
    datetime?: string | null,
    ratings?: Array< string | null > | null,
    description?: string | null,
    media?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListLocationReportsQueryVariables = {
  filter?: ModelLocationReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocationReportsQuery = {
  listLocationReports?:  {
    __typename: "ModelLocationReportConnection",
    items:  Array< {
      __typename: "LocationReport",
      id: string,
      report_type?: string | null,
      coordinates?: string | null,
      location?: string | null,
      datetime?: string | null,
      ratings?: Array< string | null > | null,
      description?: string | null,
      media?: Array< string | null > | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLocationReportsQueryVariables = {
  filter?: ModelLocationReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLocationReportsQuery = {
  syncLocationReports?:  {
    __typename: "ModelLocationReportConnection",
    items:  Array< {
      __typename: "LocationReport",
      id: string,
      report_type?: string | null,
      coordinates?: string | null,
      location?: string | null,
      datetime?: string | null,
      ratings?: Array< string | null > | null,
      description?: string | null,
      media?: Array< string | null > | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetIncidentReportQueryVariables = {
  id: string,
};

export type GetIncidentReportQuery = {
  getIncidentReport?:  {
    __typename: "IncidentReport",
    id: string,
    report_type?: string | null,
    coordinates?: string | null,
    location?: string | null,
    datetime?: string | null,
    category?: Array< string | null > | null,
    description?: string | null,
    media?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListIncidentReportsQueryVariables = {
  filter?: ModelIncidentReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIncidentReportsQuery = {
  listIncidentReports?:  {
    __typename: "ModelIncidentReportConnection",
    items:  Array< {
      __typename: "IncidentReport",
      id: string,
      report_type?: string | null,
      coordinates?: string | null,
      location?: string | null,
      datetime?: string | null,
      category?: Array< string | null > | null,
      description?: string | null,
      media?: Array< string | null > | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncIncidentReportsQueryVariables = {
  filter?: ModelIncidentReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncIncidentReportsQuery = {
  syncIncidentReports?:  {
    __typename: "ModelIncidentReportConnection",
    items:  Array< {
      __typename: "IncidentReport",
      id: string,
      report_type?: string | null,
      coordinates?: string | null,
      location?: string | null,
      datetime?: string | null,
      category?: Array< string | null > | null,
      description?: string | null,
      media?: Array< string | null > | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMedicalRecordQueryVariables = {
  id: string,
};

export type GetMedicalRecordQuery = {
  getMedicalRecord?:  {
    __typename: "MedicalRecord",
    id: string,
    date_of_birth?: string | null,
    medical_condition?: string | null,
    medical_notes?: string | null,
    medications?: string | null,
    blood_type?: string | null,
    organ_donor?: string | null,
    weight?: string | null,
    height?: string | null,
    skin_color?: string | null,
    hair_color?: string | null,
    tattoo?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMedicalRecordsQueryVariables = {
  filter?: ModelMedicalRecordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMedicalRecordsQuery = {
  listMedicalRecords?:  {
    __typename: "ModelMedicalRecordConnection",
    items:  Array< {
      __typename: "MedicalRecord",
      id: string,
      date_of_birth?: string | null,
      medical_condition?: string | null,
      medical_notes?: string | null,
      medications?: string | null,
      blood_type?: string | null,
      organ_donor?: string | null,
      weight?: string | null,
      height?: string | null,
      skin_color?: string | null,
      hair_color?: string | null,
      tattoo?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMedicalRecordsQueryVariables = {
  filter?: ModelMedicalRecordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMedicalRecordsQuery = {
  syncMedicalRecords?:  {
    __typename: "ModelMedicalRecordConnection",
    items:  Array< {
      __typename: "MedicalRecord",
      id: string,
      date_of_birth?: string | null,
      medical_condition?: string | null,
      medical_notes?: string | null,
      medications?: string | null,
      blood_type?: string | null,
      organ_donor?: string | null,
      weight?: string | null,
      height?: string | null,
      skin_color?: string | null,
      hair_color?: string | null,
      tattoo?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEmergencyContactQueryVariables = {
  id: string,
};

export type GetEmergencyContactQuery = {
  getEmergencyContact?:  {
    __typename: "EmergencyContact",
    id: string,
    name?: string | null,
    phone_number?: string | null,
    status?: number | null,
    phone_number_id?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListEmergencyContactsQueryVariables = {
  filter?: ModelEmergencyContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmergencyContactsQuery = {
  listEmergencyContacts?:  {
    __typename: "ModelEmergencyContactConnection",
    items:  Array< {
      __typename: "EmergencyContact",
      id: string,
      name?: string | null,
      phone_number?: string | null,
      status?: number | null,
      phone_number_id?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEmergencyContactsQueryVariables = {
  filter?: ModelEmergencyContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEmergencyContactsQuery = {
  syncEmergencyContacts?:  {
    __typename: "ModelEmergencyContactConnection",
    items:  Array< {
      __typename: "EmergencyContact",
      id: string,
      name?: string | null,
      phone_number?: string | null,
      status?: number | null,
      phone_number_id?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserVerificationQueryVariables = {
  id: string,
};

export type GetUserVerificationQuery = {
  getUserVerification?:  {
    __typename: "UserVerification",
    id: string,
    id_name?: string | null,
    id_mime_type?: string | null,
    id_key?: string | null,
    selfie_name?: string | null,
    selfie_mime_type?: string | null,
    selfie_key?: string | null,
    verified?: boolean | null,
    verify_status?: string | null,
    denied_reason?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserVerificationsQueryVariables = {
  filter?: ModelUserVerificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserVerificationsQuery = {
  listUserVerifications?:  {
    __typename: "ModelUserVerificationConnection",
    items:  Array< {
      __typename: "UserVerification",
      id: string,
      id_name?: string | null,
      id_mime_type?: string | null,
      id_key?: string | null,
      selfie_name?: string | null,
      selfie_mime_type?: string | null,
      selfie_key?: string | null,
      verified?: boolean | null,
      verify_status?: string | null,
      denied_reason?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserVerificationsQueryVariables = {
  filter?: ModelUserVerificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserVerificationsQuery = {
  syncUserVerifications?:  {
    __typename: "ModelUserVerificationConnection",
    items:  Array< {
      __typename: "UserVerification",
      id: string,
      id_name?: string | null,
      id_mime_type?: string | null,
      id_key?: string | null,
      selfie_name?: string | null,
      selfie_mime_type?: string | null,
      selfie_key?: string | null,
      verified?: boolean | null,
      verify_status?: string | null,
      denied_reason?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSafeWordsQueryVariables = {
  id: string,
};

export type GetSafeWordsQuery = {
  getSafeWords?:  {
    __typename: "SafeWords",
    id: string,
    safe_word?: string | null,
    enabled?: boolean | null,
    status?: number | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSafeWordsQueryVariables = {
  filter?: ModelSafeWordsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSafeWordsQuery = {
  listSafeWords?:  {
    __typename: "ModelSafeWordsConnection",
    items:  Array< {
      __typename: "SafeWords",
      id: string,
      safe_word?: string | null,
      enabled?: boolean | null,
      status?: number | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSafeWordsQueryVariables = {
  filter?: ModelSafeWordsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSafeWordsQuery = {
  syncSafeWords?:  {
    __typename: "ModelSafeWordsConnection",
    items:  Array< {
      __typename: "SafeWords",
      id: string,
      safe_word?: string | null,
      enabled?: boolean | null,
      status?: number | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAccountSettingsQueryVariables = {
  id: string,
};

export type GetAccountSettingsQuery = {
  getAccountSettings?:  {
    __typename: "AccountSettings",
    id: string,
    enableBiometricLogin?: boolean | null,
    enableFaceIdLogin?: boolean | null,
    faceIDKey?: string | null,
    enableSafeWords?: boolean | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAccountSettingsQueryVariables = {
  filter?: ModelAccountSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountSettingsQuery = {
  listAccountSettings?:  {
    __typename: "ModelAccountSettingsConnection",
    items:  Array< {
      __typename: "AccountSettings",
      id: string,
      enableBiometricLogin?: boolean | null,
      enableFaceIdLogin?: boolean | null,
      faceIDKey?: string | null,
      enableSafeWords?: boolean | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAccountSettingsQueryVariables = {
  filter?: ModelAccountSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAccountSettingsQuery = {
  syncAccountSettings?:  {
    __typename: "ModelAccountSettingsConnection",
    items:  Array< {
      __typename: "AccountSettings",
      id: string,
      enableBiometricLogin?: boolean | null,
      enableFaceIdLogin?: boolean | null,
      faceIDKey?: string | null,
      enableSafeWords?: boolean | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAccountInvitesQueryVariables = {
  id: string,
};

export type GetAccountInvitesQuery = {
  getAccountInvites?:  {
    __typename: "AccountInvites",
    id: string,
    code?: InviteCodes | null,
    cognito_id?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAccountInvitesQueryVariables = {
  filter?: ModelAccountInvitesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountInvitesQuery = {
  listAccountInvites?:  {
    __typename: "ModelAccountInvitesConnection",
    items:  Array< {
      __typename: "AccountInvites",
      id: string,
      code?: InviteCodes | null,
      cognito_id?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAccountInvitesQueryVariables = {
  filter?: ModelAccountInvitesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAccountInvitesQuery = {
  syncAccountInvites?:  {
    __typename: "ModelAccountInvitesConnection",
    items:  Array< {
      __typename: "AccountInvites",
      id: string,
      code?: InviteCodes | null,
      cognito_id?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMobileAppOptionsQueryVariables = {
  id: string,
};

export type GetMobileAppOptionsQuery = {
  getMobileAppOptions?:  {
    __typename: "MobileAppOptions",
    requireVerifiedAccount?: boolean | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMobileAppOptionsQueryVariables = {
  filter?: ModelMobileAppOptionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMobileAppOptionsQuery = {
  listMobileAppOptions?:  {
    __typename: "ModelMobileAppOptionsConnection",
    items:  Array< {
      __typename: "MobileAppOptions",
      requireVerifiedAccount?: boolean | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMobileAppOptionsQueryVariables = {
  filter?: ModelMobileAppOptionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMobileAppOptionsQuery = {
  syncMobileAppOptions?:  {
    __typename: "ModelMobileAppOptionsConnection",
    items:  Array< {
      __typename: "MobileAppOptions",
      requireVerifiedAccount?: boolean | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSignupStageQueryVariables = {
  id: string,
};

export type GetSignupStageQuery = {
  getSignupStage?:  {
    __typename: "SignupStage",
    id: string,
    step?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSignupStagesQueryVariables = {
  filter?: ModelSignupStageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSignupStagesQuery = {
  listSignupStages?:  {
    __typename: "ModelSignupStageConnection",
    items:  Array< {
      __typename: "SignupStage",
      id: string,
      step?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSignupStagesQueryVariables = {
  filter?: ModelSignupStageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSignupStagesQuery = {
  syncSignupStages?:  {
    __typename: "ModelSignupStageConnection",
    items:  Array< {
      __typename: "SignupStage",
      id: string,
      step?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
  owner?: string | null,
};

export type OnCreateNotificationSubscription = {
  onCreateNotification?:  {
    __typename: "Notification",
    id: string,
    title?: string | null,
    description?: string | null,
    timestamp?: string | null,
    metadata?: string | null,
    type?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
  owner?: string | null,
};

export type OnUpdateNotificationSubscription = {
  onUpdateNotification?:  {
    __typename: "Notification",
    id: string,
    title?: string | null,
    description?: string | null,
    timestamp?: string | null,
    metadata?: string | null,
    type?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
  owner?: string | null,
};

export type OnDeleteNotificationSubscription = {
  onDeleteNotification?:  {
    __typename: "Notification",
    id: string,
    title?: string | null,
    description?: string | null,
    timestamp?: string | null,
    metadata?: string | null,
    type?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateLocationReportSubscriptionVariables = {
  filter?: ModelSubscriptionLocationReportFilterInput | null,
  owner?: string | null,
};

export type OnCreateLocationReportSubscription = {
  onCreateLocationReport?:  {
    __typename: "LocationReport",
    id: string,
    report_type?: string | null,
    coordinates?: string | null,
    location?: string | null,
    datetime?: string | null,
    ratings?: Array< string | null > | null,
    description?: string | null,
    media?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateLocationReportSubscriptionVariables = {
  filter?: ModelSubscriptionLocationReportFilterInput | null,
  owner?: string | null,
};

export type OnUpdateLocationReportSubscription = {
  onUpdateLocationReport?:  {
    __typename: "LocationReport",
    id: string,
    report_type?: string | null,
    coordinates?: string | null,
    location?: string | null,
    datetime?: string | null,
    ratings?: Array< string | null > | null,
    description?: string | null,
    media?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteLocationReportSubscriptionVariables = {
  filter?: ModelSubscriptionLocationReportFilterInput | null,
  owner?: string | null,
};

export type OnDeleteLocationReportSubscription = {
  onDeleteLocationReport?:  {
    __typename: "LocationReport",
    id: string,
    report_type?: string | null,
    coordinates?: string | null,
    location?: string | null,
    datetime?: string | null,
    ratings?: Array< string | null > | null,
    description?: string | null,
    media?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateIncidentReportSubscriptionVariables = {
  filter?: ModelSubscriptionIncidentReportFilterInput | null,
  owner?: string | null,
};

export type OnCreateIncidentReportSubscription = {
  onCreateIncidentReport?:  {
    __typename: "IncidentReport",
    id: string,
    report_type?: string | null,
    coordinates?: string | null,
    location?: string | null,
    datetime?: string | null,
    category?: Array< string | null > | null,
    description?: string | null,
    media?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateIncidentReportSubscriptionVariables = {
  filter?: ModelSubscriptionIncidentReportFilterInput | null,
  owner?: string | null,
};

export type OnUpdateIncidentReportSubscription = {
  onUpdateIncidentReport?:  {
    __typename: "IncidentReport",
    id: string,
    report_type?: string | null,
    coordinates?: string | null,
    location?: string | null,
    datetime?: string | null,
    category?: Array< string | null > | null,
    description?: string | null,
    media?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteIncidentReportSubscriptionVariables = {
  filter?: ModelSubscriptionIncidentReportFilterInput | null,
  owner?: string | null,
};

export type OnDeleteIncidentReportSubscription = {
  onDeleteIncidentReport?:  {
    __typename: "IncidentReport",
    id: string,
    report_type?: string | null,
    coordinates?: string | null,
    location?: string | null,
    datetime?: string | null,
    category?: Array< string | null > | null,
    description?: string | null,
    media?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMedicalRecordSubscriptionVariables = {
  filter?: ModelSubscriptionMedicalRecordFilterInput | null,
  owner?: string | null,
};

export type OnCreateMedicalRecordSubscription = {
  onCreateMedicalRecord?:  {
    __typename: "MedicalRecord",
    id: string,
    date_of_birth?: string | null,
    medical_condition?: string | null,
    medical_notes?: string | null,
    medications?: string | null,
    blood_type?: string | null,
    organ_donor?: string | null,
    weight?: string | null,
    height?: string | null,
    skin_color?: string | null,
    hair_color?: string | null,
    tattoo?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMedicalRecordSubscriptionVariables = {
  filter?: ModelSubscriptionMedicalRecordFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMedicalRecordSubscription = {
  onUpdateMedicalRecord?:  {
    __typename: "MedicalRecord",
    id: string,
    date_of_birth?: string | null,
    medical_condition?: string | null,
    medical_notes?: string | null,
    medications?: string | null,
    blood_type?: string | null,
    organ_donor?: string | null,
    weight?: string | null,
    height?: string | null,
    skin_color?: string | null,
    hair_color?: string | null,
    tattoo?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMedicalRecordSubscriptionVariables = {
  filter?: ModelSubscriptionMedicalRecordFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMedicalRecordSubscription = {
  onDeleteMedicalRecord?:  {
    __typename: "MedicalRecord",
    id: string,
    date_of_birth?: string | null,
    medical_condition?: string | null,
    medical_notes?: string | null,
    medications?: string | null,
    blood_type?: string | null,
    organ_donor?: string | null,
    weight?: string | null,
    height?: string | null,
    skin_color?: string | null,
    hair_color?: string | null,
    tattoo?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateEmergencyContactSubscriptionVariables = {
  filter?: ModelSubscriptionEmergencyContactFilterInput | null,
  owner?: string | null,
};

export type OnCreateEmergencyContactSubscription = {
  onCreateEmergencyContact?:  {
    __typename: "EmergencyContact",
    id: string,
    name?: string | null,
    phone_number?: string | null,
    status?: number | null,
    phone_number_id?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateEmergencyContactSubscriptionVariables = {
  filter?: ModelSubscriptionEmergencyContactFilterInput | null,
  owner?: string | null,
};

export type OnUpdateEmergencyContactSubscription = {
  onUpdateEmergencyContact?:  {
    __typename: "EmergencyContact",
    id: string,
    name?: string | null,
    phone_number?: string | null,
    status?: number | null,
    phone_number_id?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteEmergencyContactSubscriptionVariables = {
  filter?: ModelSubscriptionEmergencyContactFilterInput | null,
  owner?: string | null,
};

export type OnDeleteEmergencyContactSubscription = {
  onDeleteEmergencyContact?:  {
    __typename: "EmergencyContact",
    id: string,
    name?: string | null,
    phone_number?: string | null,
    status?: number | null,
    phone_number_id?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserVerificationSubscriptionVariables = {
  filter?: ModelSubscriptionUserVerificationFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserVerificationSubscription = {
  onCreateUserVerification?:  {
    __typename: "UserVerification",
    id: string,
    id_name?: string | null,
    id_mime_type?: string | null,
    id_key?: string | null,
    selfie_name?: string | null,
    selfie_mime_type?: string | null,
    selfie_key?: string | null,
    verified?: boolean | null,
    verify_status?: string | null,
    denied_reason?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserVerificationSubscriptionVariables = {
  filter?: ModelSubscriptionUserVerificationFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserVerificationSubscription = {
  onUpdateUserVerification?:  {
    __typename: "UserVerification",
    id: string,
    id_name?: string | null,
    id_mime_type?: string | null,
    id_key?: string | null,
    selfie_name?: string | null,
    selfie_mime_type?: string | null,
    selfie_key?: string | null,
    verified?: boolean | null,
    verify_status?: string | null,
    denied_reason?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserVerificationSubscriptionVariables = {
  filter?: ModelSubscriptionUserVerificationFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserVerificationSubscription = {
  onDeleteUserVerification?:  {
    __typename: "UserVerification",
    id: string,
    id_name?: string | null,
    id_mime_type?: string | null,
    id_key?: string | null,
    selfie_name?: string | null,
    selfie_mime_type?: string | null,
    selfie_key?: string | null,
    verified?: boolean | null,
    verify_status?: string | null,
    denied_reason?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSafeWordsSubscriptionVariables = {
  filter?: ModelSubscriptionSafeWordsFilterInput | null,
  owner?: string | null,
};

export type OnCreateSafeWordsSubscription = {
  onCreateSafeWords?:  {
    __typename: "SafeWords",
    id: string,
    safe_word?: string | null,
    enabled?: boolean | null,
    status?: number | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSafeWordsSubscriptionVariables = {
  filter?: ModelSubscriptionSafeWordsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSafeWordsSubscription = {
  onUpdateSafeWords?:  {
    __typename: "SafeWords",
    id: string,
    safe_word?: string | null,
    enabled?: boolean | null,
    status?: number | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSafeWordsSubscriptionVariables = {
  filter?: ModelSubscriptionSafeWordsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSafeWordsSubscription = {
  onDeleteSafeWords?:  {
    __typename: "SafeWords",
    id: string,
    safe_word?: string | null,
    enabled?: boolean | null,
    status?: number | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAccountSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionAccountSettingsFilterInput | null,
  owner?: string | null,
};

export type OnCreateAccountSettingsSubscription = {
  onCreateAccountSettings?:  {
    __typename: "AccountSettings",
    id: string,
    enableBiometricLogin?: boolean | null,
    enableFaceIdLogin?: boolean | null,
    faceIDKey?: string | null,
    enableSafeWords?: boolean | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAccountSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionAccountSettingsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAccountSettingsSubscription = {
  onUpdateAccountSettings?:  {
    __typename: "AccountSettings",
    id: string,
    enableBiometricLogin?: boolean | null,
    enableFaceIdLogin?: boolean | null,
    faceIDKey?: string | null,
    enableSafeWords?: boolean | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAccountSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionAccountSettingsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAccountSettingsSubscription = {
  onDeleteAccountSettings?:  {
    __typename: "AccountSettings",
    id: string,
    enableBiometricLogin?: boolean | null,
    enableFaceIdLogin?: boolean | null,
    faceIDKey?: string | null,
    enableSafeWords?: boolean | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAccountInvitesSubscriptionVariables = {
  filter?: ModelSubscriptionAccountInvitesFilterInput | null,
};

export type OnCreateAccountInvitesSubscription = {
  onCreateAccountInvites?:  {
    __typename: "AccountInvites",
    id: string,
    code?: InviteCodes | null,
    cognito_id?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAccountInvitesSubscriptionVariables = {
  filter?: ModelSubscriptionAccountInvitesFilterInput | null,
};

export type OnUpdateAccountInvitesSubscription = {
  onUpdateAccountInvites?:  {
    __typename: "AccountInvites",
    id: string,
    code?: InviteCodes | null,
    cognito_id?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAccountInvitesSubscriptionVariables = {
  filter?: ModelSubscriptionAccountInvitesFilterInput | null,
};

export type OnDeleteAccountInvitesSubscription = {
  onDeleteAccountInvites?:  {
    __typename: "AccountInvites",
    id: string,
    code?: InviteCodes | null,
    cognito_id?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMobileAppOptionsSubscriptionVariables = {
  filter?: ModelSubscriptionMobileAppOptionsFilterInput | null,
};

export type OnCreateMobileAppOptionsSubscription = {
  onCreateMobileAppOptions?:  {
    __typename: "MobileAppOptions",
    requireVerifiedAccount?: boolean | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMobileAppOptionsSubscriptionVariables = {
  filter?: ModelSubscriptionMobileAppOptionsFilterInput | null,
};

export type OnUpdateMobileAppOptionsSubscription = {
  onUpdateMobileAppOptions?:  {
    __typename: "MobileAppOptions",
    requireVerifiedAccount?: boolean | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMobileAppOptionsSubscriptionVariables = {
  filter?: ModelSubscriptionMobileAppOptionsFilterInput | null,
};

export type OnDeleteMobileAppOptionsSubscription = {
  onDeleteMobileAppOptions?:  {
    __typename: "MobileAppOptions",
    requireVerifiedAccount?: boolean | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSignupStageSubscriptionVariables = {
  filter?: ModelSubscriptionSignupStageFilterInput | null,
  owner?: string | null,
};

export type OnCreateSignupStageSubscription = {
  onCreateSignupStage?:  {
    __typename: "SignupStage",
    id: string,
    step?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSignupStageSubscriptionVariables = {
  filter?: ModelSubscriptionSignupStageFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSignupStageSubscription = {
  onUpdateSignupStage?:  {
    __typename: "SignupStage",
    id: string,
    step?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSignupStageSubscriptionVariables = {
  filter?: ModelSubscriptionSignupStageFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSignupStageSubscription = {
  onDeleteSignupStage?:  {
    __typename: "SignupStage",
    id: string,
    step?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
