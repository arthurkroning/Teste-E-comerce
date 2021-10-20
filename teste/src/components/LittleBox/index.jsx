import { ButtonMain } from "../Button";
import { Box, Text } from "./styles";

export const LittleBox = ({text, buttonText, ...props}) => (
    <Box {...props}>
        <Text>
            {text}
        </Text>
        <ButtonMain marginBottom="20px"  backgroundColor="#231f20" width="200px">
            {buttonText}
        </ButtonMain>
    </Box>
)
