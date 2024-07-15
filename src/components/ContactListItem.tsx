import React, { PropsWithChildren } from "react";
import { Button, getTokens, Text, XStack, YStack } from "tamagui";
import { ContactPersonType } from "../types/contacts";
import Icon from 'react-native-vector-icons/dist/AntDesign';

function ContactListItem(props: PropsWithChildren & ContactPersonType & { checked: boolean, updateModel: (id: string, name: string, phone_number: string) => void }): JSX.Element {

    const { name, phone_number, id, checked, updateModel } = props;

    // const selected = Boolean(model && model[id]) ? true : false;
    // const [checked, setChecked] = useState(false);

    const onPress = (id: string, name: string, phone_number: string) => {
        updateModel(id, name, phone_number);
    }

    let icon = checked ? "checkcircle" : "pluscircleo";
    const primary = getTokens().color.primary.val;


    return <XStack justifyContent="space-between" py={8} alignItems="center">
        <YStack>
            <Text fontSize={12} lineHeight={12 * 1.2}>{name}</Text>
            <Text fontSize={12} lineHeight={12 * 1.2}>{phone_number}</Text>
        </YStack>
        <Button
            icon={<Icon name={icon} size={22} color={primary} />}
            px={0}
            py={0}
            height={24}
            bg="transparent"
            borderColor="transparent"
            onPress={(event) => {
                onPress(id, name, phone_number);
            }}
        />
    </XStack>

};

export default ContactListItem;