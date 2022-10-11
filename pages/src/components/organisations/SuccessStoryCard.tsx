/** @format */

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Divider } from "@chakra-ui/react";

export interface ICard {
  title: string;
  desc: string;
  logo: any;
  benefits: any[];
  logoWidth?: string;
  bgColor?: string
}

const SuccessStoryCard = ({
  title,
  desc,
  benefits,
  logo,
  logoWidth,
  bgColor,
  ...rest
}: ICard) => {
  return (
    <Box
      className="hoverable-box"
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius={"12px"}
      backgroundColor={bgColor}
      cursor="pointer"
      {...rest}
    >
      <Image height="30px" src={logo} width={`${logoWidth}px`} alt="icon" />
      <Heading mt="15px" fontSize="24px" color="#3d3d3d">
        {title}
      </Heading>
      <Text mt={8}>{desc}</Text>
      <Text mt="10%" mb="2%">
        Results
      </Text>
      <Divider borderColor={"black"} />
      <Flex justifyContent={"space-between"}>
        {!!benefits && benefits.length > 0 && benefits.map(({ label, description }: any, index: number) => {
          return (
            <Box mt="2%" key={index.toString()} maxW={"200px"}>
              <Text fontWeight="bold">{label} </Text>
              <Text mt="1%">{description}</Text>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default SuccessStoryCard;
