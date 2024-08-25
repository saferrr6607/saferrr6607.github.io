/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getNotification = /* GraphQL */ `query GetNotification($id: ID!) {
  getNotification(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetNotificationQueryVariables,
  APITypes.GetNotificationQuery
>;
export const listNotifications = /* GraphQL */ `query ListNotifications(
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNotificationsQueryVariables,
  APITypes.ListNotificationsQuery
>;
export const syncNotifications = /* GraphQL */ `query SyncNotifications(
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncNotifications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncNotificationsQueryVariables,
  APITypes.SyncNotificationsQuery
>;
export const getLocationReport = /* GraphQL */ `query GetLocationReport($id: ID!) {
  getLocationReport(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLocationReportQueryVariables,
  APITypes.GetLocationReportQuery
>;
export const listLocationReports = /* GraphQL */ `query ListLocationReports(
  $filter: ModelLocationReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocationReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLocationReportsQueryVariables,
  APITypes.ListLocationReportsQuery
>;
export const syncLocationReports = /* GraphQL */ `query SyncLocationReports(
  $filter: ModelLocationReportFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncLocationReports(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncLocationReportsQueryVariables,
  APITypes.SyncLocationReportsQuery
>;
export const getIncidentReport = /* GraphQL */ `query GetIncidentReport($id: ID!) {
  getIncidentReport(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetIncidentReportQueryVariables,
  APITypes.GetIncidentReportQuery
>;
export const listIncidentReports = /* GraphQL */ `query ListIncidentReports(
  $filter: ModelIncidentReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listIncidentReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIncidentReportsQueryVariables,
  APITypes.ListIncidentReportsQuery
>;
export const syncIncidentReports = /* GraphQL */ `query SyncIncidentReports(
  $filter: ModelIncidentReportFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncIncidentReports(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncIncidentReportsQueryVariables,
  APITypes.SyncIncidentReportsQuery
>;
export const getMedicalRecord = /* GraphQL */ `query GetMedicalRecord($id: ID!) {
  getMedicalRecord(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMedicalRecordQueryVariables,
  APITypes.GetMedicalRecordQuery
>;
export const listMedicalRecords = /* GraphQL */ `query ListMedicalRecords(
  $filter: ModelMedicalRecordFilterInput
  $limit: Int
  $nextToken: String
) {
  listMedicalRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMedicalRecordsQueryVariables,
  APITypes.ListMedicalRecordsQuery
>;
export const syncMedicalRecords = /* GraphQL */ `query SyncMedicalRecords(
  $filter: ModelMedicalRecordFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncMedicalRecords(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncMedicalRecordsQueryVariables,
  APITypes.SyncMedicalRecordsQuery
>;
export const getEmergencyContact = /* GraphQL */ `query GetEmergencyContact($id: ID!) {
  getEmergencyContact(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetEmergencyContactQueryVariables,
  APITypes.GetEmergencyContactQuery
>;
export const listEmergencyContacts = /* GraphQL */ `query ListEmergencyContacts(
  $filter: ModelEmergencyContactFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmergencyContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEmergencyContactsQueryVariables,
  APITypes.ListEmergencyContactsQuery
>;
export const syncEmergencyContacts = /* GraphQL */ `query SyncEmergencyContacts(
  $filter: ModelEmergencyContactFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncEmergencyContacts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncEmergencyContactsQueryVariables,
  APITypes.SyncEmergencyContactsQuery
>;
export const getUserVerification = /* GraphQL */ `query GetUserVerification($id: ID!) {
  getUserVerification(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserVerificationQueryVariables,
  APITypes.GetUserVerificationQuery
>;
export const listUserVerifications = /* GraphQL */ `query ListUserVerifications(
  $filter: ModelUserVerificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserVerifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserVerificationsQueryVariables,
  APITypes.ListUserVerificationsQuery
>;
export const syncUserVerifications = /* GraphQL */ `query SyncUserVerifications(
  $filter: ModelUserVerificationFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUserVerifications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUserVerificationsQueryVariables,
  APITypes.SyncUserVerificationsQuery
>;
export const getSafeWords = /* GraphQL */ `query GetSafeWords($id: ID!) {
  getSafeWords(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSafeWordsQueryVariables,
  APITypes.GetSafeWordsQuery
>;
export const listSafeWords = /* GraphQL */ `query ListSafeWords(
  $filter: ModelSafeWordsFilterInput
  $limit: Int
  $nextToken: String
) {
  listSafeWords(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSafeWordsQueryVariables,
  APITypes.ListSafeWordsQuery
>;
export const syncSafeWords = /* GraphQL */ `query SyncSafeWords(
  $filter: ModelSafeWordsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncSafeWords(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncSafeWordsQueryVariables,
  APITypes.SyncSafeWordsQuery
>;
export const getAccountSettings = /* GraphQL */ `query GetAccountSettings($id: ID!) {
  getAccountSettings(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAccountSettingsQueryVariables,
  APITypes.GetAccountSettingsQuery
>;
export const listAccountSettings = /* GraphQL */ `query ListAccountSettings(
  $filter: ModelAccountSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listAccountSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAccountSettingsQueryVariables,
  APITypes.ListAccountSettingsQuery
>;
export const syncAccountSettings = /* GraphQL */ `query SyncAccountSettings(
  $filter: ModelAccountSettingsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncAccountSettings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncAccountSettingsQueryVariables,
  APITypes.SyncAccountSettingsQuery
>;
export const getAccountInvites = /* GraphQL */ `query GetAccountInvites($id: ID!) {
  getAccountInvites(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAccountInvitesQueryVariables,
  APITypes.GetAccountInvitesQuery
>;
export const listAccountInvites = /* GraphQL */ `query ListAccountInvites(
  $filter: ModelAccountInvitesFilterInput
  $limit: Int
  $nextToken: String
) {
  listAccountInvites(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAccountInvitesQueryVariables,
  APITypes.ListAccountInvitesQuery
>;
export const syncAccountInvites = /* GraphQL */ `query SyncAccountInvites(
  $filter: ModelAccountInvitesFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncAccountInvites(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncAccountInvitesQueryVariables,
  APITypes.SyncAccountInvitesQuery
>;
export const getMobileAppOptions = /* GraphQL */ `query GetMobileAppOptions($id: ID!) {
  getMobileAppOptions(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMobileAppOptionsQueryVariables,
  APITypes.GetMobileAppOptionsQuery
>;
export const listMobileAppOptions = /* GraphQL */ `query ListMobileAppOptions(
  $filter: ModelMobileAppOptionsFilterInput
  $limit: Int
  $nextToken: String
) {
  listMobileAppOptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      requireVerifiedAccount
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMobileAppOptionsQueryVariables,
  APITypes.ListMobileAppOptionsQuery
>;
export const syncMobileAppOptions = /* GraphQL */ `query SyncMobileAppOptions(
  $filter: ModelMobileAppOptionsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncMobileAppOptions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      requireVerifiedAccount
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncMobileAppOptionsQueryVariables,
  APITypes.SyncMobileAppOptionsQuery
>;
export const getSignupStage = /* GraphQL */ `query GetSignupStage($id: ID!) {
  getSignupStage(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSignupStageQueryVariables,
  APITypes.GetSignupStageQuery
>;
export const listSignupStages = /* GraphQL */ `query ListSignupStages(
  $filter: ModelSignupStageFilterInput
  $limit: Int
  $nextToken: String
) {
  listSignupStages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSignupStagesQueryVariables,
  APITypes.ListSignupStagesQuery
>;
export const syncSignupStages = /* GraphQL */ `query SyncSignupStages(
  $filter: ModelSignupStageFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncSignupStages(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncSignupStagesQueryVariables,
  APITypes.SyncSignupStagesQuery
>;
