/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
