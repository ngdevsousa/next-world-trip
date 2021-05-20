import { Flex, Heading, HStack, Spacer, Stack, Text } from "@chakra-ui/react";
import { Card } from "../../components/Card/Card";
import { ContinentBanner } from "../../components/ContinentBanner/ContinentBanner";
import { Header } from "../../components/Header/Header";
import { TextBox } from "../../components/TextBox/TextBox";
import { destinations } from "../../helpers/data";

export default function Destination() {
  return (
    <>
      <Header />
      <Flex justifyContent="center">
        <ContinentBanner imageURL="/banners/banner_eu.png" name="Europa" />
      </Flex>
      <Stack pt="80px" pr="140px" pl="140px">
        <HStack spacing="70px">
          <Text color="gray.400" fontSize={24} fontWeight="regular" w="600px">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <HStack spacing="42px">
            <TextBox heading="50" body="países" />
            <TextBox heading="60" body="línguas" />
            <TextBox heading="27" body="cidades +100" />
          </HStack>
        </HStack>
        <Heading pt="80px" fontWeight="medium" fontSize={36}>
          Cidades +100
        </Heading>
        <HStack maxW="1440px" flexWrap="wrap">
          {destinations.map((i) => (
            <Card
              key={i.id}
              primaryText={i.city}
              secondaryText={i.country}
              imageURL={i.imageURL}
              avatarURL={i.avatarURL}
            />
          ))}
        </HStack>
        <Spacer pt={20} />
      </Stack>
    </>
  );
}
