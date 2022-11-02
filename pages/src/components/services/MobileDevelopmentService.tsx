import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import SplitAnimation from "./SplitAnimation";
import appDevelopment from "../../../../assets/service/appDevelopment.png";
import useAttachEvent from "../../../../helpers/hooks/useAttachEvent";
import useColorManager from "../../../../helpers/hooks/useColorManager";

const MobileDevelopmentService = () => {
  const {OFF_WHITE}=useColorManager();
  useAttachEvent("mobileAppSide1", "mobileAppSide2", 4500);
  return (
    <Box position="initial" className="mobile-section" px="3%">
      <SplitAnimation
        sides={["mobileAppSide1", "mobileAppSide2"]}
        bgColor={"#fff"}
      >
        <Flex
          className="video"
          display="flex"
          flexDirection="row"
          minH="93vh"
          color={"gray.900"}
          px="4rem"
        >
          <Image
            src={appDevelopment}
            alt="appDevelopment.png"
            width={612} height={650}
          />
          <Flex
            w={"50%"}
            flexDir={"column"}
            alignItems={"flex-end"}
            textAlign={"right"}
          >
            <Text
              color={"#316CB4"}
              fontSize={{ base: "20px", md: "25px", lg: "30px" }}
              lineHeight={{base:"30px",md:"30px",lg:"60px"}}
              fontWeight="bold"
            >
              Mobile App Development
            </Text>

            <Text  pl="2rem" fontSize={{base:"18px",lg:"20px" }} lineHeight={{ base: "25px", md: "30px", lg: "30px" }} color={OFF_WHITE} mt="1rem">
              Android, iOS and native apps with multi-platform compatibility and
              appealing UI/UX is our topmost mobile app development service. We
              identify the best choice for your project. We adapt fast and
              evolve faster to create impactful apps.
            </Text>
          </Flex>
        </Flex>
      </SplitAnimation>
    </Box>
  );
};

export default MobileDevelopmentService;
