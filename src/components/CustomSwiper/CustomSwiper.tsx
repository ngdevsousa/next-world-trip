import { Box, Stack, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ContinentInfo } from "./types";

interface CustomSwiperProps {
  continents: Array<ContinentInfo>;
}

export function CustomSwiper({ continents }: CustomSwiperProps) {
  return (
    <Swiper navigation={true} pagination={true}>
      {continents.map((c) => (
        <SwiperSlide>
          <Box minW="1240px" minH="450px" bgImage={`url('${c.imageURL}')`}>
            <Stack alignItems="center" pt="180px">
              <Text color="gray.50" fontSize={48} fontWeight="bold">
                {c.name}
              </Text>
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
