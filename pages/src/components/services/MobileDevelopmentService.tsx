import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import SplitAnimation from "./SplitAnimation";
import appDevelopment from "../../../../assets/service/appDevelopment.png";
import useAttachEvent from "../../../../helpers/hooks/useAttachEvent";

const MobileDevelopmentService = () => {
  useAttachEvent("mobileAppSide1", "mobileAppSide2", 4500);
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
            width={520} height={650}
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
              fontSize={{base:"px",md:"35px",lg:"40px"}}
              lineHeight={{base:"30px",md:"45px",lg:"60px"}}
              fontWeight="bold"
            >
              MOBILE APP DEVELOPMENT
            </Text>

            <Text fontSize={{base:"18px",lg:"20px" }} lineHeight={{base:"30px",md:"45px",lg:"40PX"}}>
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
