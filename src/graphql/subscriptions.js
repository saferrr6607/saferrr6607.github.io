/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
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
`;
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
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
`;
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
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
`;
export const onCreateLocationReport = /* GraphQL */ `
  subscription OnCreateLocationReport(
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
`;
export const onUpdateLocationReport = /* GraphQL */ `
  subscription OnUpdateLocationReport(
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
`;
export const onDeleteLocationReport = /* GraphQL */ `
  subscription OnDeleteLocationReport(
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
`;
export const onCreateIncidentReport = /* GraphQL */ `
  subscription OnCreateIncidentReport(
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
`;
export const onUpdateIncidentReport = /* GraphQL */ `
  subscription OnUpdateIncidentReport(
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
`;
export const onDeleteIncidentReport = /* GraphQL */ `
  subscription OnDeleteIncidentReport(
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
`;
export const onCreateMedicalRecord = /* GraphQL */ `
  subscription OnCreateMedicalRecord(
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
`;
export const onUpdateMedicalRecord = /* GraphQL */ `
  subscription OnUpdateMedicalRecord(
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
`;
export const onDeleteMedicalRecord = /* GraphQL */ `
  subscription OnDeleteMedicalRecord(
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
`;
export const onCreateEmergencyContact = /* GraphQL */ `
  subscription OnCreateEmergencyContact(
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
`;
export const onUpdateEmergencyContact = /* GraphQL */ `
  subscription OnUpdateEmergencyContact(
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
`;
export const onDeleteEmergencyContact = /* GraphQL */ `
  subscription OnDeleteEmergencyContact(
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
`;
export const onCreateUserVerification = /* GraphQL */ `
  subscription OnCreateUserVerification(
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
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateUserVerification = /* GraphQL */ `
  subscription OnUpdateUserVerification(
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
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteUserVerification = /* GraphQL */ `
  subscription OnDeleteUserVerification(
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
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateSafeWords = /* GraphQL */ `
  subscription OnCreateSafeWords(
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
`;
export const onUpdateSafeWords = /* GraphQL */ `
  subscription OnUpdateSafeWords(
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
`;
export const onDeleteSafeWords = /* GraphQL */ `
  subscription OnDeleteSafeWords(
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
`;
export const onCreateAccountSettings = /* GraphQL */ `
  subscription OnCreateAccountSettings(
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
`;
export const onUpdateAccountSettings = /* GraphQL */ `
  subscription OnUpdateAccountSettings(
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
`;
export const onDeleteAccountSettings = /* GraphQL */ `
  subscription OnDeleteAccountSettings(
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
`;
export const onCreateAccountInvites = /* GraphQL */ `
  subscription OnCreateAccountInvites(
    $filter: ModelSubscriptionAccountInvitesFilterInput
    $owner: String
  ) {
    onCreateAccountInvites(filter: $filter, owner: $owner) {
      id
      code
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateAccountInvites = /* GraphQL */ `
  subscription OnUpdateAccountInvites(
    $filter: ModelSubscriptionAccountInvitesFilterInput
    $owner: String
  ) {
    onUpdateAccountInvites(filter: $filter, owner: $owner) {
      id
      code
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteAccountInvites = /* GraphQL */ `
  subscription OnDeleteAccountInvites(
    $filter: ModelSubscriptionAccountInvitesFilterInput
    $owner: String
  ) {
    onDeleteAccountInvites(filter: $filter, owner: $owner) {
      id
      code
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
