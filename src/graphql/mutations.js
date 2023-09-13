/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLocationReport = /* GraphQL */ `
  mutation CreateLocationReport(
    $input: CreateLocationReportInput!
    $condition: ModelLocationReportConditionInput
  ) {
    createLocationReport(input: $input, condition: $condition) {
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
export const updateLocationReport = /* GraphQL */ `
  mutation UpdateLocationReport(
    $input: UpdateLocationReportInput!
    $condition: ModelLocationReportConditionInput
  ) {
    updateLocationReport(input: $input, condition: $condition) {
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
export const deleteLocationReport = /* GraphQL */ `
  mutation DeleteLocationReport(
    $input: DeleteLocationReportInput!
    $condition: ModelLocationReportConditionInput
  ) {
    deleteLocationReport(input: $input, condition: $condition) {
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
export const createIncidentReport = /* GraphQL */ `
  mutation CreateIncidentReport(
    $input: CreateIncidentReportInput!
    $condition: ModelIncidentReportConditionInput
  ) {
    createIncidentReport(input: $input, condition: $condition) {
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
export const updateIncidentReport = /* GraphQL */ `
  mutation UpdateIncidentReport(
    $input: UpdateIncidentReportInput!
    $condition: ModelIncidentReportConditionInput
  ) {
    updateIncidentReport(input: $input, condition: $condition) {
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
export const deleteIncidentReport = /* GraphQL */ `
  mutation DeleteIncidentReport(
    $input: DeleteIncidentReportInput!
    $condition: ModelIncidentReportConditionInput
  ) {
    deleteIncidentReport(input: $input, condition: $condition) {
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
export const createMedicalRecord = /* GraphQL */ `
  mutation CreateMedicalRecord(
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
export const updateMedicalRecord = /* GraphQL */ `
  mutation UpdateMedicalRecord(
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
export const deleteMedicalRecord = /* GraphQL */ `
  mutation DeleteMedicalRecord(
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
export const createEmergencyContact = /* GraphQL */ `
  mutation CreateEmergencyContact(
    $input: CreateEmergencyContactInput!
    $condition: ModelEmergencyContactConditionInput
  ) {
    createEmergencyContact(input: $input, condition: $condition) {
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
export const updateEmergencyContact = /* GraphQL */ `
  mutation UpdateEmergencyContact(
    $input: UpdateEmergencyContactInput!
    $condition: ModelEmergencyContactConditionInput
  ) {
    updateEmergencyContact(input: $input, condition: $condition) {
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
export const deleteEmergencyContact = /* GraphQL */ `
  mutation DeleteEmergencyContact(
    $input: DeleteEmergencyContactInput!
    $condition: ModelEmergencyContactConditionInput
  ) {
    deleteEmergencyContact(input: $input, condition: $condition) {
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
export const createUserVerification = /* GraphQL */ `
  mutation CreateUserVerification(
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
export const updateUserVerification = /* GraphQL */ `
  mutation UpdateUserVerification(
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
export const deleteUserVerification = /* GraphQL */ `
  mutation DeleteUserVerification(
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
