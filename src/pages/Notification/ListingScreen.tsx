import { useFocusEffect } from "@react-navigation/native";
import { DataStore, SortDirection } from "aws-amplify";
import React, { PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Circle, Square, Stack, Text, XStack } from "tamagui";
import { LazyNotification, Notification } from "../../models";
import moment from "moment";
import { FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import { SafeAreaView } from "react-navigation";
import { AppContext } from "../../contexts/AppContext";

function NotifIcon(props) {

    const { type } = props;

    return <Stack justifyContent="center" alignItems="center" mr={16}>
        {type == 'incident' && <Circle size={32} bg="#DD636E"><FontAwesome size={16} color="white" name="exclamation" /></Circle>}
        {type == 'location' && <Square borderRadius={8} size={32} bg="#25AE88"><FontAwesome size={16} color="white" name="check" /></Square>}
    </Stack>

}

function NotifLine(props: PropsWithChildren & { type: string, myDate: string, title: string, description: string }): JSX.Element {

    const { type, myDate, title, description } = props;

    return <Stack mb={16}>
        <XStack flex={1} px={16}>
            <NotifIcon type={type} />
            <Stack flex={1}>
                <XStack mb={4}>
                    <Text fontSize={14} fontWeight="600" flex={1} flexWrap="wrap" pr={5}>{title}</Text>
                    <Text fontSize={10} fontWeight='600'>{myDate}</Text>
                </XStack>
                <Text color="#838383" fontSize={13} lineHeight={13 * 1.2} flexWrap="wrap">{description}</Text>
            </Stack>
        </XStack>
    </Stack>

}

function ListingScreen(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const [myNotifs, setMyNotifs] = useState<Array<LazyNotification>>([]);
    const app_ctx = useContext(AppContext);

    useEffect(() => {
        if (app_ctx?.cognito) {
            const cognito_id = app_ctx.cognito.id;
            DataStore.observeQuery(Notification, p => p, { sort: s => s.timestamp(SortDirection.DESCENDING) })
                .subscribe(snapshot => {
                    const { items, isSynced } = snapshot;
                    const list = items.filter(item => item.owner == cognito_id);
                    setMyNotifs(list);
                });
        }
    }, [app_ctx?.cognito]);

    return <SafeAreaView style={{ height: '100%', backgroundColor: 'white' }}>

        <FlatList
            data={myNotifs}
            renderItem={({ item, index }) => <NotifLine key={`${item.id}`} type={item.type} myDate={moment(item.timestamp).format('MMM DD YYYY')} title={item.title} description={item.description} />}
            ListFooterComponent={() => <Stack height={120} />}
        />
    </SafeAreaView>
}

export default ListingScreen;