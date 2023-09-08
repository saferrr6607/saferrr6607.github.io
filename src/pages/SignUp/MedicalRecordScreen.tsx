import React, { PropsWithChildren, useContext, useEffect, useReducer } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Circle, Input, ScrollView, Stack, Text, XStack, YStack } from "tamagui";
import { HeaderText, LabelledStack } from "./recipe";
import SecondaryButton from "../../components/SecondaryButton";
import PrimaryButton from "../../components/PrimaryButton";
import { FormContext } from ".";
import { MedicalRecordType, reducerActionType } from "./types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DataStore } from "aws-amplify";
import { MedicalRecord } from "../../models";
import { AppContext } from "../../contexts/AppContext";

const INITIAL_MEDICAL_STATE: MedicalRecordType = {
    date_of_birth: "",
    medical_condition: "",
    medical_notes: "",
    medications: "",
    blood_type: "",
    organ_donor: "",
    weight: "",
    height: "",
    skin_color: "",
    hair_color: "",
    tattoo: "",
};
function medicalReducer(state: MedicalRecordType, action: reducerActionType & { payload: MedicalRecordType | string }) {
    const payload = action.payload;
    let date_of_birth, medical_condition, medical_notes, medications,
        blood_type, organ_donor, weight, height, skin_color, hair_color, tattoo;
    switch (action.type) {
        case "SET":
            date_of_birth = payload.date_of_birth;
            medical_condition = payload.medical_condition;
            medical_notes = payload.medical_notes;
            medications = payload.medications;
            blood_type = payload.blood_type;
            organ_donor = payload.organ_donor;
            weight = payload.weight;
            height = payload.height;
            skin_color = payload.skin_color;
            hair_color = payload.hair_color;
            tattoo = payload.tattoo;

            return {
                ...state,
                medical_condition,
                medical_notes,
                medications,
                blood_type,
                organ_donor,
                weight,
                height,
                skin_color,
                hair_color,
                tattoo,
            };
        case "DATE_OF_BIRTH": date_of_birth = payload; return { ...state, date_of_birth, };
        case "MEDICAL_CONDITION": medical_condition = payload; return { ...state, medical_condition, };
        case "MEDICAL_NOTES": medical_notes = payload; return { ...state, medical_notes, };
        case "MEDICATION": medications = payload; return { ...state, medications, };
        case "BLOOD_TYPE": blood_type = payload; return { ...state, blood_type, };
        case "ORGAN_DONOR": organ_donor = payload; return { ...state, organ_donor, };
        case "WEIGHT": weight = payload; return { ...state, weight, };
        case "HEIGHT": height = payload; return { ...state, height, };
        case "SKIN_COLOR": skin_color = payload; return { ...state, skin_color, };
        case "HAIR_COLOR": hair_color = payload; return { ...state, hair_color, };
        case "TATTOO": tattoo = payload; return { ...state, tattoo, };
        default:
            return state;
    }
}
function useMedicalForm(): [MedicalRecordType, Function] {
    const [medicalRecordState, dispatchMedicalRecord] = useReducer(medicalReducer, INITIAL_MEDICAL_STATE);

    const onUpdate = (type: "SET" | "DATE_OF_BIRTH" | "MEDICAL_CONDITION" | "MEDICAL_NOTES" | "MEDICATION" | "BLOOD_TYPE" | "ORGAN_DONOR" | "WEIGHT" | "HEIGHT" | "SKIN_COLOR" | "HAIR_COLOR" | "TATTOO", form: MedicalRecordType | string) => {
        dispatchMedicalRecord({
            type,
            payload: form,
        });
    };

    return [medicalRecordState, onUpdate];
}

