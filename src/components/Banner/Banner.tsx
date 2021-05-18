import {
  Box,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text
} from "@chakra-ui/react";

export function Banner() {
  return (
    <Box
      bgImage="url('background.png')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      w="100%"
      minH={335}
      maxH={335}
      overflow="visible"
    >
      <Flex>
        <Stack pl="140px">
          <Heading
            color="gray.50"
            pt="80px"
            fontWeight="medium"
            fontSize={36}
            maxWidth={640}
          >
            5 Continentes,
          </Heading>
          <Heading color="gray.50" fontWeight="medium" fontSize={36}>
            infinitas possibilidades
          </Heading>
          <Text
            pt="20px"
            color="gray.100"
            fontWeight="regular"
            fontSize={20}
            maxWidth={524}
          >
            Chegou a hora de tirar do papel a vaigem que você sempre sonhou
          </Text>
        </Stack>
        <Spacer />
        <Image src="airplane.svg" pt="76px" pr="140px" />
      </Flex>
    </Box>
  );
}
