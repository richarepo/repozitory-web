import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import useAttachEvent from "../../../../helpers/hooks/useAttachEvent";
import SplitAnimation from "./SplitAnimation";
import uiUx from "../../../../assets/service/uiUx.png";
import useColorManager from "../../../../helpers/hooks/useColorManager";

const UiUxService = () => {
  const {OFF_WHITE}=useColorManager();
  useAttachEvent("uiUxSide1", "uiUxSide2", 6000);
  return (
    <Box position="initial" className="ui-ux-section">
      <SplitAnimation sides={["uiUxSide1", "uiUxSide2"]} bgColor={"#fff"}>
        <Flex
          className="video"
          display="flex"
          flexDirection="row"
          minH="93vh"
          color={"gray.900"}
          px="4rem"
        >
          <Flex
            w={"50%"}
            flexDir={"column"}
            alignItems={"flex-start"}
            textAlign={"left"}
            px="2rem"
          >
            <Text
              color={"#316CB4"}
              fontSize={{ base: "20px", md: "25px", lg: "30px" }}
              lineHeight={{ base: "30px", md: "45px", lg: "60px" }}
              fontWeight="bold" 
            >
              UI/ UX Design
            </Text>

             <Text fontSize={{base:"18px",lg:"20px" }} lineHeight={{ base: "25px", md: "30px", lg: "30px" }} color={OFF_WHITE} mt="1rem">
              Mobile app development services are incomplete if your app is not
              responsive and web-enabled. We customise solutions to work
              seamlessly on multiple platforms and provide a consistent,
              dazzling experience to users regardless of the device.
            </Text>
          </Flex>
          <Image src={uiUx} alt="uiUx.png" width={612} height={650} />
        </Flex>
      </SplitAnimation>
    </Box>
  );
};

export default UiUxService;