/** @format */

import React from "react";
import { Box, Text } from "@chakra-ui/react";
import ComanyService from "./components/ComanyService";
import { Controller, Scene } from "react-scrollmagic";
import ServicesMainSection from "./components/ServicesMainSection";

const Services = () => {
  return (
    <Box>
      <Controller>
        <Scene duration={10000} pin={{ pushFollowers: true }} offset={310}>
          <Box position="relative">
            <ServicesMainSection color="orange" />
            <ComanyService />
          </Box>
        </Scene>
      </Controller>
    </Box>
  );
};

export default Services;
