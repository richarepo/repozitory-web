import React from "react";
import { useColorModeValue } from "@chakra-ui/react";

const color={
  gray:"gray.700",
  darkGray:"gray.900",
  textGray:"gray.600",
  white:"white.100",
  offWhite:"#DAD2C5",
  darkOffWhite:"#C6BEB1",
  darkBlue:"blue.800"
}

const useColorManager = () => {
  const bgGray  = useColorModeValue("#fff", color.gray);
  const bgWtG  = useColorModeValue("#fff", color.gray);
  const textColor= useColorModeValue("#3d3d3d",color.textGray);
  const offWhite =useColorModeValue("#000000",color.offWhite)
  const darkOffWhite=useColorModeValue("#000000",color.darkOffWhite)
  const darkBlue=useColorModeValue("blue.200",color.darkBlue)
  const blue=useColorModeValue("#227bed","blue.700")
  return { bgGray,bgWtG,textColor,offWhite ,darkOffWhite,darkBlue,blue};
};

export default useColorManager;