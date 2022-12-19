import React, { useEffect } from 'react';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/react';
import TextTransition, { presets } from "react-text-transition";

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ArrowForwardIcon
} from "@chakra-ui/icons";

import Services from './Services';
import WorkWith from './WorkWith';
import IdeaExecute from './IdeaExecute';
import { SHOW_TEXTS } from '../../../helpers/constant';
import DiscoverImage from "../../../assets/section/discover.png";
import useColorManager from '../../../helpers/hooks/useColorManager';
import HeroSectionImage from "../../../assets/section/hello.jpg";
import SubHeroSection from './SubHeroSection';

const fontStyle = { base: "34px", md: "4xl", lg: "5xl" };

function HeroSection() {
  const { BLUE, OFF_WHITE } = useColorManager();
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);


  return (
    <Box mt={100}>
      <Flex
        mt={50}
        padding={"0px 5%"}
        justifyContent="space-between"
        w={"100%"}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          textAlign={{ base: "center", md: "center", lg: "left" }}
          justifyContent={{ base: "center", md: "center", lg: "left" }}
          alignItems={{ base: "center", md: "center", lg: "baseline" }}
          margin={{ base: "20px 0px 30px 0px", md: "30px 0px 30px 0px", lg: "80px 0px 50px 0px" }}
        >
          <Text
            color={BLUE}
            fontWeight="bold"
            fontSize={{ base: "34px", md: "4xl", lg: "5xl" }}
          >
            Users Centric
          </Text>

          <Flex position={"relative"} display={"flex"} justifyContent={{ base: "center", md: "center", lg: "left" }} >
            <Flex
              fontSize={fontStyle}
              fontWeight="bold"
              color={BLUE}
              ml={"4px"}
              h={{ base: "40px", md: "50px", lg: "4rem" }}
            >
              <TextTransition
                springConfig={presets.gentle}
                style={{ marginRight: "10px", marginLeft: "0px", color: `${SHOW_TEXTS[index % SHOW_TEXTS.length].color}`, fontWeight: "bold" }}
                inline
              >
                {SHOW_TEXTS[index % SHOW_TEXTS.length].showingText}
              </TextTransition>
              Focused
            </Flex>
          </Flex>
          <Text
            color={OFF_WHITE}
            fontWeight="400"
            fontSize="16px"
            lineHeight="20px"
            mt={{ base: "20px", md: "30px%", lg: "20px" }}
            mb={"15px"}
            w={{ base: "65%", md: "50%", lg: "100%" }}
          >
            Transforming ideas into reality with cutting-edge web and mobile apps.
          </Text>
          <Box display={"flex"} color={BLUE} alignItems={"center"}>
            <Text marginRight={"10px"} fontSize={"14px"}>DISCOVER MORE </Text> <ArrowForwardIcon />
          </Box>

          {/* <Image
            color={BLUE}
            src={DiscoverImage}
            alt="programmer"
          /> */}
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Image
            src={HeroSectionImage}
            height="500"
            width="500"
            alt="programmer"
          />
        </Box>
      </Flex>
      <Box display={"flex"} justifyContent={"center"} mt={"5%"} mb={"5%"}><SubHeroSection /></Box>
      <Box display={"flex"} justifyContent={"center"} mt={"5%"} mb={"5%"}><IdeaExecute /></Box>
      <Box display={"flex"} justifyContent={"center"} mt={"5%"} mb={"5%"}><WorkWith /></Box>
      <Box display={"flex"} justifyContent={"center"} mt={"5%"} mb={"5%"}><Services /></Box>
    </Box>
  )
}

export default HeroSection

