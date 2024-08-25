/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateNotification = /* GraphQL */ `subscription OnCreateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
  $owner: String
) {
  onCreateNotification(filter: $filter, owner: $owner) {
    id
    title
    description
    timestamp
    metadata
    type
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateNotificationSubscriptionVariables,
  APITypes.OnCreateNotificationSubscription
>;
export const onUpdateNotification = /* GraphQL */ `subscription OnUpdateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
  $owner: String
) {
  onUpdateNotification(filter: $filter, owner: $owner) {
    id
    title
    description
    timestamp
    metadata
    type
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateNotificationSubscriptionVariables,
  APITypes.OnUpdateNotificationSubscription
>;
export const onDeleteNotification = /* GraphQL */ `subscription OnDeleteNotification(
  $filter: ModelSubscriptionNotificationFilterInput
  $owner: String
) {
  onDeleteNotification(filter: $filter, owner: $owner) {
    id
    title
    description
    timestamp
    metadata
    type
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteNotificationSubscriptionVariables,
  APITypes.OnDeleteNotificationSubscription
>;
export const onCreateLocationReport = /* GraphQL */ `subscription OnCreateLocationReport(
  $filter: ModelSubscriptionLocationReportFilterInput
  $owner: String
) {
  onCreateLocationReport(filter: $filter, owner: $owner) {
    id
    report_type
    coordinates
    location
    datetime
    ratings
    description
    media
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLocationReportSubscriptionVariables,
  APITypes.OnCreateLocationReportSubscription
>;
export const onUpdateLocationReport = /* GraphQL */ `subscription OnUpdateLocationReport(
  $filter: ModelSubscriptionLocationReportFilterInput
  $owner: String
) {
  onUpdateLocationReport(filter: $filter, owner: $owner) {
    id
    report_type
    coordinates
    location
    datetime
    ratings
    description
    media
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLocationReportSubscriptionVariables,
  APITypes.OnUpdateLocationReportSubscription
>;
export const onDeleteLocationReport = /* GraphQL */ `subscription OnDeleteLocationReport(
  $filter: ModelSubscriptionLocationReportFilterInput
  $owner: String
) {
  onDeleteLocationReport(filter: $filter, owner: $owner) {
    id
    report_type
    coordinates
    location
    datetime
    ratings
    description
    media
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLocationReportSubscriptionVariables,
  APITypes.OnDeleteLocationReportSubscription
>;
export const onCreateIncidentReport = /* GraphQL */ `subscription OnCreateIncidentReport(
  $filter: ModelSubscriptionIncidentReportFilterInput
  $owner: String
) {
  onCreateIncidentReport(filter: $filter, owner: $owner) {
    id
    report_type
    coordinates
    location
    datetime
    category
    description
    media
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateIncidentReportSubscriptionVariables,
  APITypes.OnCreateIncidentReportSubscription
>;
export const onUpdateIncidentReport = /* GraphQL */ `subscription OnUpdateIncidentReport(
  $filter: ModelSubscriptionIncidentReportFilterInput
  $owner: String
) {
  onUpdateIncidentReport(filter: $filter, owner: $owner) {
    id
    report_type
    coordinates
    location
    datetime
    category
    description
    media
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateIncidentReportSubscriptionVariables,
  APITypes.OnUpdateIncidentReportSubscription
>;
export const onDeleteIncidentReport = /* GraphQL */ `subscription OnDeleteIncidentReport(
  $filter: ModelSubscriptionIncidentReportFilterInput
  $owner: String
) {
  onDeleteIncidentReport(filter: $filter, owner: $owner) {
    id
    report_type
    coordinates
    location
    datetime
    category
    description
    media
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteIncidentReportSubscriptionVariables,
  APITypes.OnDeleteIncidentReportSubscription
>;
export const onCreateMedicalRecord = /* GraphQL */ `subscription OnCreateMedicalRecord(
  $filter: ModelSubscriptionMedicalRecordFilterInput
  $owner: String
) {
  onCreateMedicalRecord(filter: $filter, owner: $owner) {
    id
    date_of_birth
    medical_condition
    medical_notes
    medications
    blood_type
    organ_donor
    weight
    height
    skin_color
    hair_color
    tattoo
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMedicalRecordSubscriptionVariables,
  APITypes.OnCreateMedicalRecordSubscription
>;
export const onUpdateMedicalRecord = /* GraphQL */ `subscription OnUpdateMedicalRecord(
  $filter: ModelSubscriptionMedicalRecordFilterInput
  $owner: String
) {
  onUpdateMedicalRecord(filter: $filter, owner: $owner) {
    id
    date_of_birth
    medical_condition
    medical_notes
    medications
    blood_type
    organ_donor
    weight
    height
    skin_color
    hair_color
    tattoo
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMedicalRecordSubscriptionVariables,
  APITypes.OnUpdateMedicalRecordSubscription
>;
export const onDeleteMedicalRecord = /* GraphQL */ `subscription OnDeleteMedicalRecord(
  $filter: ModelSubscriptionMedicalRecordFilterInput
  $owner: String
) {
  onDeleteMedicalRecord(filter: $filter, owner: $owner) {
    id
    date_of_birth
    medical_condition
    medical_notes
    medications
    blood_type
    organ_donor
    weight
    height
    skin_color
    hair_color
    tattoo
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMedicalRecordSubscriptionVariables,
  APITypes.OnDeleteMedicalRecordSubscription
>;
export const onCreateEmergencyContact = /* GraphQL */ `subscription OnCreateEmergencyContact(
  $filter: ModelSubscriptionEmergencyContactFilterInput
  $owner: String
) {
  onCreateEmergencyContact(filter: $filter, owner: $owner) {
    id
    name
    phone_number
    status
    phone_number_id
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEmergencyContactSubscriptionVariables,
  APITypes.OnCreateEmergencyContactSubscription
>;
export const onUpdateEmergencyContact = /* GraphQL */ `subscription OnUpdateEmergencyContact(
  $filter: ModelSubscriptionEmergencyContactFilterInput
  $owner: String
) {
  onUpdateEmergencyContact(filter: $filter, owner: $owner) {
    id
    name
    phone_number
    status
    phone_number_id
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEmergencyContactSubscriptionVariables,
  APITypes.OnUpdateEmergencyContactSubscription
>;
export const onDeleteEmergencyContact = /* GraphQL */ `subscription OnDeleteEmergencyContact(
  $filter: ModelSubscriptionEmergencyContactFilterInput
  $owner: String
) {
  onDeleteEmergencyContact(filter: $filter, owner: $owner) {
    id
    name
    phone_number
    status
    phone_number_id
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEmergencyContactSubscriptionVariables,
  APITypes.OnDeleteEmergencyContactSubscription
>;
export const onCreateUserVerification = /* GraphQL */ `subscription OnCreateUserVerification(
  $filter: ModelSubscriptionUserVerificationFilterInput
  $owner: String
) {
  onCreateUserVerification(filter: $filter, owner: $owner) {
    id
    id_name
    id_mime_type
    id_key
    selfie_name
    selfie_mime_type
    selfie_key
    verified
    verify_status
    denied_reason
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserVerificationSubscriptionVariables,
  APITypes.OnCreateUserVerificationSubscription
>;
export const onUpdateUserVerification = /* GraphQL */ `subscription OnUpdateUserVerification(
  $filter: ModelSubscriptionUserVerificationFilterInput
  $owner: String
) {
  onUpdateUserVerification(filter: $filter, owner: $owner) {
    id
    id_name
    id_mime_type
    id_key
    selfie_name
    selfie_mime_type
    selfie_key
    verified
    verify_status
    denied_reason
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserVerificationSubscriptionVariables,
  APITypes.OnUpdateUserVerificationSubscription
>;
export const onDeleteUserVerification = /* GraphQL */ `subscription OnDeleteUserVerification(
  $filter: ModelSubscriptionUserVerificationFilterInput
  $owner: String
) {
  onDeleteUserVerification(filter: $filter, owner: $owner) {
    id
    id_name
    id_mime_type
    id_key
    selfie_name
    selfie_mime_type
    selfie_key
    verified
    verify_status
    denied_reason
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserVerificationSubscriptionVariables,
  APITypes.OnDeleteUserVerificationSubscription
>;
export const onCreateSafeWords = /* GraphQL */ `subscription OnCreateSafeWords(
  $filter: ModelSubscriptionSafeWordsFilterInput
  $owner: String
) {
  onCreateSafeWords(filter: $filter, owner: $owner) {
    id
    safe_word
    enabled
    status
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSafeWordsSubscriptionVariables,
  APITypes.OnCreateSafeWordsSubscription
>;
export const onUpdateSafeWords = /* GraphQL */ `subscription OnUpdateSafeWords(
  $filter: ModelSubscriptionSafeWordsFilterInput
  $owner: String
) {
  onUpdateSafeWords(filter: $filter, owner: $owner) {
    id
    safe_word
    enabled
    status
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSafeWordsSubscriptionVariables,
  APITypes.OnUpdateSafeWordsSubscription
>;
export const onDeleteSafeWords = /* GraphQL */ `subscription OnDeleteSafeWords(
  $filter: ModelSubscriptionSafeWordsFilterInput
  $owner: String
) {
  onDeleteSafeWords(filter: $filter, owner: $owner) {
    id
    safe_word
    enabled
    status
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSafeWordsSubscriptionVariables,
  APITypes.OnDeleteSafeWordsSubscription
>;
export const onCreateAccountSettings = /* GraphQL */ `subscription OnCreateAccountSettings(
  $filter: ModelSubscriptionAccountSettingsFilterInput
  $owner: String
) {
  onCreateAccountSettings(filter: $filter, owner: $owner) {
    id
    enableBiometricLogin
    enableFaceIdLogin
    faceIDKey
    enableSafeWords
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAccountSettingsSubscriptionVariables,
  APITypes.OnCreateAccountSettingsSubscription
>;
export const onUpdateAccountSettings = /* GraphQL */ `subscription OnUpdateAccountSettings(
  $filter: ModelSubscriptionAccountSettingsFilterInput
  $owner: String
) {
  onUpdateAccountSettings(filter: $filter, owner: $owner) {
    id
    enableBiometricLogin
    enableFaceIdLogin
    faceIDKey
    enableSafeWords
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAccountSettingsSubscriptionVariables,
  APITypes.OnUpdateAccountSettingsSubscription
>;
export const onDeleteAccountSettings = /* GraphQL */ `subscription OnDeleteAccountSettings(
  $filter: ModelSubscriptionAccountSettingsFilterInput
  $owner: String
) {
  onDeleteAccountSettings(filter: $filter, owner: $owner) {
    id
    enableBiometricLogin
    enableFaceIdLogin
    faceIDKey
    enableSafeWords
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAccountSettingsSubscriptionVariables,
  APITypes.OnDeleteAccountSettingsSubscription
>;
export const onCreateAccountInvites = /* GraphQL */ `subscription OnCreateAccountInvites(
  $filter: ModelSubscriptionAccountInvitesFilterInput
) {
  onCreateAccountInvites(filter: $filter) {
    id
    code
    cognito_id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAccountInvitesSubscriptionVariables,
  APITypes.OnCreateAccountInvitesSubscription
>;
export const onUpdateAccountInvites = /* GraphQL */ `subscription OnUpdateAccountInvites(
  $filter: ModelSubscriptionAccountInvitesFilterInput
) {
  onUpdateAccountInvites(filter: $filter) {
    id
    code
    cognito_id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAccountInvitesSubscriptionVariables,
  APITypes.OnUpdateAccountInvitesSubscription
>;
export const onDeleteAccountInvites = /* GraphQL */ `subscription OnDeleteAccountInvites(
  $filter: ModelSubscriptionAccountInvitesFilterInput
) {
  onDeleteAccountInvites(filter: $filter) {
    id
    code
    cognito_id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAccountInvitesSubscriptionVariables,
  APITypes.OnDeleteAccountInvitesSubscription
>;
export const onCreateMobileAppOptions = /* GraphQL */ `subscription OnCreateMobileAppOptions(
  $filter: ModelSubscriptionMobileAppOptionsFilterInput
) {
  onCreateMobileAppOptions(filter: $filter) {
    requireVerifiedAccount
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMobileAppOptionsSubscriptionVariables,
  APITypes.OnCreateMobileAppOptionsSubscription
>;
export const onUpdateMobileAppOptions = /* GraphQL */ `subscription OnUpdateMobileAppOptions(
  $filter: ModelSubscriptionMobileAppOptionsFilterInput
) {
  onUpdateMobileAppOptions(filter: $filter) {
    requireVerifiedAccount
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMobileAppOptionsSubscriptionVariables,
  APITypes.OnUpdateMobileAppOptionsSubscription
>;
export const onDeleteMobileAppOptions = /* GraphQL */ `subscription OnDeleteMobileAppOptions(
  $filter: ModelSubscriptionMobileAppOptionsFilterInput
) {
  onDeleteMobileAppOptions(filter: $filter) {
    requireVerifiedAccount
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMobileAppOptionsSubscriptionVariables,
  APITypes.OnDeleteMobileAppOptionsSubscription
>;
export const onCreateSignupStage = /* GraphQL */ `subscription OnCreateSignupStage(
  $filter: ModelSubscriptionSignupStageFilterInput
  $owner: String
) {
  onCreateSignupStage(filter: $filter, owner: $owner) {
    id
    step
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSignupStageSubscriptionVariables,
  APITypes.OnCreateSignupStageSubscription
>;
export const onUpdateSignupStage = /* GraphQL */ `subscription OnUpdateSignupStage(
  $filter: ModelSubscriptionSignupStageFilterInput
  $owner: String
) {
  onUpdateSignupStage(filter: $filter, owner: $owner) {
    id
    step
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSignupStageSubscriptionVariables,
  APITypes.OnUpdateSignupStageSubscription
>;
export const onDeleteSignupStage = /* GraphQL */ `subscription OnDeleteSignupStage(
  $filter: ModelSubscriptionSignupStageFilterInput
  $owner: String
) {
  onDeleteSignupStage(filter: $filter, owner: $owner) {
    id
    step
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSignupStageSubscriptionVariables,
  APITypes.OnDeleteSignupStageSubscription
>;
