import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { PropsWithChildren, useCallback, useEffect, useState } from "react";
import Feather from 'react-native-vector-icons/Feather';
import { Button, Dialog, DialogProps, Input, Progress, ScrollView, Stack, Text, Unspaced, View, XStack } from "tamagui";
import SecondaryButton from "../../components/SecondaryButton";
import { useFocusEffect } from "@react-navigation/native";
import { addSafeWord, deleteSafeWord, getSafeWords, initializeSafeWords } from "../../services/safeWords";
import useSafeWords from "../../hooks/useSafeWords";
import PrimaryButton from "../../components/PrimaryButton";
import { alertUser } from "../../utils/alert";

function NewSafeWordDialog(props: PropsWithChildren & DialogProps & { onAddWord: (callback: any) => void }) {

    const { onOpenChange } = props;

    const [value, setValue] = useState('');

    useEffect(() => {
        if (props.open) {
            setValue('');
        }
    }, [props.open]);

    const handleAddSafeword = () => {
        if (value.trim() === '') return;
        addSafeWord(value)
            .then(() => {
                props.onAddWord(() => {
                    onOpenChange && onOpenChange(false);
                });
            })
            .catch(err => {
                let message = '';
                if (typeof err === 'string') {
                    message = err;
                } else {
                    message = err.message;
                }
                alertUser(message);
            });
    };

    return <Dialog modal open={props.open} onOpenChange={onOpenChange}>
        <Dialog.Portal>
            <Dialog.Overlay
                key="overlay"
                animation="quick"
                opacity={0.5}
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
            />
            <Dialog.Content width='90%'>
                <Dialog.Description fontSize={18} fontWeight={'700'} flexWrap='wrap' textAlign="center" px={10} mb={40}>
                    Add a new SafeWord
                </Dialog.Description>
                <Stack gap={12}>
                    <Input value={value} onChangeText={setValue} />
                    <PrimaryButton onPress={handleAddSafeword}>Save</PrimaryButton>
                </Stack>
                <Unspaced>
                    <Dialog.Close asChild>
                        <Button
                            position="absolute"
                            top={5}
                            right={5}
                            circular
                            backgroundColor='transparent'
                            icon={<Feather name='x' size={24} />}
                        />
                    </Dialog.Close>
                </Unspaced>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog>

}

function SafeWordsSetupScreen({ navigation }: PropsWithChildren & NativeStackScreenProps<any>) {

    useEffect(() => {
        navigation.setOptions({
            headerBackVisible: false,
            headerTitle: () => <Text fontWeight={'600'} fontSize={20}>Safeword</Text>,
            headerLeft: () => <Button mr={5} px={12} icon={<Feather name='arrow-left' size={20} />} bg='transparent' onPress={() => navigation.goBack()} />,
            headerShadowVisible: false,
        });
    }, []);

    const safeWordsEngine = useSafeWords();

    useFocusEffect(useCallback(() => {
        safeWordsEngine.initialize();
    }, []));

    const [openAddSafeWord, setOpenAddSafeWord] = React.useState(false);

    return <View style={{
        height: '100%',
        backgroundColor: 'white',
    }}>
        <NewSafeWordDialog open={openAddSafeWord} onOpenChange={setOpenAddSafeWord} onAddWord={(callback) => {
            safeWordsEngine.reloadList()
                .then(callback)
        }} />
        <Progress value={100} borderRadius={0} height={5}>
            <Progress.Indicator backgroundColor="#DB8780" />
        </Progress>
        <ScrollView paddingHorizontal={23} gap={26}>
            <SecondaryButton marginVertical={24} onPress={() => setOpenAddSafeWord(true)} color={'black'} borderColor='black'>Setup SafeWord</SecondaryButton>
            {safeWordsEngine.list.map((safeWord, index) => (<>
                <XStack alignItems="center" paddingVertical={12} key={safeWord.id}>
                    <Text flex={1} fontSize={16}>{safeWord.safe_word}</Text>
                    <Button onPress={() => deleteSafeWord(safeWord.id).then(() => {
                        safeWordsEngine.reloadList();
                    })}>Delete</Button>
                </XStack>
            </>))}
        </ScrollView>
    </View>
}

export default SafeWordsSetupScreen; 