function MedicalRecordScreen(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const { navigation } = props;

    const ctx = useContext(FormContext);
    const [medical, onUpdateMedical] = useMedicalForm();

    const app_ctx = useContext(AppContext);

    useEffect(() => {
        console.log("cognito", app_ctx?.cognito);
    }, [app_ctx?.cognito]);

    const validateForm = () => {
        const data = new MedicalRecord(medical);
        console.log("save", data);
        DataStore.save(data)
            .then(saved => {
                console.log("saved", saved);
                navigation.navigate("SignUp.EmergencyContact");
            })
            .catch(err => {
                console.log("err", err);
            });
    }

    const skip = () => {
        navigation.navigate("SignUp.EmergencyContact");
    }

    const name = `${ctx.first_name} ${ctx.last_name}`;

    return <SafeAreaView style={{
        height: "100%",
        backgroundColor: "white"
    }}>
        <ScrollView px={16}>
            <Stack height={40} />
            <HeaderText mb={4}>Setup your Medical ID</HeaderText>
            <XStack alignItems="center" mb={8}>
                <Circle size={64} borderColor={"$borderColor"} borderWidth={1}>
                    <Text fontSize={12} textAlign="center">add{'\n'}photo</Text>
                </Circle>
                <YStack ml={5}>
                    <Text fontSize={10} fontWeight={"600"}>Name</Text>
                    <Text fontSize={12}>{name}</Text>
                </YStack>
            </XStack>


            <LabelledStack label="Date of Birth" mb={8}>
                <Input
                    px={2}
                    value={medical.date_of_birth}
                    onChangeText={(v: string) => onUpdateMedical("DATE_OF_BIRTH", v)}
                    height={36}
                    borderWidth={0}
                    borderRadius={0}
                    borderBottomWidth={1}
                />
            </LabelledStack>
            <LabelledStack label="Medical Conditions" mb={8}>
                <Input
                    px={2}
                    value={medical.medical_condition}
                    onChangeText={(v: string) => onUpdateMedical("MEDICAL_CONDITION", v)}
                    borderWidth={0}
                    borderRadius={0}
                    borderBottomWidth={1}
                />
            </LabelledStack>
            <LabelledStack label="Medical Notes" mb={8}>
                <Input
                    px={2}
                    value={medical.medical_notes}
                    onChangeText={(v: string) => onUpdateMedical("MEDICAL_NOTES", v)}
                    borderWidth={0}
                    borderRadius={0}
                    borderBottomWidth={1}
                />
            </LabelledStack>
            <LabelledStack label="Medication" mb={8}>
                <Input
                    px={2}
                    value={medical.medications}
                    onChangeText={(v: string) => onUpdateMedical("MEDICATION", v)}
                    borderWidth={0}
                    borderRadius={0}
                    borderBottomWidth={1}
                />
            </LabelledStack>
            <LabelledStack label="Blood Type" mb={8}>
                <Input
                    px={2}
                    value={medical.blood_type}
                    onChangeText={(v: string) => onUpdateMedical("BLOOD_TYPE", v)}
                    borderWidth={0}
                    borderRadius={0}
                    borderBottomWidth={1}
                />
            </LabelledStack>
            <LabelledStack label="Organ Donor" mb={8}>
                <Input
                    px={2}
                    value={medical.organ_donor}
                    onChangeText={(v: string) => onUpdateMedical("ORGAN_DONOR", v)}
                    borderWidth={0}
                    borderRadius={0}
                    borderBottomWidth={1}
                />
            </LabelledStack>
            <LabelledStack label="Weight" mb={8}>
                <Input
                    px={2}
                    value={medical.weight}
                    onChangeText={(v: string) => onUpdateMedical("WEIGHT", v)}
                    borderWidth={0}
                    borderRadius={0}
                    borderBottomWidth={1}
                />
            </LabelledStack>
            <LabelledStack label="Height" mb={8}>
                <Input
                    px={2}
                    value={medical.height}
                    onChangeText={(v: string) => onUpdateMedical("HEIGHT", v)}
                    borderWidth={0}
                    borderRadius={0}
                    borderBottomWidth={1}
                />
            </LabelledStack>
            <LabelledStack label="Skin Color" mb={8}>
                <Input
                    px={2}
                    value={medical.skin_color}
                    onChangeText={(v: string) => onUpdateMedical("SKIN_COLOR", v)}
                    borderWidth={0}
                    borderRadius={0}
                    borderBottomWidth={1}
                />
            </LabelledStack>
            <LabelledStack label="Hair Color" mb={8}>
                <Input
                    px={2}
                    value={medical.hair_color}
                    onChangeText={(v: string) => onUpdateMedical("HAIR_COLOR", v)}
                    borderWidth={0}
                    borderRadius={0}
                    borderBottomWidth={1}
                />
            </LabelledStack>
            <LabelledStack label="Tattoo" mb={8}>
                <Input
                    px={2}
                    value={medical.tattoo}
                    onChangeText={(v: string) => onUpdateMedical("TATTOO", v)}
                    borderWidth={0}
                    borderRadius={0}
                    borderBottomWidth={1}
                />
            </LabelledStack>

            <Stack height={40} />
        </ScrollView>
        <Stack mb={24} px={16} pt={12}>
            <PrimaryButton onPress={validateForm} mb={8}>Save Details</PrimaryButton>
            <SecondaryButton onPress={skip}>Skip</SecondaryButton>
        </Stack>
    </SafeAreaView>
}

export default MedicalRecordScreen;