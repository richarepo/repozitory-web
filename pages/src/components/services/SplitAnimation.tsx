/** @format */

import { Box } from "@chakra-ui/react";
import React from "react"; 

const SplitAnimation = ({ sides, bgColor, children }: any) => {
  return !!sides && sides.length && sides.map((side: string, index: number) => {
    return (
      <Box
        key={index}
        bgColor={bgColor || "#FFDB58"}
        minH="93vh"
        className="side"
        id={side}
      >
        {children}
      </Box>
    );
  });
};

export default SplitAnimation;
