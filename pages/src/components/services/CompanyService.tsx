/** @format */

import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import useAttachEvent from "../../../../helpers/hooks/useAttachEvent";
import SplitAnimation from "./SplitAnimation";
import Image from "next/image";
import webDevelopment from '../../../../assets/service/webDevelopment.png'

const CompanyService = () => {
  useAttachEvent("deatilside1", "deatilside2", 3200);

  return (
    <Box
      position={{ base: "inherit", lg: "initial" }}
      className="detail-section"
    >
      <SplitAnimation sides={["deatilside1", "deatilside2"]} bgColor={"#fff"}>
        <Flex
          className="video"
          display={{ base: "", lg: "flex" }}
          flexDirection={{ base: "column", lg: "row" }}
          alignItems={{ lg: "center" }}
          minH="93vh"
          color={"gray.900"}
        >
          <Flex
            w={"50%"}
            flexDir={{ lg: "column" }}
            alignItems={{ lg: "left" }}
            p={"2rem 2rem"}
          >
            <Text
              color={"orange.400"}
              fontWeight="bold"
              fontSize={{ base: "px", md: "35px", lg: "40px" }}
              lineHeight={{ base: "30px", md: "45px", lg: "60px" }}
              maxWidth={"70%"}
            >
              WEB DEVELOPMENT
            </Text>

            <Text
              fontSize={{ base: "18px", lg: "20px" }}
              lineHeight={{ base: "30px", md: "45px", lg: "40PX" }}
            >
              Mobile app development services are incomplete if your app is not
              responsive and web-enabled. We customise solutions to work
              seamlessly on multiple platforms and provide a consistent,
              dazzling experience to users regardless of the device.
            </Text>
          </Flex>
          <Image
            src={webDevelopment}
            alt="webDevelopment.png"
            width={520}
            height={650}
          />
        </Flex>
      </SplitAnimation>
    </Box>
  );
};

export default CompanyService;
