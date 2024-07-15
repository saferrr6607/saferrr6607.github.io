import { Button, styled } from "tamagui";

const SecondaryButton = styled(Button, {
    borderRadius: 50,
    borderColor: "$primary",
    backgroundColor: "transparent",
    fontWeight: "700",
    color: "$primary",
    pressStyle: { opacity: 0.25 }
});

export default SecondaryButton;