/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createNotification = /* GraphQL */ `mutation CreateNotification(
  $input: CreateNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  createNotification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateNotificationMutationVariables,
  APITypes.CreateNotificationMutation
>;
export const updateNotification = /* GraphQL */ `mutation UpdateNotification(
  $input: UpdateNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  updateNotification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateNotificationMutationVariables,
  APITypes.UpdateNotificationMutation
>;
export const deleteNotification = /* GraphQL */ `mutation DeleteNotification(
  $input: DeleteNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  deleteNotification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteNotificationMutationVariables,
  APITypes.DeleteNotificationMutation
>;
export const createLocationReport = /* GraphQL */ `mutation CreateLocationReport(
  $input: CreateLocationReportInput!
  $condition: ModelLocationReportConditionInput
) {
  createLocationReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLocationReportMutationVariables,
  APITypes.CreateLocationReportMutation
>;
export const updateLocationReport = /* GraphQL */ `mutation UpdateLocationReport(
  $input: UpdateLocationReportInput!
  $condition: ModelLocationReportConditionInput
) {
  updateLocationReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLocationReportMutationVariables,
  APITypes.UpdateLocationReportMutation
>;
export const deleteLocationReport = /* GraphQL */ `mutation DeleteLocationReport(
  $input: DeleteLocationReportInput!
  $condition: ModelLocationReportConditionInput
) {
  deleteLocationReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLocationReportMutationVariables,
  APITypes.DeleteLocationReportMutation
>;
export const createIncidentReport = /* GraphQL */ `mutation CreateIncidentReport(
  $input: CreateIncidentReportInput!
  $condition: ModelIncidentReportConditionInput
) {
  createIncidentReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateIncidentReportMutationVariables,
  APITypes.CreateIncidentReportMutation
>;
export const updateIncidentReport = /* GraphQL */ `mutation UpdateIncidentReport(
  $input: UpdateIncidentReportInput!
  $condition: ModelIncidentReportConditionInput
) {
  updateIncidentReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateIncidentReportMutationVariables,
  APITypes.UpdateIncidentReportMutation
>;
export const deleteIncidentReport = /* GraphQL */ `mutation DeleteIncidentReport(
  $input: DeleteIncidentReportInput!
  $condition: ModelIncidentReportConditionInput
) {
  deleteIncidentReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteIncidentReportMutationVariables,
  APITypes.DeleteIncidentReportMutation
>;
export const createMedicalRecord = /* GraphQL */ `mutation CreateMedicalRecord(
  $input: CreateMedicalRecordInput!
  $condition: ModelMedicalRecordConditionInput
) {
  createMedicalRecord(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMedicalRecordMutationVariables,
  APITypes.CreateMedicalRecordMutation
>;
export const updateMedicalRecord = /* GraphQL */ `mutation UpdateMedicalRecord(
  $input: UpdateMedicalRecordInput!
  $condition: ModelMedicalRecordConditionInput
) {
  updateMedicalRecord(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMedicalRecordMutationVariables,
  APITypes.UpdateMedicalRecordMutation
>;
export const deleteMedicalRecord = /* GraphQL */ `mutation DeleteMedicalRecord(
  $input: DeleteMedicalRecordInput!
  $condition: ModelMedicalRecordConditionInput
) {
  deleteMedicalRecord(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMedicalRecordMutationVariables,
  APITypes.DeleteMedicalRecordMutation
>;
export const createEmergencyContact = /* GraphQL */ `mutation CreateEmergencyContact(
  $input: CreateEmergencyContactInput!
  $condition: ModelEmergencyContactConditionInput
) {
  createEmergencyContact(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateEmergencyContactMutationVariables,
  APITypes.CreateEmergencyContactMutation
>;
export const updateEmergencyContact = /* GraphQL */ `mutation UpdateEmergencyContact(
  $input: UpdateEmergencyContactInput!
  $condition: ModelEmergencyContactConditionInput
) {
  updateEmergencyContact(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateEmergencyContactMutationVariables,
  APITypes.UpdateEmergencyContactMutation
>;
export const deleteEmergencyContact = /* GraphQL */ `mutation DeleteEmergencyContact(
  $input: DeleteEmergencyContactInput!
  $condition: ModelEmergencyContactConditionInput
) {
  deleteEmergencyContact(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteEmergencyContactMutationVariables,
  APITypes.DeleteEmergencyContactMutation
>;
export const createUserVerification = /* GraphQL */ `mutation CreateUserVerification(
  $input: CreateUserVerificationInput!
  $condition: ModelUserVerificationConditionInput
) {
  createUserVerification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserVerificationMutationVariables,
  APITypes.CreateUserVerificationMutation
>;
export const updateUserVerification = /* GraphQL */ `mutation UpdateUserVerification(
  $input: UpdateUserVerificationInput!
  $condition: ModelUserVerificationConditionInput
) {
  updateUserVerification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserVerificationMutationVariables,
  APITypes.UpdateUserVerificationMutation
>;
export const deleteUserVerification = /* GraphQL */ `mutation DeleteUserVerification(
  $input: DeleteUserVerificationInput!
  $condition: ModelUserVerificationConditionInput
) {
  deleteUserVerification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserVerificationMutationVariables,
  APITypes.DeleteUserVerificationMutation
>;
export const createSafeWords = /* GraphQL */ `mutation CreateSafeWords(
  $input: CreateSafeWordsInput!
  $condition: ModelSafeWordsConditionInput
) {
  createSafeWords(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSafeWordsMutationVariables,
  APITypes.CreateSafeWordsMutation
>;
export const updateSafeWords = /* GraphQL */ `mutation UpdateSafeWords(
  $input: UpdateSafeWordsInput!
  $condition: ModelSafeWordsConditionInput
) {
  updateSafeWords(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSafeWordsMutationVariables,
  APITypes.UpdateSafeWordsMutation
>;
export const deleteSafeWords = /* GraphQL */ `mutation DeleteSafeWords(
  $input: DeleteSafeWordsInput!
  $condition: ModelSafeWordsConditionInput
) {
  deleteSafeWords(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSafeWordsMutationVariables,
  APITypes.DeleteSafeWordsMutation
>;
export const createAccountSettings = /* GraphQL */ `mutation CreateAccountSettings(
  $input: CreateAccountSettingsInput!
  $condition: ModelAccountSettingsConditionInput
) {
  createAccountSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAccountSettingsMutationVariables,
  APITypes.CreateAccountSettingsMutation
>;
export const updateAccountSettings = /* GraphQL */ `mutation UpdateAccountSettings(
  $input: UpdateAccountSettingsInput!
  $condition: ModelAccountSettingsConditionInput
) {
  updateAccountSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAccountSettingsMutationVariables,
  APITypes.UpdateAccountSettingsMutation
>;
export const deleteAccountSettings = /* GraphQL */ `mutation DeleteAccountSettings(
  $input: DeleteAccountSettingsInput!
  $condition: ModelAccountSettingsConditionInput
) {
  deleteAccountSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAccountSettingsMutationVariables,
  APITypes.DeleteAccountSettingsMutation
>;
export const createAccountInvites = /* GraphQL */ `mutation CreateAccountInvites(
  $input: CreateAccountInvitesInput!
  $condition: ModelAccountInvitesConditionInput
) {
  createAccountInvites(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAccountInvitesMutationVariables,
  APITypes.CreateAccountInvitesMutation
>;
export const updateAccountInvites = /* GraphQL */ `mutation UpdateAccountInvites(
  $input: UpdateAccountInvitesInput!
  $condition: ModelAccountInvitesConditionInput
) {
  updateAccountInvites(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAccountInvitesMutationVariables,
  APITypes.UpdateAccountInvitesMutation
>;
export const deleteAccountInvites = /* GraphQL */ `mutation DeleteAccountInvites(
  $input: DeleteAccountInvitesInput!
  $condition: ModelAccountInvitesConditionInput
) {
  deleteAccountInvites(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAccountInvitesMutationVariables,
  APITypes.DeleteAccountInvitesMutation
>;
export const createMobileAppOptions = /* GraphQL */ `mutation CreateMobileAppOptions(
  $input: CreateMobileAppOptionsInput!
  $condition: ModelMobileAppOptionsConditionInput
) {
  createMobileAppOptions(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMobileAppOptionsMutationVariables,
  APITypes.CreateMobileAppOptionsMutation
>;
export const updateMobileAppOptions = /* GraphQL */ `mutation UpdateMobileAppOptions(
  $input: UpdateMobileAppOptionsInput!
  $condition: ModelMobileAppOptionsConditionInput
) {
  updateMobileAppOptions(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMobileAppOptionsMutationVariables,
  APITypes.UpdateMobileAppOptionsMutation
>;
export const deleteMobileAppOptions = /* GraphQL */ `mutation DeleteMobileAppOptions(
  $input: DeleteMobileAppOptionsInput!
  $condition: ModelMobileAppOptionsConditionInput
) {
  deleteMobileAppOptions(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMobileAppOptionsMutationVariables,
  APITypes.DeleteMobileAppOptionsMutation
>;
export const createSignupStage = /* GraphQL */ `mutation CreateSignupStage(
  $input: CreateSignupStageInput!
  $condition: ModelSignupStageConditionInput
) {
  createSignupStage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSignupStageMutationVariables,
  APITypes.CreateSignupStageMutation
>;
export const updateSignupStage = /* GraphQL */ `mutation UpdateSignupStage(
  $input: UpdateSignupStageInput!
  $condition: ModelSignupStageConditionInput
) {
  updateSignupStage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSignupStageMutationVariables,
  APITypes.UpdateSignupStageMutation
>;
export const deleteSignupStage = /* GraphQL */ `mutation DeleteSignupStage(
  $input: DeleteSignupStageInput!
  $condition: ModelSignupStageConditionInput
) {
  deleteSignupStage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSignupStageMutationVariables,
  APITypes.DeleteSignupStageMutation
>;
