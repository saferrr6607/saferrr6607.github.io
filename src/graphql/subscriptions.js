/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
