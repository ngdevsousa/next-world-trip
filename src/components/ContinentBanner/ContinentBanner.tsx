import { Box, Text } from "@chakra-ui/react";

interface ContinentBannerProps {
  imageURL: string;
  name: string;
}

export function ContinentBanner({ imageURL, name }: ContinentBannerProps) {
  return (
    <Box
      minW="100%"
      minH="500px"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgImage={`url('${imageURL}')`}
    >
      <Text
        pl="140px"
        pt="370px"
        color="gray.50"
        fontSize={48}
        fontWeight="semibold"
      >
        {name}
      </Text>
    </Box>
  );
}
