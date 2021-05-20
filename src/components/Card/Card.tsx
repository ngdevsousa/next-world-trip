import { Avatar, Box, Heading, HStack, Image, Text } from "@chakra-ui/react";

interface CardProps {
  primaryText: string;
  secondaryText: string;
  imageURL: string;
  avatarURL: string;
}

export function Card({
  primaryText,
  secondaryText,
  imageURL,
  avatarURL
}: CardProps) {
  return (
    <Box
      minW={256}
      minH={279}
      pr="45px"
      pt="40px"
      marginInlineStart="0px !important"
    >
      <Image src={imageURL} />

      <HStack
        justifyContent="space-between"
        border="2px"
        borderTop="0"
        borderColor="rgb(255, 186, 8, .5)"
      >
        <Box pl="24px" pb="25px">
          <Heading
            pt="18px"
            fontFamily="Barlow"
            fontSize="20px"
            fontWeight="semibold"
          >
            {primaryText}
          </Heading>
          <Text
            pt="12px"
            color="gray.200"
            fontFamily="Barlow"
            fontSize="16px"
            fontWeight="medium"
            whiteSpace="nowrap"
          >
            {secondaryText}
          </Text>
        </Box>
        <Box pr="24px">
          <Avatar size="sm" src={avatarURL} />
        </Box>
      </HStack>
    </Box>
  );
}
