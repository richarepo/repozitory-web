/** @format */

import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import useAttachEvent from "../../../helpers/hooks/useAttachEvent";
import SplitAnimation from "./SplitAnimation";

const ComanyService = () => {
  useAttachEvent("deatilside1", "deatilside2", 1500);

  return (
    <Box position="initial" className="detail-section">
      <SplitAnimation sides={["deatilside1", "deatilside2"]}>
        <Flex
          className="video"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minH="93vh"
        >
          <Text fontSize="135px" fontWeight="bold" lineHeight="70px">
            We are the
          </Text>
          <Text fontSize="135px" fontWeight="bold">
            Leaders
          </Text>
          <Text fontSize="35px">With Our Innovative Services;</Text>
          <Text fontSize="35px">Your Brand Will Reach New Heights!</Text>
          <Button mt="30px" colorScheme="red">
            EXPLORE NOW
          </Button>
        </Flex>
      </SplitAnimation>
    </Box>
  );
};

export default ComanyService;
