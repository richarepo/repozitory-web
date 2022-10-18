/** @format */

import React from "react";
import { Box, Grid, Text, useColorModeValue } from "@chakra-ui/react";
import { WHY_ORGANISATION_OPTIONS } from "../../../../helpers/constant";
import SuccessStoryCard from "./SuccessStoryCard";
import useColorManager from "../../hooks/useColorManager";

const WhyOrganisation = () => {
const {textColor}=useColorManager()
  return (
    <Box px="10%" my="4%" data-inviewport="scale-in">
      <Text
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        fontWeight="bold"
        color={textColor}
      >
        Why Organizations{" "}
        <Text as="span" borderBottom="4px" borderColor="#ffae1a">
          Choose Repozitory
        </Text>
      </Text>
      <Text
        color={textColor}
        mt={{ base: "10px", md: "0px" }}
        fontSize={{ base: "14px", md: "17px", lg: "20px" }}
      >
        Discover the many ways in which our clients have embraced the benefits
        of our way of engineering.
      </Text>
      <Grid
        mt="5%"
        px={{ base: "0%", md: "5%" }}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={6}
      >
        {WHY_ORGANISATION_OPTIONS.map(
          (
            { title, description, logo, benefits, logoWidth, bgColor }: any,
            index: number
          ) => {
            return (
              <SuccessStoryCard
                key={index.toString()}
                title={title}
                desc={description}
                benefits={benefits}
                logo={logo}
                logoWidth={logoWidth}
                bgColor={bgColor}
              />
            );
          }
        )}
      </Grid>
    </Box>
  );
};

export default WhyOrganisation;
