type reducerActionType = {
    type: string,
    payload: any,
};

type AccountType = {
    first_name: string
    last_name: string
    email: string
    password: string
};

type AccountErrorType = {
    first_name: boolean | string
    last_name: boolean | string
    email: boolean | string
    password: boolean | string
};

type EmergencyContactType = {
    name: string
    phone_number: string
    status: number
}

type MedicalRecordType = {
    date_of_birth: string
    medical_condition: string
    medical_notes: string
    medications: string
    blood_type: string
    organ_donor: string
    weight: string
    height: string
    skin_color: string
    hair_color: string
    tattoo: string
}

type updateFormType = {
    onUpdateAccount: Function,
    onUpdateContact: Function,
};

type FormType = AccountType & EmergencyContactType & updateFormType;

export type { AccountType, EmergencyContactType, MedicalRecordType, FormType, AccountErrorType, reducerActionType };