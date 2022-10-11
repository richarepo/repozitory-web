/** @format */

import { Box } from "@chakra-ui/react";
import React from "react";
import MernTech from "./components/MernTech";
import TrendingBlog from "./components/TrendingBlog";

const Blogs = () => {
  return (
    <Box>
      <TrendingBlog />
      <MernTech />
    </Box>
  );
};

export default Blogs;
