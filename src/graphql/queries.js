/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLocationReport = /* GraphQL */ `
  query GetLocationReport($id: ID!) {
    getLocationReport(id: $id) {
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
export const listLocationReports = /* GraphQL */ `
  query ListLocationReports(
    $filter: ModelLocationReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocationReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncLocationReports = /* GraphQL */ `
  query SyncLocationReports(
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getIncidentReport = /* GraphQL */ `
  query GetIncidentReport($id: ID!) {
    getIncidentReport(id: $id) {
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
export const listIncidentReports = /* GraphQL */ `
  query ListIncidentReports(
    $filter: ModelIncidentReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIncidentReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncIncidentReports = /* GraphQL */ `
  query SyncIncidentReports(
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
      nextToken
      startedAt
      __typename
    }
  }
`;
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
        phone_number_id
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
        phone_number_id
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
export const getUserVerification = /* GraphQL */ `
  query GetUserVerification($id: ID!) {
    getUserVerification(id: $id) {
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
export const listUserVerifications = /* GraphQL */ `
  query ListUserVerifications(
    $filter: ModelUserVerificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserVerifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUserVerifications = /* GraphQL */ `
  query SyncUserVerifications(
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
