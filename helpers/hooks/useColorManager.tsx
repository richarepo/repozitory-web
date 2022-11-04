import React from "react";
import { useColorModeValue } from "@chakra-ui/react";

const color = {
  WHITE: "#fff",
  OFF_WHITE: "#DAD2C5",
  DARK_OFF_WHITE: "#C6BEB1",
  WHITE_ALPHA: "whiteAlpha.100",

  BLACK: "#000000",
  BLACK_ALPHA: "blackAlpha.100",

  GRAY_100:"gray.100",
  GRAY_200: "gray.200",
  TEXT_GRAY: "gray.600",
  GRAY_700: "gray.700",
  GRAY_800: "gray.800",
  DARK_GRAY: "gray.900",

  BLUE_200: "blue.200",
  BLUE_700: "blue.700",
  DARK_BLUE: "blue.800",

  AZURE: "#227bed",
}

const useColorManager = () => {
  const GRAYL_GRAYD = useColorModeValue(color.WHITE,color.GRAY_700)
  const BLACKA_WHITEA = useColorModeValue(color.BLACK_ALPHA,color.WHITE_ALPHA)
  const WHITE_TO_BLACK = useColorModeValue(color.WHITE, color.GRAY_700);
  const WHITE_LIGHT_GRAY = useColorModeValue(color.WHITE, color.GRAY_800);
  const TEXT_COLOR = useColorModeValue(color.DARK_GRAY, color.TEXT_GRAY);
  const OFF_WHITE = useColorModeValue(color.BLACK, color.OFF_WHITE);
  const DARK_OFF_WHITE = useColorModeValue(color.BLACK, color.DARK_OFF_WHITE);
  const DARK_BLUE = useColorModeValue(color.BLUE_200, color.DARK_BLUE);
  const BLUE = useColorModeValue(color.AZURE, color.BLUE_700);
  const BLACK_WHITE = useColorModeValue(color.BLACK, color.WHITE);
  const GRAY_GRAY_200 = useColorModeValue(color.GRAY_700, color.GRAY_800);

  return {
    WHITE_LIGHT_GRAY,
    WHITE_TO_BLACK,
    TEXT_COLOR,
    OFF_WHITE,
    DARK_OFF_WHITE,
    DARK_BLUE,
    BLUE,
    BLACK_WHITE,
    GRAY_GRAY_200,
    BLACKA_WHITEA,
    GRAYL_GRAYD
  };

};

export default useColorManager;
