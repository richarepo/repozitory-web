import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import useAttachEvent from "../../../helpers/hooks/useAttachEvent";
import SplitAnimation from "./SplitAnimation";
import uiUx from "../../../assets/service/uiUx.png";

const UiUxService = () => {
  useAttachEvent("uiUxSide1", "uiUxSide2", 4500);
  return (
    <Box position="initial" className="ui-ux-section">
      <SplitAnimation sides={["uiUxSide1", "uiUxSide2"]} bgColor={"#fff"}>
        <Flex
          className="video"
          display="flex"
          flexDirection="row"
          alignItems="center"
          minH="93vh"
          color={"gray.900"}
        >
          <Flex
            w={"50%"}
            flexDir={"column"}
            alignItems={"flex-start"}
            textAlign={"left"}
            p={"2rem 2rem"}
          >
            <Text
              color={"orange.400"}
              fontSize="60px" fontWeight="bold" lineHeight="60px"
              maxWidth={"50%"}
            >
              UI/ UX DESIGN
            </Text>

            <Text fontSize="25px" lineHeight={"taller"}>
              Mobile app development services are incomplete if your app is not
              responsive and web-enabled. We customise solutions to work
              seamlessly on multiple platforms and provide a consistent,
              dazzling experience to users regardless of the device.
            </Text>
          </Flex>
          <Image src={uiUx} alt="uiUx.png" width={719} height={700} />
        </Flex>
      </SplitAnimation>
    </Box>
  );
};

export default UiUxService;