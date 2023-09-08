import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerMedicalRecord = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MedicalRecord, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date_of_birth?: string | null;
  readonly medical_condition?: string | null;
  readonly medical_notes?: string | null;
  readonly medications?: string | null;
  readonly blood_type?: string | null;
  readonly organ_donor?: string | null;
  readonly weight?: string | null;
  readonly height?: string | null;
  readonly skin_color?: string | null;
  readonly hair_color?: string | null;
  readonly tattoo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMedicalRecord = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MedicalRecord, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date_of_birth?: string | null;
  readonly medical_condition?: string | null;
  readonly medical_notes?: string | null;
  readonly medications?: string | null;
  readonly blood_type?: string | null;
  readonly organ_donor?: string | null;
  readonly weight?: string | null;
  readonly height?: string | null;
  readonly skin_color?: string | null;
  readonly hair_color?: string | null;
  readonly tattoo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MedicalRecord = LazyLoading extends LazyLoadingDisabled ? EagerMedicalRecord : LazyMedicalRecord

export declare const MedicalRecord: (new (init: ModelInit<MedicalRecord>) => MedicalRecord) & {
  copyOf(source: MedicalRecord, mutator: (draft: MutableModel<MedicalRecord>) => MutableModel<MedicalRecord> | void): MedicalRecord;
}

type EagerEmergencyContact = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EmergencyContact, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly phone_number?: string | null;
  readonly status?: number | null;
  readonly phone_number_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmergencyContact = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EmergencyContact, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly phone_number?: string | null;
  readonly status?: number | null;
  readonly phone_number_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EmergencyContact = LazyLoading extends LazyLoadingDisabled ? EagerEmergencyContact : LazyEmergencyContact

export declare const EmergencyContact: (new (init: ModelInit<EmergencyContact>) => EmergencyContact) & {
  copyOf(source: EmergencyContact, mutator: (draft: MutableModel<EmergencyContact>) => MutableModel<EmergencyContact> | void): EmergencyContact;
}