/** @format */

import React from "react";
import { Box, Grid, Text } from "@chakra-ui/react";
import { WHY_ORGANISATION_OPTIONS } from "../../../../helpers/constant";
import SuccessStoryCard from "./SuccessStoryCard";

const WhyOrganisation = () => {
  return (
    <Box px="10%" my="4%" data-inviewport="scale-in">
      <Text fontSize="5xl" fontWeight="bold" color="#3d3d3d">
        Why Organizations{" "}
        <Text as="span" borderBottom="4px" borderColor="#ffae1a">
          Choose Repozitory
        </Text>
      </Text>
      <Text color="#3d3d3d" fontSize="20px">
        Discover the many ways in which our clients have embraced the benefits
        of Simform way of engineering.
      </Text>
      <Grid mt="5%" px="5%" templateColumns="repeat(2, 1fr)" gap={6}>
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
