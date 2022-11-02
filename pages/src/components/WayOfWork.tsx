/** @format */

import React from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import ProgrammerImage from "../../../assets/section/programmer2.png";
import { ALL_REPOZITORY_WAYS } from "../../../helpers/constant";
import handleViewport from "react-in-viewport";
import useColorManager from "../../../helpers/hooks/useColorManager";

const generateIcon = (data: any, iconBg: string) => {
  const Data = data;
  return <Data w={8} h={8} color={iconBg} />;
};

const WayOfWork = (props: { inViewport: boolean; forwardedRef: any }) => {
  const { inViewport, forwardedRef } = props;
  const { TEXT_COLOR, WHITE_TO_BLACK, OFF_WHITE } = useColorManager();

  return (
    <Box mb="13%">
      <Container mb="11%">
        <Text
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color={TEXT_COLOR}
          textAlign={"center"}
        >
          The{" "}
          <Text as="span" borderBottom="4px" borderColor="#316CB4" pb="5px">
            Repozitory Way
          </Text>
        </Text>

      </Container>
      <Flex justifyContent="space-between" align={"center"}>
        <Box display={{ base: "none", md: "block" }}>
          <Image
            src={ProgrammerImage}
            height="500"
            width="500"
            alt="programmer"
          />
        </Box>
        <Box
          bgColor={"#316CB4"}
          w={{ base: "100%", md: "68%" }}
          py={{ base: "5%" }}
          px={{ base: "3%" }}
          boxSizing="border-box"
          h={{ md: "75vh" }}
          borderTopStartRadius={{ base: "0px", md: "200px" }}
          position="relative"
          ref={forwardedRef}
          display={{ base: "flex", md: "block" }}
          flexWrap={{ base: "wrap" }}
        >
          {inViewport &&
            ALL_REPOZITORY_WAYS.map(
              (
                { label, icon, iconBg, iconColor, ...rest }: any,
                index: number
              ) => {
                return (
                  <Box
                    p="2%"
                    boxSizing="border-box"
                    mt={{ base: "3%" }}
                    ml={{ base: "15px" }}
                    borderRadius="15px"
                    bgColor={WHITE_TO_BLACK}
                    shadow="md"
                    position={{ md: "absolute" }}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    {...rest}
                    minW={{ base: "200px", md: "230px" }}
                    maxW={{ base: "200px", md: "230px" }}
                    minH={"200px"}
                    maxH={"200px"}
                    key={index}
                    className={`way-of-works-div${index}`}
                  >
                    <Box
                      p={{ base: "10px 15px", md: "20px 25px" }}
                      boxSizing="border-box"
                      bgColor={iconBg}
                      w="fit-content"
                      borderRadius="5px"
                    >
                      {generateIcon(icon, iconColor)}
                    </Box>
                    <Text align={"center"} mt={"20px"} color={OFF_WHITE}>
                      {label}
                    </Text>
                  </Box>
                );
              }
            )}
        </Box>
      </Flex>
    </Box>
  );
};

export default handleViewport(WayOfWork);
