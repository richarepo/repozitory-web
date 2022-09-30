/** @format */

import React from "react";
import { Box, Divider, Flex, Text, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import SuperHeroImage from "../../../assets/section/superhero.webp";

const fontStyle = { base: "3xl", md: "4xl", lg: "5xl" };
const specifications = [
  "Product management",
  "Quality of service",
  "Product design",
];

const Specification = () => {
  return (
    <Flex mt="10%">
      {specifications.map((specification, index) => {
        return (
          <Flex key={index}>
            <Text as="span">{specification}</Text>{" "}
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
  return (
    <Box h={"90vh"}>
      <Flex
        justifyContent="space-between"
        flexDir={{ base: "column-reverse", md: "row" }}
      >
        <Box
          pl="10%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          position="relative"
        >
          <Text
            className="hero-animation-main-text"
            fontSize={fontStyle}
            fontWeight="bold"
            color="#3d3d3d"
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
              color="#3d3d3d"
              ml="10px"
            >
              focused
            </Text>
          </Flex>
          <Specification />
        </Box>
        <Box height={{ base: "100%", sm: "70%", md: "50%" }}>
          <Image
            src={SuperHeroImage}
            height="700"
            width="600"
            alt="superhero"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
