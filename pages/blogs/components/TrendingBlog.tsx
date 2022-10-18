import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import useColorManager from "../../src/hooks/useColorManager";
import { SERVER_URL } from "../../../helpers/constant";
import { imageLoader } from "../../../helpers/imageLoader";

const TrendingBlog = ({ trendingBlog }: any) => {
  const { image, author, category, heading, createdAt, content } = trendingBlog;
  const trendingBlogImage = image.replace("size", "760_560");
  const date = new Date(createdAt);

  const { BLACK_GRAY } = useColorManager();

  return (
    <Box>
      <Flex p={"2% 10%"} boxSizing={"border-box"}>
        <Image
          loader={imageLoader}
          src={`${SERVER_URL}/${trendingBlogImage}`}
          alt={"Blog"}
          width={1000}
          height={"560px"}
        />
        <Box
          ml={"5%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Box>
            <Box h={"30px"} display={"flex"} alignItems={"center"} mb={"5%"}>
              <Text
                color={"blue.500"}
                mr={"10px"}
                fontSize={"25px"}
                fontWeight={"bold"}
              >
                {category.category}
              </Text>
              <Divider orientation={"vertical"} borderWidth={"1px"} />
              <Text
                color={"#666"}
                ml={"10px"}
                fontSize={"25px"}
                fontWeight={"bold"}
              >
                {author.author}
              </Text>
            </Box>
            <Text
              fontSize={"50px"}
              color={BLACK_GRAY}
              fontWeight={"bold"}
              lineHeight={"55px"}
            >
              {heading}
            </Text>
            <Text
              fontSize={"25px"}
              color={BLACK_GRAY}
              lineHeight={"30px"}
              mt={"3%"}
              dangerouslySetInnerHTML={{ __html: content }}
            ></Text>
          </Box>
          <Text fontSize={"20px"} color={BLACK_GRAY} ml={"1.5rem"} mt={"1rem"}>
            {date.toLocaleDateString()}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default TrendingBlog;
