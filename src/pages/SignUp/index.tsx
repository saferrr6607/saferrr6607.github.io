import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAccountScreen from "./CreateAccountScreen";
import { Text } from "react-native";
import React, { createContext, useReducer } from "react";
import { AccountType, EmergencyContactType, FormType, MedicalRecordType, reducerActionType } from "./types";
import MedicalRecordScreen from "./MedicalRecordScreen";
import OTPScreen from "./OTPScreen";
import EmergencyContactScreen from "./EmergencyContactScreen";

const NavigationStack = createNativeStackNavigator();

const INITIAL_ACCOUNT_STATE: AccountType = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
};
function accountReducer(state: AccountType, action: reducerActionType & { payload: AccountType | string }) {
    const payload = action.payload;
    let first_name, last_name, email, password;
    switch (action.type) {
        case "SET":
            first_name = payload.first_name;
            last_name = payload.last_name;
            email = payload.email;
            password = payload.password;

            return {
                ...state,
                first_name,
                last_name,
                email,
                password,
            };
        case "FIRST_NAME":
            first_name = payload;
            return { ...state, first_name, };
        case "LAST_NAME":
            last_name = payload;
            return { ...state, last_name, };
        case "EMAIL":
            email = payload;
            return { ...state, email, };
        case "PASSWORD":
            password = payload;
            return { ...state, password, };
        default:
            return state;
    }
}
function useAccountForm(): [AccountType, Function] {
    const [accountState, dispatchAccount] = useReducer(accountReducer, INITIAL_ACCOUNT_STATE);

    const onUpdate = (type: "SET" | "FIRST_NAME" | "LAST_NAME" | "EMAIL" | "PASSWORD", form: AccountType | string) => {
        dispatchAccount({
            type,
            payload: form,
        });
    };

    return [accountState, onUpdate];
}

const INITIAL_EMERGENCY_CONTACT_STATE: EmergencyContactType = {
    name: "",
    phone_number: "",
    status: 0,
};
function contactReducer(state: EmergencyContactType, action: reducerActionType & { payload: EmergencyContactType }) {
    const payload = action.payload;
    let name, phone_number, status;
    switch (action.type) {
        case "SET":
            name = payload.name;
            phone_number = payload.phone_number;
            status = payload.status;

            return {
                ...state,
                name,
                phone_number,
                status,
            };
        default:
            return state;
    }
}
function useContactForm(): [EmergencyContactType, Function] {
    const [emergencyContactState, dispatchContact] = useReducer(contactReducer, INITIAL_EMERGENCY_CONTACT_STATE);

    const onUpdate = (form: EmergencyContactType) => {
        dispatchContact({
            type: "SET",
            payload: form,
        });
    };

    return [emergencyContactState, onUpdate];
}

const FormContext = createContext<FormType>({
    ...INITIAL_ACCOUNT_STATE,
    ...INITIAL_EMERGENCY_CONTACT_STATE,
    onUpdateAccount: () => { },
    onUpdateContact: () => { },
});

function SignUpNavigation(): JSX.Element {

    const [account, onUpdateAccount] = useAccountForm();
    const [emergency_contact, onUpdateContact] = useContactForm();

    return <FormContext.Provider value={{
        ...account,
        onUpdateAccount,

        ...emergency_contact,
        onUpdateContact,
    }}>
        <NavigationStack.Navigator
            initialRouteName="SignUp.CreateAccount"
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <NavigationStack.Screen
                name="SignUp.CreateAccount"
                component={CreateAccountScreen}
            />
            <NavigationStack.Screen
                name="SignUp.OTP"
                component={OTPScreen}
            />
            <NavigationStack.Screen
                name="SignUp.MedicalRecord"
                component={MedicalRecordScreen}
            />
            <NavigationStack.Screen
                name="SignUp.EmergencyContact"
                component={EmergencyContactScreen}
            />
        </NavigationStack.Navigator>
    </FormContext.Provider>
}

export default SignUpNavigation;
export { FormContext };