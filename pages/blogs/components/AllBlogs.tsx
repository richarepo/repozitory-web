import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react'
import { SERVER_URL } from '../../../helpers/constant';
import { imageLoader } from '../../../helpers/imageLoader';
import useColorManager from '../../src/hooks/useColorManager';

type Data = {
  name: string;
};

const AllBlogs = ({blogs}:any) => {
  const { WHITE_LGRAY, offWhite } = useColorManager();

  const getDate = (createdAt: any) => {
    const date = new Date(createdAt);
    return date.toLocaleDateString();
  };

  const blogImage = (image: any) => {
    const blogCardImage = image.replace("size", "760_560");
    return `${SERVER_URL}/${blogCardImage}`;
  };

  return (
    <Flex
        gap={"30px"}
        w={"60%"}
        p={"5% 3% 5% 0"}
        boxSizing={"border-box"}
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
      >
        {blogs.map(
          (
            { category, author, content, image, createdAt }: any,
            index: any
          ) => {
            return (
              <Flex
                key={index}
                bgColor={WHITE_LGRAY}
                flexDir={"column"}
                w={"300px"}
                boxSizing="border-box"
                boxShadow={"lg"}
                borderRadius={"10px"}
              >
                <Image
                  loader={imageLoader}
                  width={300}
                  height={"220px"}
                  src={blogImage(image)}
                  alt="image"
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                />
                <Box
                  ml={"1rem"}
                  h={"30px"}
                  display={"flex"}
                  alignItems={"center"}
                  mb="4%"
                  mt={"2rem"}
                >
                  <Text
                    color={"blue.500"}
                    mr="10px"
                    fontSize="15px"
                    fontWeight="bold"
                  >
                    {category.category}
                  </Text>
                  <Divider orientation="vertical" borderWidth="1px" />
                  <Text
                    color={offWhite}
                    ml="10px"
                    fontSize="15px"
                    fontWeight="bold"
                  >
                    {author.author}
                  </Text>
                </Box>
                <Box ml={"2rem"}>
                  <Text
                    mt={"1rem"}
                    fontWeight={"bold"}
                    fontSize={"25px"}
                    w={"80%"}
                  ></Text>
                  <Text
                    mt={"1rem"}
                    color={"gray.500"}
                    fontSize={"25px"}
                    w={"80%"}
                    dangerouslySetInnerHTML={{ __html: content }}
                  ></Text>
                  <Text mt={"2rem"} fontSize="15px" color="#666" pb={"2rem"}>
                    {getDate(createdAt)}
                  </Text>
                </Box>
              </Flex>
            );
          }
        )}
      </Flex>
  )
}

export default AllBlogs