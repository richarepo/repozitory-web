/** @format */

import React from "react";
import { Box, Divider, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import SuperHeroImage from "../../assets/section/superhero.webp";

const specifications = ["Product management", "Quality of service", "Product design"];

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
      <Flex justifyContent="space-between">
        <Box
          pl="10%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          position="relative"
        >
          <Text className="hero-animation-main-text" fontSize="5xl" fontWeight="bold" color="#3d3d3d">
            Users Centric
          </Text>
          <Flex align="center" ml="-18px">
          <Box className="list-container">
            <UnorderedList className="_list">
              <Text fontSize="5xl" fontWeight="bold" color="red" className="item">Performance</Text>
              <Text fontSize="5xl" fontWeight="bold" color="blue" className="item">Scalability</Text>
              <Text fontSize="5xl" fontWeight="bold" color="green" className="item">Reliability</Text>
              <Text fontSize="5xl" fontWeight="bold" color="brown" className="item">Availability</Text>
            </UnorderedList>
          </Box>
          <Text fontSize="5xl" fontWeight="bold" color="#3d3d3d" ml="10px">
            focused
            </Text>
            </Flex>
          <Specification />
        </Box>
        <Box>
          <Image src={SuperHeroImage} height="700" width="600" />
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
