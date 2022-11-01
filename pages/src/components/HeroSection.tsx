/** @format */

import React from "react";
import { Box, Divider, Flex, Text, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import DashboardImage from "../../../assets/section/Dashboard-02.png";
import useColorManager from "../../../helpers/hooks/useColorManager";

const fontStyle = { base: "3xl", md: "4xl", lg: "5xl" };
const specifications = [
  "Product management",
  "Quality of service",
  "Product design",
];

const Specification = () => {
   const {OFF_WHITE}=useColorManager()
  return (
    <Flex className="specification" mt="10%">
      {specifications.map((specification, index) => {
        return (
          <Flex key={index}>
            <Text as="span" color={OFF_WHITE}>
              {specification}
            </Text>{" "}
            {index + 1 < specifications.length && (
              <Divider orientation="vertical" mx="5px" borderColor={"black"} />
            )}
          </Flex>
        );
      })}
    </Flex>
  );
};

const HeroSection = () => {
  const {TEXT_COLOR}=useColorManager();
  return (
    <Box minH={"90vh"} className="hero-main-section" display="flex" alignItems="center"> 
      <Box
        pl="10%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        position="relative"
        className="animation-main-section"
      >
        <Text
          className="hero-animation-main-text"
          fontSize={fontStyle}
          fontWeight="bold"
          color={TEXT_COLOR}
        >
          Users Centric
        </Text>
        <Flex align="center" ml="-18px">
          <Box className="list-container">
            <UnorderedList
              fontWeight="bold"
              fontSize={fontStyle}
              className="_list"
            >
              <Text color="red" className="item">
                Performance
              </Text>
              <Text color="blue" className="item">
                Scalability
              </Text>
              <Text color="green" className="item">
                Reliability
              </Text>
              <Text color="brown" className="item">
                Availability
              </Text>
            </UnorderedList>
          </Box>
          <Text
            fontSize={fontStyle}
            fontWeight="bold"
            color={TEXT_COLOR}
            ml="10px"
          >
            focused
          </Text>
        </Flex>
        <Specification />
      </Box>
      <Box className="hero-section-main-image">
        <Image src={DashboardImage} alt="laptop-image" />
      </Box>
    </Box>
  );
};

export default HeroSection;
