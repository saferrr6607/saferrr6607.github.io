import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { PropsWithChildren, useCallback, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Progress, Stack, Text, View, ZStack, styled } from "tamagui";
import TypeformEmbed from "react-native-typeform-embed";
import { useFocusEffect } from "@react-navigation/native";
import { WebView, WebViewNavigation } from 'react-native-webview';
import Feather from 'react-native-vector-icons/Feather';
import { BackHandler } from "react-native";

const MyButton = styled(Button, {
    color: '#000000',
    borderWidth: 1,
    borderColor: '#463D3C',
    borderRadius: 1000,
    backgroundColor: 'transparent',
    fontWeight: '700',
});

const base_url = 'https://nrlcg9crd7l.typeform.com/to/';

function CommutingDiaryScreen({ navigation }: PropsWithChildren & NativeStackScreenProps<any>) {

    const [loadForm, setLoadForm] = React.useState<boolean>(false);
    const [url, setUrl] = React.useState<string>('');

    const handleTypeForm = (form_id: string) => {
        setLoadForm(true);
        setUrl(base_url + form_id);
    }

    useFocusEffect(useCallback(() => {
        return function () {
            setLoadForm(false);
            setUrl('');
        }
    }, []));

    const handleFormSubmit = () => {
        console.log('submitted!')
    };
    const handleFormClose = () => {
        console.log('closed!')
    };

    const resetTypeForm = () => {
        setLoadForm(false);
        setUrl('');
    }

    useEffect(() => {
        navigation.setOptions({
            headerBackVisible: false,
            headerTitle: () => <Text fontWeight={'600'} fontSize={20}>Commuting Diary</Text>,
            headerLeft: () => <Button mr={5} px={12} icon={<Feather name='arrow-left' size={20} />} bg='transparent' onPress={() => loadForm ? resetTypeForm() : navigation.goBack()} />,
            headerShadowVisible: false,
        });
        const backAction = () => {
            if (loadForm) {
                resetTypeForm();
                return true;  // Prevent default behavior (exiting the app)
            }
            return false;  // Allow default behavior
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove();
    }, [loadForm]);

    const handleNavigationStateChange = (event: WebViewNavigation) => {
        console.log(event);
        if (event.url !== url) {
            resetTypeForm();
        }
    };

    return <View style={{
        height: '100%',
        backgroundColor: 'white',
    }}>
        <Progress value={100} borderRadius={0} height={5}>
            <Progress.Indicator bg="#DB8780" />
        </Progress>
        <Stack paddingHorizontal={23} gap={26}>
            <Stack justifyContent="center" marginTop={26}>
                <Text fontWeight={'600'} fontSize={14} textAlign="center" lineHeight={16.8}>
                    Important:
                </Text>
                <Text fontWeight={'300'} fontSize={14} textAlign="center" lineHeight={16.8}>
                    Use of app is for testing and data gathering purposes only, please do not expect immediate response from authorities.
                </Text>
            </Stack>
            <MyButton onPress={() => handleTypeForm('K76yloNR')}>Daily Entries</MyButton>
            <MyButton onPress={() => handleTypeForm('KF0vcix0')}>Entry for End of Daily Diary</MyButton>
        </Stack>
        {loadForm && <ZStack position="absolute" zIndex={100} top={0} left={0} width={'100%'} height={'100%'}>
            <WebView
                source={{ uri: url }}
                style={{ flex: 1 }}
                onNavigationStateChange={handleNavigationStateChange}
            />
        </ZStack>}
    </View>
}

export default CommutingDiaryScreen; 