/** @format */

import React from "react";
import { Box, Grid, Text, useColorMode } from "@chakra-ui/react";
import { WHY_ORGANISATION_OPTIONS } from "../../../../helpers/constant";
import SuccessStoryCard from "./SuccessStoryCard";
import useColorManager from "../../../../helpers/hooks/useColorManager";

const WhyOrganisation = () => {
  const { TEXT_COLOR } = useColorManager();
  const { colorMode } = useColorMode();
  
  return (
    <Box px="3%" my="4%" data-inviewport="scale-in">
      <Text
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        fontWeight="bold"
        color={TEXT_COLOR}
        textAlign={"center"} 
      >
        Why Organizations{" "}
        <Text as="span" borderBottom="4px" borderColor="blue" pb="5px">
          Choose Repozitory
        </Text>
      </Text>
      <Text
        color={TEXT_COLOR}
        mt={{ base: "10px", md: "0px" }}
        fontSize={{ base: "14px", md: "17px", lg: "20px" }}
        textAlign={"center"}
      >
        Discover the many ways in which our clients have embraced the benefits
        of our way of engineering.
      </Text>
      <Grid
        mt="5%"
        px={{ base: "0%", md: "5%" }}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={12}
      >
        {WHY_ORGANISATION_OPTIONS.map(
          (
            { title, description, logo, benefits, logoWidth, bgColor, height }: any,
            index: number
          ) => {
            return (
              <SuccessStoryCard
                key={index.toString()}
                title={title}
                desc={description}
                benefits={benefits}
                logo={logo}
                height={height}
                logoWidth={logoWidth}
                bgColor={colorMode === 'light'? bgColor : "gray.700"}
              />
            );
          }
        )}
      </Grid>
    </Box>
  );
};

export default WhyOrganisation;
