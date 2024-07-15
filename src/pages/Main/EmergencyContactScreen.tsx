import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DataStore } from "aws-amplify";
import React, { PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { FlatList } from "react-native";
import Contacts from "react-native-contacts";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/AntDesign';
import { Button, Input, Separator, Stack, Text, XStack, YStack } from "tamagui";
import ContactListItem from "../../components/ContactListItem";
import PrimaryButton from "../../components/PrimaryButton";
import { AppContext } from "../../contexts/AppContext";
import { EmergencyContact } from "../../models";
import { ContactPersonType } from "../../types/contacts";
import { alertUser } from "../../utils/alert";

import { HeaderText } from "../SignUp/recipe";
import { checkContactPermission } from "../../utils/permissions";

function EmptyList(props: PropsWithChildren & { loading: boolean, contactsDisabled: boolean, searching: boolean }): JSX.Element {
    const { loading, contactsDisabled, searching } = props;
    const no_permission = !loading && contactsDisabled;
    const empty_list = !loading && !contactsDisabled && !searching;
    const no_match = !loading && !contactsDisabled && searching;
    return <Stack pt={12} paddingHorizontal={16}>
        {empty_list && <Text fontSize={12} color="$textSecondary">There is no contact from your Contact list.</Text>}
        {no_match && <Text fontSize={12} color="$textSecondary">No match with your search keyword.</Text>}
        {no_permission && <Text fontSize={12} color="$textSecondary">Please grant permission to pull from your Contact list.</Text>}
    </Stack>
}
EmptyList.displayName = "EmptyList";

type PullContactType = {
    list: Array<ContactPersonType>
    contactsDisabled: boolean
}
const pullContacts = async (): Promise<PullContactType> => {

    let list: Array<ContactPersonType> = [];
    let contactsDisabled = false;

    try {

        const granted = await checkContactPermission();

        console.log('@pull contacts');
        console.log('granted', granted);

        if (granted == "granted") {
            const _list = await Contacts.getAll();
            for (let j = 0; j < _list.length; j++) {
                const item = _list[j];
                console.log(item);
                let display_name = item.displayName;
                if (!display_name) {
                    display_name = `${item.givenName} ${item.familyName}`;
                }
                display_name = display_name.trim();
                const phone_numbers = item.phoneNumbers;
                for (let num of phone_numbers) {
                    let phone_number = num.number.replace(/[ \(\)]/g, "");
                    let reformatted_phone_number = phone_number;
                    if (phone_number.indexOf("09") == 0) {
                        reformatted_phone_number = "+63" + phone_number.substring(1);
                    } else if (phone_number.indexOf("639") == 0) {
                        reformatted_phone_number = "+" + phone_number;
                    } else if (phone_number.indexOf("+639") == 0) {
                        // do nothing
                    } else {
                        // console.log("invalid", display_name, "number", phone_number);
                        // nani fuck
                        continue;
                    }
                    const c: ContactPersonType = {
                        name: display_name,
                        phone_number: reformatted_phone_number,
                        id: num["id"] || reformatted_phone_number,
                    };
                    list.push(c);
                }
            }
        } else {
            contactsDisabled = true;
        }

    } catch (err) {
        console.log("err", err);
    }

    const sorted_list = list.sort(function (a, b) {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });

    return {
        list: sorted_list,
        contactsDisabled
    };
}

function EmergencyContactScreen(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const ctx = useContext(AppContext);

    const { navigation } = props;
    const [search, setSearch] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [list, setList] = useState<Array<ContactPersonType>>([]);
    const [list_model, setListModel] = useState<Array<ContactPersonType>>([]);
    const [contactsDisabled, setContactsDisabled] = useState<boolean>(false);

    const [model, setModel] = useState<{ [key: string]: ContactPersonType } | null | undefined>(null);

    const count = model ? Object.keys(model).reduce((_v, _c) => Boolean(model[_c]) ? _v + 1 : _v, 0) : 0;

    useFocusEffect(useCallback(() => {
        let mounted = true;

        setLoading(true);

        // if (ctx?.myContacts) {
        pullContacts()
            .then(({ list, contactsDisabled }) => {
                // console.log(JSON.stringify(list, null, 3));

                // const model_obj: { [key: string]: ContactPersonType } = {};
                // ctx?.myContacts.map(item => {
                //     model_obj[item.id] = {
                //         id: item.phone_number_id || '',
                //         name: item.name || '',
                //         phone_number: item.phone_number || '',
                //     };
                // });
                // setModel(model_obj);

                setLoading(false);
                setContactsDisabled(contactsDisabled);
                setList(list);
                setListModel(list);
            });
        // }

        return function () {
            mounted = false;
        }
    }, []));
    // }, [ctx?.myContacts]));

    const validateForm = async () => {

        let selected = Boolean(model) ? Object.values(model) : [];
        selected = selected.filter(item => Boolean(item));

        if (selected.length == 0) {
            alertUser("Please select at least 1 emergency contact");
            return;
        }

        await DataStore.query(EmergencyContact)
            .then(contacts => {
                const promises: Promise<any>[] = [];
                contacts.forEach(contact => {
                    promises.push(DataStore.delete(contact));
                });
                return Promise.all(promises);
            });

        for (let j = 0; j < selected.length; j++) {

            const data = selected[j];
            // console.log(data);
            if (!data) continue;

            try {

                const contact = new EmergencyContact({ ...data, phone_number_id: data.id, status: 1 });
                const saved = await DataStore.save(contact);

            } catch (err) {
                console.log("err", err);
            }

        }

        alertUser("Emergency contacts updated.");
        navigation.navigate("App.Main");

    }

    const toggleModel = useCallback((id: string, name: string, phone_number: string) => {

        let selected = Boolean(model) ? Object.values(model) : [];
        selected = selected.filter(item => Boolean(item));


        const in_selected = Boolean(model && model[id]);
        // console.log('check in selected');
        if (in_selected) {
            setModel(model => ({ ...model, [id]: null }));
            // setSelected(ids => {
            //     return ids.filter(v => v != id);
            // });
        } else {
            if (selected.length < 5) {
                setModel(model => ({ ...model, [id]: { id, name, phone_number } }));
            }
        }
    }, [model, setModel]);

    useEffect(() => {
        if (search === '') {
            setListModel(list);
        } else {
            setListModel(list.filter(item => item.name.toLowerCase().indexOf(search.toLowerCase()) === 0));
        }
    }, [list, search]);

    return <SafeAreaView style={{
        height: "100%",
        backgroundColor: "white"
    }}>
        <Stack height={40} />
        <YStack paddingHorizontal={16}>
            <XStack alignItems="center" marginBottom={16}>
                <Button icon={<Icon name="arrowleft" size={24} />} p={0} height={32} bg={"transparent"} borderColor="transparent" onPress={() => navigation.goBack()} />
                <HeaderText marginLeft={8}>Emergeny Contacts</HeaderText>
            </XStack>
            <Input placeholder="Search Contacts" value={search} onChangeText={setSearch} marginBottom={16} />
            <XStack justifyContent="space-between">
                <Text>Choose up to 5 emergency contacts.</Text>
                <Text color="$primary">{count}/5</Text>
            </XStack>
        </YStack>
        <FlatList
            style={{ paddingHorizontal: 16 }}
            data={list_model}
            keyExtractor={(item: ContactPersonType, index: number) => {
                return `${index}-${Boolean(model && model[item.id]) ? item.id : 'x'}`;
            }}
            renderItem={({ item, index }) => {

                const checked = Boolean(model && model[item.id]);

                if (checked) console.log(item.id, 'checked dapat');

                return <ContactListItem key={`${index}-${Boolean(model && model[item.id]) ? item.id : 'x'}`} {...item} updateModel={toggleModel} checked={checked} />
            }}
            ListEmptyComponent={<EmptyList loading={loading} contactsDisabled={contactsDisabled} searching={search.length > 0} />}
            ListFooterComponent={<Stack height={40}>
                {/* {loading && <Spinner size="large" color="$primary" />} */}
            </Stack>}
            ItemSeparatorComponent={() => <Separator />}
            refreshing={loading}
            onRefresh={() => {
                setLoading(true);
                pullContacts()
                    .then(({ list, contactsDisabled }) => {
                        setLoading(false);
                        setContactsDisabled(contactsDisabled);
                        setList(list);
                        setListModel(list);
                    });
            }}
        />
        <Stack marginBottom={24} paddingHorizontal={16} pt={12}>
            <PrimaryButton onPress={validateForm}>Continue</PrimaryButton>
        </Stack>
    </SafeAreaView>
}

export default EmergencyContactScreen;