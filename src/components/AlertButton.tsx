import { Button, styled } from "tamagui";

const AlertButton = styled(Button, {
    borderRadius: 8,
    borderColor: "#D35D52",
    backgroundColor: "#D35D52",
    fontWeight: "700",
    color: "white",
    pressStyle: { opacity: 0.75 },
    height: 80,
});

export default AlertButton;