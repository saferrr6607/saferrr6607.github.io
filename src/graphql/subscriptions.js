/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLocationReport = /* GraphQL */ `
  subscription OnCreateLocationReport(
    $filter: ModelSubscriptionLocationReportFilterInput
    $owner: String
  ) {
    onCreateLocationReport(filter: $filter, owner: $owner) {
      id
      coordinates
      location
      datetime
      ratings
      description
      media
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
      coordinates
      location
      datetime
      ratings
      description
      media
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
      coordinates
      location
      datetime
      ratings
      description
      media
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
      coordinates
      location
      datetime
      category
      description
      media
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
      coordinates
      location
      datetime
      category
      description
      media
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
      coordinates
      location
      datetime
      category
      description
      media
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
