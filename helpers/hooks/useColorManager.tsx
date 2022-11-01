import React from "react";
import { useColorModeValue } from "@chakra-ui/react";

const color = {
  WHITE: "#fff",
  OFF_WHITE: "#DAD2C5",
  DARK_OFF_WHITE: "#C6BEB1",

  BLACK: "#000000",

  TEXT_GRAY: "gray.600",
  GRAY_800: "gray.800",
  DARK_GRAY: "gray.900",

  BLUE_200: "blue.200",
  BLUE_700: "blue.700",
  DARK_BLUE: "blue.800",

  AZURE: "#227bed",
};

const useColorManager = () => {
  const WHITE_TO_BLACK = useColorModeValue(color.WHITE, color.GRAY_800);
  const WHITE_LIGHT_GRAY = useColorModeValue(color.WHITE, color.GRAY_800);
  const TEXT_COLOR = useColorModeValue(color.DARK_GRAY, color.TEXT_GRAY);
  const OFF_WHITE = useColorModeValue(color.BLACK, color.OFF_WHITE);
  const DARK_OFF_WHITE = useColorModeValue(color.BLACK, color.DARK_OFF_WHITE);
  const DARK_BLUE = useColorModeValue(color.BLUE_200, color.DARK_BLUE);
  const BLUE = useColorModeValue(color.AZURE, color.BLUE_700);
  const BLACK_WHITE = useColorModeValue(color.BLACK, color.WHITE);
  return {
    WHITE_LIGHT_GRAY,
    WHITE_TO_BLACK,
    TEXT_COLOR,
    OFF_WHITE,
    DARK_OFF_WHITE,
    DARK_BLUE,
    BLUE,
    BLACK_WHITE,
  };
};

export default useColorManager;
