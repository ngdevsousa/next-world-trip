import { Center, Image } from "@chakra-ui/react";
import Link from "next/link";

export function Header() {
  return (
    <Link href="/" passHref>
      <Center as="a" pt="7" pb="7">
        <Image src="/logo.svg" w={180} h={45} />
      </Center>
    </Link>
  );
}
