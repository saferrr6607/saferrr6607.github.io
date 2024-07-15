import { DataStore } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import useCognitoDetail from '../hooks/useCognito';
import { EmergencyContact } from '../models';
import { ContactPersonType } from '../types/contacts';

export type UserStateType = 'signup' | 'login' | 'in-app';

export interface AppCtx {
    cognito: any;
    userState: UserStateType;
    updateUserState: Function;
    myContacts: Array<EmergencyContact>;
}

const contextData: AppCtx = {
    cognito: null,
    userState: 'login',
    updateUserState: (s: UserStateType) => s,
    myContacts: [],
};

export const AppContext = React.createContext<AppCtx | null>(contextData);

export default function AppProvider(props: any) {

    const { children } = props;

    // const cognito = null;

    const cognito = useCognitoDetail();
    const [userState, setUserState] = useState<UserStateType>('login');
    const [myContacts, setMyContacts] = useState<Array<EmergencyContact>>([]);

    useEffect(() => {
        let subscription: any = null;

        if (cognito) {
            const cognito_id = cognito.id;
            subscription = DataStore
                .observeQuery(EmergencyContact, cond => cond.status.eq(1))
                .subscribe(snapshot => {
                    const { items, isSynced } = snapshot;
                    const list = items.filter(item => item.owner == cognito_id);
                    console.log(`[Snapshot] item count: ${items.length}, owned: ${list.length}, isSynced: ${isSynced}`);
                    setMyContacts(list);
                });
        }

        return () => {
            subscription?.unsubscribe();
            setMyContacts([]);
        }
    }, [cognito]);

    return <AppContext.Provider value={{
        cognito,
        userState,
        updateUserState: setUserState,
        myContacts,
    }}>
        {children}
    </AppContext.Provider>
}