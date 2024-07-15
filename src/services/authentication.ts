import { API, Auth, DataStore } from "aws-amplify";
import { AccountSettings } from "../models";

export async function isEnabledBiometric(platform: 'ios' | 'android') {

    let isEnabled = false;
    let key = '';

    try {

        const accountSettings = await DataStore.query(AccountSettings);

        if (accountSettings && accountSettings.length > 0) {
            const option = accountSettings[0];
            if (platform == 'ios') {
                isEnabled = option.enableFaceIdLogin ?? false;
                key = option.faceIDKey ?? '';
            } else {
                isEnabled = option.enableBiometricLogin ?? false;
            }

        }


    } catch (err) {
        console.log(err);
        throw err;
    }

    return { isEnabled, key };

}

export async function updateBiometricOption(enableBioId: boolean, key: string, platform: 'ios' | 'android') {

    try {

        const accountSettings = await DataStore.query(AccountSettings);

        console.log('@updateBiometricts', accountSettings);

        if (!accountSettings || accountSettings.length == 0) {
            let settings: AccountSettings;
            if (platform == 'ios') {
                settings = new AccountSettings({
                    enableFaceIdLogin: enableBioId,
                    faceIDKey: key,
                });
            } else {
                settings = new AccountSettings({
                    enableBiometricLogin: enableBioId
                })
            }
            await DataStore.save(settings);
        } else {
            const option = accountSettings[0];
            await DataStore.save(AccountSettings.copyOf(option, updated => {
                if (platform == 'ios') {
                    updated.enableFaceIdLogin = enableBioId;
                    updated.faceIDKey = key;
                } else {
                    updated.enableBiometricLogin = enableBioId;
                }
            }));
        }

    } catch (err) {
        console.log(err);
        throw err;
    }

}

export async function verifySignatureWithServer(options: { signature: string, payload: string }) {

    const api_response = {
        status: 'failed',
        message: '',
    };

    try {

        const { signature, payload } = options;

        const settings = await DataStore.query(AccountSettings);

        if (!settings || settings.length == 0) {
            throw new Error('Something went wrong during your Face ID authentication.');
        }

        const publicKey = settings[0].faceIDKey;

        const jwtToken = (await Auth.currentSession()).getIdToken().getJwtToken();

        console.log(jwtToken);

        const response = await API.post('verifySignature', '/verify-signature', {
            body: {
                signature,
                payload,
                publicKey,
            },
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        });

        if (response.status == 'success') {
            api_response.status = 'success';
        }

    } catch (err) {
        console.log('lanbdadfk');
        console.log(err);
    }

    return api_response;

}