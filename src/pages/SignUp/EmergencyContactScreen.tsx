import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { memo, PropsWithChildren, useCallback, useEffect, useMemo, useState } from "react";
import { ActivityIndicator, Alert, FlatList, GestureResponderEvent, Platform, ToastAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, ButtonIcon, Input, Separator, Spinner, Stack, Text, XStack, YStack, getTokens } from "tamagui";
import { HeaderText } from "./recipe";
import PrimaryButton from "../../components/PrimaryButton";
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Contacts from "react-native-contacts";
import { checkContactPermission } from "../../utils/permissions";
import { EmergencyContact } from "../../models";
import { DataStore } from "aws-amplify";
import { ContactPersonType } from "../../types/contacts";
import ContactListItem from "../../components/ContactListItem";

function EmptyList(props: PropsWithChildren & { loading: boolean, contactsDisabled: boolean, searching: boolean }): JSX.Element {
    const { loading, contactsDisabled, searching } = props;
    const no_permission = !loading && contactsDisabled;
    const empty_list = !loading && !contactsDisabled && !searching;
    const no_match = !loading && !contactsDisabled && searching;
    return <Stack pt={12} px={16}>
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

        if (granted == "granted") {
            const _list = await Contacts.getAll();
            for (let j = 0; j < _list.length; j++) {
                const item = _list[j];
                const display_name = item.displayName;
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

    return {
        list,
        contactsDisabled
    };
}

// moved to ContactListItem.tsx
// const ListItem = (props: PropsWithChildren & ContactPersonType & { checked: boolean, updateModel: (id: string, name: string, phone_number: string) => void }): JSX.Element => {

//     const { name, phone_number, id, checked, updateModel } = props;

//     // const selected = Boolean(model && model[id]) ? true : false;
//     // const [checked, setChecked] = useState(false);

//     const onPress = () => {
//         updateModel(id, name, phone_number);
//     }

//     let icon = checked ? "checkcircle" : "pluscircleo";
//     const primary = getTokens().color.primary.val;


//     return <XStack justifyContent="space-between" py={8} alignItems="center">
//         <YStack>
//             <Text fontSize={12} lineHeight={12 * 1.2}>{name}</Text>
//             <Text fontSize={12} lineHeight={12 * 1.2}>{phone_number}</Text>
//         </YStack>
//         <Button
//             icon={<Icon name={icon} size={22} color={primary} />}
//             px={0}
//             py={0}
//             height={24}
//             bg="transparent"
//             borderColor="transparent"
//             onPress={(event) => {
//                 onPress(id, name, phone_number);
//             }}
//         />
//     </XStack>

// };

function EmergencyContactScreen(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    console.log('rendering EmergencyContactScreen');

    const { navigation } = props;
    const [search, setSearch] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [list, setList] = useState<Array<ContactPersonType>>([]);
    const [selected, setSelected] = useState<Array<string>>([]);
    const [contactsDisabled, setContactsDisabled] = useState<boolean>(false);

    const [model, setModel] = useState<{ [key: string]: ContactPersonType } | null | undefined>(null);

    const count = selected.length;

    useEffect(() => {
        let mounted = true;

        setLoading(true);
        pullContacts()
            .then(({ list, contactsDisabled }) => {
                console.log(JSON.stringify(list, null, 3));
                setLoading(false);
                setContactsDisabled(contactsDisabled);
                setList(list);
            });

        return function () {
            mounted = false;
        }
    }, []);

    const validateForm = async () => {

        let selected = Boolean(model) ? Object.values(model) : [];
        selected = selected.filter(item => Boolean(item));

        if (selected.length == 0) {
            if (Platform.OS == 'android') {
                ToastAndroid.showWithGravityAndOffset("Please select at least 1 emergency contact", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
            } else {
                Alert.alert("Please select at least 1 emergency contact");
            }
            return;
        }

        for (let j = 0; j < selected.length; j++) {

            const data = selected[j];
            console.log(data);
            if (!data) continue;

            try {

                const contact = new EmergencyContact({ ...data, phone_number_id: data.id, status: 1 });
                const saved = await DataStore.save(contact);

            } catch (err) {
                console.log("err", err);
            }

        }

        navigation.replace("App.Main");

    }

    const toggleModel = useCallback((id: string, name: string, phone_number: string) => {

        let selected = Boolean(model) ? Object.values(model) : [];
        selected = selected.filter(item => Boolean(item));


        const in_selected = Boolean(model && model[id]);
        console.log('check in selected');
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

    return <SafeAreaView style={{
        height: "100%",
        backgroundColor: "white"
    }}>
        <Stack height={40} />
        <YStack px={16}>
            <XStack alignItems="center" mb={16}>
                <Button icon={<Icon name="arrowleft" size={24} />} p={0} height={32} bg={"transparent"} borderColor="transparent" onPress={() => navigation.goBack()} />
                <HeaderText ml={8}>Emergeny Contacts</HeaderText>
            </XStack>
            <Input placeholder="Search Contacts" value={search} onChangeText={setSearch} mb={16} />
            <XStack justifyContent="space-between">
                <Text>Choose up to 5 emergency contacts.</Text>
                <Text color="$primary">{count}/5</Text>
            </XStack>
        </YStack>
        <FlatList
            style={{ paddingHorizontal: 16 }}
            data={list}
            keyExtractor={(item: ContactPersonType, index: number) => {
                return `${index}-${Boolean(model && model[item.id]) ? item.id : 'x'}`;
            }}
            renderItem={({ item, index }) => {
                const checked = Boolean(model && model[item.id]);
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
                    });
            }}
        />
        <Stack mb={24} px={16} pt={12}>
            <PrimaryButton onPress={validateForm}>Continue</PrimaryButton>
        </Stack>
    </SafeAreaView>
}

export default EmergencyContactScreen;