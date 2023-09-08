/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMedicalRecord = /* GraphQL */ `
  query GetMedicalRecord($id: ID!) {
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
export const listMedicalRecords = /* GraphQL */ `
  query ListMedicalRecords(
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMedicalRecords = /* GraphQL */ `
  query SyncMedicalRecords(
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getEmergencyContact = /* GraphQL */ `
  query GetEmergencyContact($id: ID!) {
    getEmergencyContact(id: $id) {
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
export const listEmergencyContacts = /* GraphQL */ `
  query ListEmergencyContacts(
    $filter: ModelEmergencyContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmergencyContacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncEmergencyContacts = /* GraphQL */ `
  query SyncEmergencyContacts(
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
