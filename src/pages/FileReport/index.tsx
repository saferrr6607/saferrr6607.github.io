import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { createContext, PropsWithChildren } from "react";
import { Button, Text } from "tamagui";
import OptionsScreen from "./OptionsScreen";
import { Region } from "react-native-maps";
import Feather from 'react-native-vector-icons/Feather';
import FileIncidentScreen from "./FileIncidentScreen";
import FileLocatonScreen from "./FileLocationScreen";

const NavigationStack = createNativeStackNavigator();

type FileReportCtxType = {
    location: Region;
    image: string;
};
export const FileReportContext = createContext<FileReportCtxType>({
    location: { latitude: 0, latitudeDelta: 0, longitude: 0, longitudeDelta: 0 },
    image: '',
});

function FileReportNavigation(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const { navigation, route } = props;

    return <FileReportContext.Provider value={{
        location: route.params?.location,
        image: route.params?.image ?? '',
    }}>
        <NavigationStack.Navigator
            initialRouteName="FileReport.Options"
            screenOptions={({ navigation }) => ({
                headerBackVisible: false,
                headerTitle: () => <Text fontWeight={'600'} fontSize={20}>File a report</Text>,
                headerLeft: () => <Button mr={5} px={12} icon={<Feather name='arrow-left' size={20} />} bg='transparent' onPress={() => navigation.goBack()} />,
                headerShadowVisible: false,
            })}
        >
            <NavigationStack.Screen name="FileReport.Options" component={OptionsScreen} />
            <NavigationStack.Screen name="FileReport.Incident" component={FileIncidentScreen} />
            <NavigationStack.Screen name="FileReport.Location" component={FileLocatonScreen} />
        </NavigationStack.Navigator>
    </FileReportContext.Provider>

}

export default FileReportNavigation;