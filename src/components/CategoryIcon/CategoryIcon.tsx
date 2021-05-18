import { Image, Stack, Text } from "@chakra-ui/react";

interface CategoryIconProps {
  image: string;
  text: string;
}
export function CategoryIcon({ image, text }: CategoryIconProps) {
  return (
    <Stack alignItems="center">
      <Image w={85} h={85} src={image} />
      <Text pt="24px" fontSize={24} fontWeight="semibold" color="gray.400">
        {text}
      </Text>
    </Stack>
  );
}
