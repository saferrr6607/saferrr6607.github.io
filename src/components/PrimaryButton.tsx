import { Button, styled } from "tamagui";

const PrimaryButton = styled(Button, {
    borderRadius: 50,
    borderColor: "$primary",
    backgroundColor: "$primary",
    fontWeight: "700",
    color: "white",
    pressStyle: { opacity: 0.75 },
});

export default PrimaryButton;