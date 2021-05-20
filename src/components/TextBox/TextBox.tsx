import { Box, Text } from "@chakra-ui/react";

interface TextBoxProps {
  heading: string;
  body: string;
}

export function TextBox({ heading, body }: TextBoxProps) {
  return (
    <Box w="98px" h="99px">
      <Text color="yellow.900" fontSize="48px" fontWeight="semibold">
        {heading}
      </Text>
      <Text
        color="gray.400"
        fontSize="24px"
        fontWeight="semibold"
        whiteSpace="nowrap"
      >
        {body}
      </Text>
    </Box>
  );
}
