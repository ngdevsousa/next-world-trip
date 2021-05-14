import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    colors: {
      yellow: {
        "900": "#FFBA08"
      },
      grey: {
        "400": "#47585B",
        "200": "#999999",
        "100": "#DADADA",
        "50": "#F5F8FA"
      }
    },
    fonts: {
      heading: "Poppins",
      body: "Poppins"
    },
    global: {
      body: {
        bg: "grey.50",
        color: "gray.400"
      }
    }
  }
});
