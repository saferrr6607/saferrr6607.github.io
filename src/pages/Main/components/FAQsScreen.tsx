import React from "react";
import DrawerScreen from "./DrawerScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Stack, Text, YStack } from "tamagui";
import { HeaderText, SubHeader } from "../../SignUp/recipe";

function FAQSection(props: { title: string, content: string }): JSX.Element {
    return <YStack gap={12} paddingHorizontal={20} marginBottom={24}>
        <SubHeader fontWeight={'600'} fontSize={18}>{props.title}</SubHeader>
        <Text>{props.content}</Text>
    </YStack>

}

function FAQsScreen(): JSX.Element {
    return <DrawerScreen
        active="faqs"
    >
        <SafeAreaView style={{
            height: "100%",
            backgroundColor: "white"
        }}>
            <ScrollView paddingTop={20}>
                <HeaderText paddingHorizontal={20} marginBottom={30} fontSize={24}>FAQs</HeaderText>
                <FAQSection
                    title="1. How safe is my data?"
                    content="Your data is encrypted using Amazon Web Services's AES 256 encryption. Only our team's data processors have access to data and is backed up regularly."
                />
                <FAQSection
                    title="2. Is SafeHer only for women?"
                    content="Yes. The app is built for the usage of women commuters."
                />
                <FAQSection
                    title="3. My emergency contact is not showing. What can I do?"
                    content="Choosing emergency contacts is only possible if you have contacts in your Contact App or you'[ve enable access to contacts in your app settings."
                />
            </ScrollView>
        </SafeAreaView>
    </DrawerScreen>
}

export default FAQsScreen;