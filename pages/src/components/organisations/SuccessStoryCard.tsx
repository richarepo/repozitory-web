/** @format */

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Divider } from "@chakra-ui/react";
import useColorManager from "../../../../helpers/hooks/useColorManager";

export interface ICard {
  title: string;
  desc: string;
  logo: any;
  benefits: any[];
  logoWidth?: string;
  bgColor?: string;
  height?: string;
}

const SuccessStoryCard = ({
  title,
  desc,
  benefits,
  logo,
  logoWidth,
  bgColor,
  height,
  ...rest
}: ICard) => {
  const {DARK_OFF_WHITE} = useColorManager();
  return (
    <Box
      className="hoverable-box"
      p={5}
      shadow="md"
      boxShadow="lg"
      borderRadius={"12px"}
      backgroundColor={bgColor}
      cursor="pointer"
      color={DARK_OFF_WHITE}
      {...rest}
    >
      <Image height={height || "30px"} src={logo} width={`${logoWidth}px`} alt="icon" />
      <Heading mt="15px" fontSize="24px">
        {title}
      </Heading>
      <Text mt={8} >{desc}</Text>
      <Text mt="10%" mb="2%" >
        Results
      </Text>
      <Divider borderColor={"black"} />
      <Flex justifyContent={"space-between"} >
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
