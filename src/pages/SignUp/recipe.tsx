import { PropsWithChildren, useMemo } from "react";
import { Text, styled, Stack, Input, InputProps, StackProps, YStack } from "tamagui";

const HeaderText = styled(Text, {
    color: "$text",
    fontSize: 20,
    fontWeight: "600",
});

type InputWithErrorProps = StackProps & {
    value: string | undefined
    onChangeText: (text: string) => any | undefined
    error: string | boolean
    InputProps?: InputProps
};
function InputWithError(props: PropsWithChildren & InputWithErrorProps): JSX.Element {

    const { error = "", value, onChangeText, InputProps, ..._props } = props;

    const msg = useMemo(() => {
        const defaultMsg = "Invalid input.";
        if (error === true) return defaultMsg;
        if (error === false) return "";
        return error;
    }, [error]);

    const propStyle = {
        color: error ? "$error" : "$color",
        borderColor: error ? "$error" : "$borderColor",
        focusStyle: {
            borderColor: error ? "$error" : "$borderColor"
        },
    };

    return <Stack {..._props}>
        <Input {...InputProps} value={value} onChangeText={onChangeText} {...propStyle} />
        {Boolean(error) && <Text fontSize={10} px={8} color={"$error"}>{msg}</Text>}
    </Stack>
}

type LabelledStackProps = StackProps & {
    label: string
};

function LabelledStack(props: PropsWithChildren & LabelledStackProps): JSX.Element {

    const { label, ..._props } = props;

    return <YStack {..._props}>
        <Text fontWeight={"600"} fontSize={10}>{label}</Text>
        {_props.children}
    </YStack>

}

export { HeaderText, InputWithError, LabelledStack };