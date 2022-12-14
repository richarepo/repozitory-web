/** @format */

import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import useAttachEvent from "../../../../helpers/hooks/useAttachEvent";
import SplitAnimation from "./SplitAnimation";

const ServicesMainSection = ({ color }: any) => {
  useAttachEvent("side1", "side2", 3000);
  return (
    <Box className="animation-section" width="100%" height="100%">
      <SplitAnimation sides={["side1", "side2"]} bgColor={color}>
        <Flex
          className="video"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minH="93vh"
        >
          <Text fontSize={{base:"60px",md:"100px",lg:"135px"}} fontWeight="bold" lineHeight="70px">
            We are the
          </Text>
          <Text fontSize={{base:"60px",md:"100px",lg:"135px"}} fontWeight="bold">
            Leaders
          </Text>
          <Text fontSize={{base:"35px",md:"30px",lg:"35px"}}>With Our Innovative Services</Text>
          <Text fontSize={{base:"35px",md:"30px",lg:"35px"}}>Your Brand Will Reach New Heights!</Text>
          <Button mt="30px" colorScheme="red">
            EXPLORE NOW
          </Button>
        </Flex>
      </SplitAnimation>
    </Box>
  );
};

export default ServicesMainSection;
