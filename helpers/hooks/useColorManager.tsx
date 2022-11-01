import React from "react";
import { useColorModeValue } from "@chakra-ui/react";

const color={
  WHITE:"#fff", 
  OFF_WHITE:"#DAD2C5",
  DARK_OFF_WHITE:"#C6BEB1",
  GHOST_WHITE:"#f2f6f8",
  
  BLACK:"#000000",
  DARK_CHARCOAL:"#333",

  TEXT_GRAY:"gray.600",
  GRAY_700:"gray.700",
  GRAY_800:"gray.800",
  DARK_GRAY:"gray.900",

  BLUE_200:"blue.200",
  BLUE_700:"blue.700",
  DARK_BLUE:"blue.800",

  AZURE:"#227bed",
}

const useColorManager = () => {
  const bgWtG  = useColorModeValue(color.WHITE, color.GRAY_800);
  const WHITE_LIGHT_GRAY=useColorModeValue(color.WHITE,"gray.800");
  const textColor= useColorModeValue(color.DARK_GRAY,color.TEXT_GRAY);
  const offWhite =useColorModeValue(color.BLACK,color.OFF_WHITE)
  const darkOffWhite=useColorModeValue(color.BLACK,color.DARK_OFF_WHITE)
  const darkBlue=useColorModeValue(color.BLUE_200,color.DARK_BLUE)
  const blue=useColorModeValue(color.AZURE,color.BLUE_700)
  const BLACK_GRAY=useColorModeValue(color.DARK_CHARCOAL,color.TEXT_GRAY)
  const BLACK_DGRAY=useColorModeValue(color.DARK_CHARCOAL,color.DARK_GRAY)
  const LGRAY_DGRAY=useColorModeValue(color.GHOST_WHITE,color.GRAY_700)
  const LGRAY_BLACK=useColorModeValue(color.GHOST_WHITE,color.GRAY_800)
  const BLACK_WHITE=useColorModeValue(color.BLACK,color.WHITE)
  return {WHITE_LIGHT_GRAY, bgWtG,LGRAY_BLACK,textColor,offWhite ,darkOffWhite,darkBlue,blue,BLACK_GRAY,LGRAY_DGRAY,BLACK_DGRAY,BLACK_WHITE};
};

export default useColorManager;