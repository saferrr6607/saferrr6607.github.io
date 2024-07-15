import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { Auth, DataStore } from "aws-amplify";
import React, { PropsWithChildren, useContext, useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SplashScreen from "react-native-splash-screen";
import { Platform } from "react-native";
import { AppContext } from "./src/contexts/AppContext";
import LandingNavigation from "./src/pages/Landing";
import MainNavigation from "./src/pages/Main";
import SignUpNavigation from "./src/pages/SignUp";
import { checkAudioPermission, checkContactPermission, checkFineLocPermission, checkMultiplePermissions } from "./src/utils/permissions.android";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { initializeSafeWords } from "./src/services/safeWords";

const Stack = createNativeStackNavigator();

function AppNavigation(props: PropsWithChildren & { startPoint: string }): JSX.Element {

    const { startPoint: starting_point = "" } = props;

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    useEffect(() => {
        let mounted = true;
        if (mounted && navigation && Boolean(starting_point)) {
            try {
                navigation.replace(starting_point);
            } catch (err) {
                navigation.navigate(starting_point);
            }
        }
        return function () {
            mounted = false;
        }
    }, [starting_point]);

    return <Stack.Navigator initialRouteName={starting_point} screenOptions={props => ({
        headerShown: false,
    })}>
        <Stack.Screen name="App.Landing" component={LandingNavigation} />
        <Stack.Screen name="App.SignUp" component={SignUpNavigation} options={() => ({ headerShown: false })} />
        <Stack.Screen name="App.Main" component={MainNavigation} />
    </Stack.Navigator>

}

function App(): JSX.Element {

    const app_context = useContext(AppContext);
    const user_state = app_context?.userState;

    const isLoggedIn = Boolean(app_context?.cognito);
    const [startingPoint, setStartingPoint] = useState<string>("");

    // useEffect(() => {
    //     DataStore.start();
    // }, []);

    useEffect(() => {

        let mounted = true;

        let starting_point = "";
        let hide_splash = true;

        if (isLoggedIn) {
            if (user_state == 'signup') {
                starting_point = "";
            } else {
                starting_point = "App.Landing";
            }
        } else {
            starting_point = "App.Landing";
            hide_splash = false;
        }

        if (mounted) {

            // permissions
            (async () => {
                try {
                    setStartingPoint(starting_point);
                    if (Platform.OS == 'android') {
                        await checkMultiplePermissions();
                        checkContactPermission();
                        SplashScreen.hide();
                    }
                } catch (err) {
                    console.log("sheesh", err);
                }
            })();

        }

        return function () {
            mounted = false;
        }

    }, [isLoggedIn, user_state]);

    useEffect(() => {
        initializeSafeWords()
            .then(resp => {
            })
            .catch(err => {
            });
    }, []);

    useEffect(() => {
        Auth.currentSession()
            .then(current => {
                console.log(current);
            });
    }, []);

    return <GestureHandlerRootView style={{ height: '100%' }}>
        <SafeAreaProvider>
            <NavigationContainer>
                <AppNavigation startPoint={startingPoint} />
            </NavigationContainer>
        </SafeAreaProvider>
    </GestureHandlerRootView>
}

export default App;