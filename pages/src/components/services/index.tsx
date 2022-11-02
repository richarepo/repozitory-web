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
  const { TEXT_COLOR, WHITE_LIGHT_GRAY } = useColorManager();
  return (
    <Box
      id="services"
      px="3%"
      my="6%"
      data-inviewport="scale-in"
      bgColor={WHITE_LIGHT_GRAY}
    >
      <Text
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        fontWeight="bold"
        color={TEXT_COLOR}
        textAlign={"center"}
      >
        What Are We{" "}
        <Text as="span" borderBottom="4px" borderColor="#316CB4" pb="5px">
          Good At
        </Text>
      </Text>
      <Box mt="5%">
        <Controller>
          <Scene duration={6000} pin={{ pushFollowers: true }} offset={310}>
            <Box position={{ lg: "relative" }} bgColor={WHITE_LIGHT_GRAY}>
              <CompanyService />
              <MobileDevelopmentService />
              <UiUxService />
              <QualityAssurance />
            </Box>
          </Scene>
        </Controller>
      </Box>
    </Box>
  );
};

export default Services;
