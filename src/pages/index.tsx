import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Stack
} from "@chakra-ui/react";
import { Banner } from "../components/Banner/Banner";
import { CategoryIcon } from "../components/CategoryIcon/CategoryIcon";
import { CustomSwiper } from "../components/CustomSwiper/CustomSwiper";
import { Header } from "../components/Header/Header";
import { categories, continents } from "../helpers/data";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" flexDirection="column" overflowX="hidden">
      <Header />
      <Banner />
      <HStack justifyContent="space-between" pt="80px" pl="140px" pr="140px">
        {categories.map((i) => (
          <CategoryIcon key={i.id} image={i.imageURL} text={i.category} />
        ))}
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
