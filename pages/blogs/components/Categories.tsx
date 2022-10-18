import { Box, Heading, Text, Divider, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import useColorManager from "../../src/hooks/useColorManager";
import { SERVER_URL } from "../../../helpers/constant";
import { imageLoader } from "../../../helpers/imageLoader";

const Categories = ({ categories, trendingBlog }: any) => {
  const { image, heading } = trendingBlog;
  const trendingBlogImage = image.replace("size", "760_560");
  const { WHITE_LGRAY, BLACK_WHITE, textColor } = useColorManager();

  return (
 
      <Flex flexDir={"column"}>
        <Box pt={"5%"} mt={"2rem"} color={"gray.600"} textAlign={"center"}>
          <Heading as="h3" size="md" color={textColor}>
            {" "}
            CATEGORIES{" "}
          </Heading>
          {categories.map(({ category }: any, index: number) => {
            return (
              <Box>
                <Flex
                  justifyContent={"space-between"}
                  fontSize={"20px"}
                  padding={"15px"}
                >
                  <Text>{category} </Text>
                  <Text>(2)</Text>
                </Flex>
                <Divider />
              </Box>
            );
          })}
        </Box>

        {/* most liked */}

        <Box
          flexDir={"column"}
          color={"gray.600"}
          textAlign={"center"}
          h={"220px"}
        >
          <Heading as="h3" mt={"5rem"} size="md" color={textColor}>
            {" "}
            MOST LIKED{" "}
          </Heading>
          <Flex
            mt={"2rem"}
            ml={"1rem"}
            w="330px"
            alignItems={"center"}
            bgColor={WHITE_LGRAY}
            borderRadius={"15px"}
          >
            <Image
              loader={imageLoader}
              width={300}
              height="220px"
              src={`${SERVER_URL}/${trendingBlogImage}`}
              alt="image"
              style={{
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
              }}
            />
            <Box ml={"10px"} p={"5px"} color={BLACK_WHITE}>
              <Heading as="h6" size="md">
                {heading}
              </Heading>
              <Text fontSize="15px">MERN stands for MongoDB... </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
  );
};

export default Categories;
