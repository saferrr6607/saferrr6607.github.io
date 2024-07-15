import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsWithChildren, useCallback, useContext } from "react";
import { Button, Image, Stack, styled } from "tamagui";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import { useFocusEffect } from "@react-navigation/native";
import { AppContext } from "../../contexts/AppContext";

const logo = require("../../assets/img/Homepage.png");

const Backdrop = styled(Stack, {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: "$secondary",
    flex: 1,
});

function InviteScreen(props: PropsWithChildren & NativeStackScreenProps<any>): JSX.Element {

    const { navigation } = props;
    const app_ctx = useContext(AppContext);

    const handleOnSignup = () => {
        navigation.navigate("App.SignUp");
    }

    const handleOnLogin = () => {
        navigation.navigate("Invite.Login");
    }

    useFocusEffect(useCallback(() => {

        let mounted = true;

        if (mounted) {
            app_ctx?.updateUserState('login');
        }

        return function () {
            mounted = false;
        }

    }, [app_ctx]));

    return <Backdrop>
        <Image
            source={logo}
            resizeMode="contain"
            position="absolute"
            top={0}
        />
        <Stack px={16} mb={24} width={"100%"}>
            <PrimaryButton
                mb={8}
                onPress={handleOnSignup}
            >
                Create an account
            </PrimaryButton>
            <SecondaryButton
                onPress={handleOnLogin}
            >Log in</SecondaryButton>
        </Stack>
    </Backdrop>
}
InviteScreen.displayName = "InviteScreen";

export default InviteScreen;