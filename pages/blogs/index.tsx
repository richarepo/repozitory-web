/** @format */

import { Box } from "@chakra-ui/react";
import React from "react";
// import AllBlogs from "./components/AllBlogs";
// import Categories from "./components/Categories";
// import MernTech from "./components/MernTech";
// import TrendingBlog from "./components/TrendingBlog";

const Blogs = () => {
  // const { trendingBlog, categories, blogs } = props;
  return (
    <Box>
      {/* <TrendingBlog trendingBlog={trendingBlog} />
      <MernTech />
      <Flex justifyContent={"center"}>
        <AllBlogs blogs={blogs} />
        <Categories categories={categories} trendingBlog={trendingBlog} />
      </Flex> */}
    </Box>
  );
};

// export const getServerSideProps = async () => {
//   // Fetch data from external API
//   const res: any = await blogData();

//   // Pass data to the page via props
//   return { props: res };
// };

export default Blogs;
