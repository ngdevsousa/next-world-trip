import { Center, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Center pt="7" pb="7">
      <Image src="/logo.svg" w={180} h={45} />
    </Center>
  );
}
