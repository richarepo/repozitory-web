import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import SplitAnimation from "./SplitAnimation";
import appDevelopment from "../../../assets/service/appDevelopment.png";
import useAttachEvent from "../../../helpers/hooks/useAttachEvent";

const MobileDevelopmentService = () => {
  useAttachEvent("mobileAppSide1", "mobileAppSide2", 3000);
  return (
    <Box position="initial" className="mobile-section">
      <SplitAnimation
        sides={["mobileAppSide1", "mobileAppSide2"]}
        bgColor={"#fff"}
      >
        <Flex
          className="video"
          display="flex"
          flexDirection="row"
          alignItems="center"
          minH="93vh"
          color={"gray.900"}
        >
          <Image
            src={appDevelopment}
            alt="appDevelopment.png"
            width={719}
            height={700}
          />
          <Flex
            w={"50%"}
            flexDir={"column"}
            alignItems={"flex-end"}
            textAlign={"right"}
            p={"2rem 2rem"}
          >
            <Text
              color={"orange.400"}
              fontSize="60px"
              fontWeight="bold"
              lineHeight="60px"
            >
              MOBILE APP DEVELOPMENT
            </Text>

            <Text fontSize="25px" lineHeight={"taller"}>
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
