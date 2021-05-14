import { Center, Flex, Image } from "@chakra-ui/react";
import { Banner } from "../components/Banner/Banner";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" flexDirection="column">
      <Center pt="7" pb="7">
        <Image src="logo.svg" w={180} h={45} />
      </Center>
      <Banner />
    </Flex>
  );
}
