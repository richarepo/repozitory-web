/** @format */

import React from "react";
import { Box, Text } from "@chakra-ui/react";
import CompanyService from "./CompanyService";
import { Controller, Scene } from "react-scrollmagic";
import MobileDevelopmentService from "./MobileDevelopmentService";
import UiUxService from "./UiUxService";
import QualityAssurance from "./QualityAssurance";
import useColorManager from "../../../../helpers/hooks/useColorManager";

const Services = () => {
    const { textColor } = useColorManager();
  return (
    <Box id="services" px="10%" my="6%" data-inviewport="scale-in">
      <Text
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        fontWeight="bold"
        color={textColor}
        textAlign={"center"}
      >
        What we do..
      </Text>
      <Controller>
        <Scene duration={6000} pin={{ pushFollowers: true }} offset={310}>
          <Box position="relative">
            <CompanyService />
            <MobileDevelopmentService />
            <UiUxService />
            <QualityAssurance />
          </Box>
        </Scene>
      </Controller>
    </Box>
  );
};

export default Services;
