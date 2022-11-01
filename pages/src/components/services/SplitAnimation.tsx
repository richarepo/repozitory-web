/** @format */

import { Box } from "@chakra-ui/react";
import React from "react"; 
import useColorManager from "../../../../helpers/hooks/useColorManager";

const SplitAnimation = ({ sides, bgColor, children }: any) => {
const {WHITE_LIGHT_GRAY}=useColorManager();
  return !!sides && sides.length && sides.map((side: string, index: number) => {
    return (
      <Box
        key={index}
        bgColor={WHITE_LIGHT_GRAY || "#FFDB58"}
        minH={{lg:"93vh"}}
        className={"side"}
        id={side}
      >
        {children}
      </Box>
    );
  });
};

export default SplitAnimation;
