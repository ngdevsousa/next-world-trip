import { Box, Stack, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ContinentInfo } from "./types";
import Link from "next/link";

interface CustomSwiperProps {
  continents: Array<ContinentInfo>;
}

export function CustomSwiper({ continents }: CustomSwiperProps) {
  return (
    <Swiper navigation={true} pagination={true}>
      {continents.map((c, index) => (
        <SwiperSlide key={index}>
          <Box minH="450px" bgImage={`url('${c.imageURL}')`}>
            <Stack alignItems="center" pt="180px">
              <Link href={`/destinations/${c.name.toLowerCase()}`} passHref>
                <Text as="a" color="gray.50" fontSize={48} fontWeight="bold">
                  {c.name}
                </Text>
              </Link>
              <Text color="gray.100" fontSize={24} fontWeight="bold">
                {c.description}
              </Text>
            </Stack>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
