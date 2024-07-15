import { DataStore } from "aws-amplify";
import { AccountSettings, SafeWords } from "../models";

const DEFAULT_SAFE_WORDS = [
    'Help!',
    'SafeHer',
    'Security',
];

export async function isInitializedSafeWords() {

    try {

        const settings = await DataStore.query(AccountSettings);
        const isInitialized = settings && settings.length > 0;
        return {
            initialized: isInitialized,
            enableSafeWords: isInitialized && settings[0].enableSafeWords,
        };

    } catch (err) {
        console.log(err);
        throw err;
    }

}

export async function initializeSafeWords() {

    try {

        let no_default = true

        for (const word of DEFAULT_SAFE_WORDS) {
            const existingSafeWord = await DataStore.query(SafeWords, c => c.safe_word.eq(word));
            if (!existingSafeWord.length) {
                await DataStore.save(new SafeWords({
                    enabled: true,
                    status: 1,
                    safe_word: word
                }));
            }
            no_default = no_default && existingSafeWord.length == 0
        }

        if (no_default) {
            const settings = await DataStore.query(AccountSettings);
            if (!settings || settings.length == 0) {
                await DataStore.save(new AccountSettings({
                    enableSafeWords: true
                }));
            } else {
                await DataStore.save(AccountSettings.copyOf(settings[0], updated => {
                    updated.enableSafeWords = true;
                }));
            }
        }

    } catch (err) {
        console.log(err);
    }

}

export async function getSafeWords() {
    return DataStore.query(SafeWords, c => c.status.eq(1));
}

export async function updateSafeWord(id: string, updatedSafeWord: Partial<SafeWords>) {
    try {
        const safeWord = await DataStore.query(SafeWords, id);

        if (!safeWord) throw new Error('Safe word not found');

        const existingSafeWord = await DataStore.query(SafeWords, c => c.safe_word.eq(safeWord.safe_word));
        if (existingSafeWord.length) {
            await DataStore.save(SafeWords.copyOf(existingSafeWord[0], updated => {
                updated.enabled = updatedSafeWord.enabled;
                updated.status = updatedSafeWord.status;
            }));
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export async function deleteSafeWord(id: string) {
    return updateSafeWord(id, { status: 0 });
}

export async function addSafeWord(newSafeWord: string) {
    try {
        const existingSafeWord = await DataStore.query(SafeWords, c => c.safe_word.eq(newSafeWord));
        if (existingSafeWord.length) {
            if (existingSafeWord[0].status == 1) throw new Error('Safe word already exists');
            else {
                await DataStore.save(SafeWords.copyOf(existingSafeWord[0], updated => {
                    updated.enabled = true;
                    updated.status = 1;
                }));
            }
        } else {
            await DataStore.save(new SafeWords({
                enabled: true,
                status: 1,
                safe_word: newSafeWord
            }));
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}