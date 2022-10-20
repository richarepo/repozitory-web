/** @format */

import React from "react";
import { Box } from "@chakra-ui/react";
import ComanyService from "./components/ComanyService";
import { Controller, Scene } from "react-scrollmagic";
import ServicesMainSection from "./components/ServicesMainSection";
import MobileDevelopmentService from "./components/MobileDevelopmentService";
import UiUxService from "./components/UiUxService";
import QualityAssurance from "./components/QualityAssurance";

const Services = () => {
  return (
    <Box>
      <Controller >
        <Scene duration={6000} pin={{ pushFollowers: true }} offset={310}>
          <Box position="relative">
            <ServicesMainSection color="orange" />
            <ComanyService />
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
