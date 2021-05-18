import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Stack
} from "@chakra-ui/react";
import { Banner } from "../components/Banner/Banner";
import { CategoryIcon } from "../components/CategoryIcon/CategoryIcon";
import { CustomSwiper } from "../components/CustomSwiper/CustomSwiper";
import { ContinentInfo } from "../components/CustomSwiper/types";

export default function Home() {
  const continents: Array<ContinentInfo> = [
    {
      name: "Europa",
      description: "O continente mais antigo.",
      imageURL: "continents/EU.png"
    },
    {
      name: "Europa",
      description: "O continente mais antigo.",
      imageURL: "continents/EU.png"
    },
    {
      name: "Europa",
      description: "O continente mais antigo.",
      imageURL: "continents/EU.png"
    }
  ];

  return (
    <Flex w="100vw" h="100vh" flexDirection="column" overflowX="hidden">
      <Center pt="7" pb="7">
        <Image src="logo.svg" w={180} h={45} />
      </Center>
      <Banner />
      <HStack justifyContent="space-between" pt="80px" pl="140px" pr="140px">
        <CategoryIcon image="cocktail.svg" text="Vida noturna" />
        <CategoryIcon image="surf.svg" text="Praia" />
        <CategoryIcon image="building.svg" text="Moderno" />
        <CategoryIcon image="museum.svg" text="Clássico" />
        <CategoryIcon image="earth.svg" text="E mais..." />
      </HStack>
      <Center pl="140px" pr="140px" pt="80px">
        <Box h="1px" w="90px" bgColor="gray.400" />
      </Center>
      <Stack alignItems="center" pt="52px">
        <Heading
          color="gray.400"
          fontWeight="medium"
          fontFamily="Poppins"
          fontSize={36}
        >
          Vamos nessa?
        </Heading>
        <Heading
          color="gray.400"
          fontWeight="medium"
          fontFamily="Poppins"
          fontSize={36}
        >
          Então escolha seu continente?
        </Heading>
        <Container maxW="1240px" pt="52px" pb="40px">
          <CustomSwiper continents={continents} />
        </Container>
      </Stack>
    </Flex>
  );
}
