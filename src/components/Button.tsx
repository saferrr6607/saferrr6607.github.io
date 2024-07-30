import { Button as TButton, styled } from "tamagui";

const Button = styled(TButton, {
    borderRadius: 50,
    fontWeight: "700",
    variants: {
        variant: {
            primary: {
                borderColor: "$primary",
                backgroundColor: "$primary",
                color: "white",
                pressStyle: { opacity: 0.75 },
            },
            secondary: {
                borderColor: "$primary",
                backgroundColor: "transparent",
                color: "$primary",
                pressStyle: { opacity: 0.25 },
            },
        }
    } as const,
});

export default Button;