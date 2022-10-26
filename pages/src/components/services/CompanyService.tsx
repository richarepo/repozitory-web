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
    <Box position="initial" className="detail-section">
      <SplitAnimation
        sides={["deatilside1", "deatilside2"]}
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
          <Flex
            w={"50%"}
            flexDir={"column"}
            alignItems={"left"}
            p={"2rem 2rem"}
          >
            <Text color={"orange.400"} fontSize={{base:"30px",md:"45px",lg:"60px"}} fontWeight="bold" lineHeight={{base:"30px",md:"45px",lg:"60px"}} maxWidth={"70%"}>
              WEB DEVELOPMENT
            </Text>

            <Text fontSize={{base:"18px",lg:"25px" }} lineHeight={{base:"30px",md:"45px",lg:'taller'}}>
              Mobile app development services are incomplete if your app is not
              responsive and web-enabled. We customise solutions to work
              seamlessly on multiple platforms and provide a consistent,
              dazzling experience to users regardless of the device.
            </Text>
          </Flex>
          <Image src={webDevelopment} alt="webDevelopment.png" width={575} height={650} />
        </Flex>
      </SplitAnimation>
    </Box>
  );
};

export default CompanyService;
