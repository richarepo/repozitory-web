/** @format */

import React from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import SuperHeroImage from "../../assets/section/superhero.webp";
import ProgrammerImage from "../../assets/section/programmer2.png";
import { ALL_REPOZITORY_WAYS } from "../../helpers/constant";
import handleViewport from "react-in-viewport";

const generateIcon = (data: any, iconBg: string) => {
  const Data = data;
  return <Data w={8} h={8} color={iconBg} />;
};

const WayOfWork = (props: { inViewport: boolean; forwardedRef: any }) => {
  const { inViewport, forwardedRef } = props;
  return (
    <Box mb="13%">
      <Container mb="11%">
        <Text fontSize="5xl" fontWeight="bold" color="#3d3d3d">
          The Repozitory Way
        </Text>
        <Image src={SuperHeroImage} height="15vh" width="800" />
      </Container>
      <Flex justifyContent="space-between" align={"center"}>
        <Box>
          <Image src={ProgrammerImage} height="500" width="500" />
        </Box>
        <Box
          bgColor="#227bed"
          w={"68%"}
          h={"75vh"}
          borderTopStartRadius={"200px"}
          position="relative"
          ref={forwardedRef}
        >
          {inViewport && ALL_REPOZITORY_WAYS.map(
            (
              { label, icon, iconBg, iconColor, ...rest }: any,
              index: number
            ) => {
              return (
                <Box
                  p="2%"
                  borderRadius="15px"
                  bgColor="#fff"
                  shadow="md"
                  position="absolute"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  {...rest}
                  minW={"230px"}
                  maxW={"230px"}
                  minH={"200px"}
                  maxH={"200px"}
                  key={index}
                  className={`way-of-works-div${index}`}
                >
                  <Box
                    p="20px 25px"
                    bgColor={iconBg}
                    width="fit-content"
                    borderRadius="5px"
                  >
                    {generateIcon(icon, iconColor)}
                  </Box>
                  <Text align={"center"} mt={"20px"}>
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
