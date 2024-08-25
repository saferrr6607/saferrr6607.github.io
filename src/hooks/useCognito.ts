import React, { useEffect, useState } from 'react';
import { Auth, Hub } from 'aws-amplify';

type cognitoType = any | null;

function useCognitoDetail(): cognitoType {

    const [cognito, setCognito] = useState<cognitoType>(null);

    const getCognitoDetail = async (): Promise<any> => {

        return Auth.currentAuthenticatedUser(
            // {
            //     bypassCache: true // turn to false
            // }
        )
            .then(cognitoUser => {
                // console.log("cognitoUser", cognitoUser);
                if (!cognitoUser) throw Error("not_logged_in");
                const deets = cognitoUser['attributes'];

                const stored_deets = {
                    id: deets.sub,
                    name: `${deets.given_name} ${deets.family_name}`,
                    ...deets,
                };

                setCognito(stored_deets);

            })
            .catch(err => {
                if (err.message == "not_logged_in" || err == "The user is not authenticated") {
                    console.log("Not logged in");
                } else {
                    console.log("err@getCognitoDetail");
                    console.warn(err);
                }
            });

    }

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            // Auth.signOut();
            getCognitoDetail();
        }

        return function () {
            mounted = false;
        }
    }, []);

    useEffect(() => {
        const authListenerCancelToken = Hub.listen('auth', (data) => {

            console.log("AUTH.listen", data.payload.event);
            console.log(data);

            switch (data.payload.event) {
                case "signOut":
                    setCognito(null);
                    break;
                case "signIn": case "autoSignIn":
                    getCognitoDetail();
                    break;
            }

        });

        return () => {
            authListenerCancelToken();
        }

    }, []);

    return cognito;

}

export default useCognitoDetail;