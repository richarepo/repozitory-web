import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import useColorManager from "../../src/hooks/useColorManager";

const MernTech = () => {
  const { LGRAY_BLACK, WHITE_LGRAY, BLACK_WHITE, textColor } =
    useColorManager();
  return (
    <Box
      bgColor={LGRAY_BLACK}
      p={"5% 10%"}
      boxSizing={"border-box"}
      color={textColor}
    >
      <Text fontSize={"25px"} fontWeight={"bold"}>
        Mern Technology
      </Text>
      <Text fontSize={"20px"} mt={"10px"}>
        Technology is a useful servant but a dangerous master.
      </Text>
      <Flex>
        <Flex
          mt={"1rem"}
          ml={"1rem"}
          h={"140px"}
          alignItems={"center"}
          bgColor={WHITE_LGRAY}
          borderRadius={"14px"}
        >
          <Image
            w="140px"
            h="142px"
            src="https://cdn.pixabay.com/photo/2018/08/26/14/38/city-3632431__340.jpg"
            alt="image"
            borderTopLeftRadius="15px"
            borderBottomLeftRadius="15px"
          />
          <Box ml={"10px"} p={"5px"}>
            <Heading as="h6" size="md" color={BLACK_WHITE}>
              Mern Technology
            </Heading>
            <Text fontSize="15px">MERN stands for MongoDB... </Text>
          </Box>
        </Flex>

        <Flex
          ml={"2rem"}
          mt={"1rem"}
          h={"140px"}
          alignItems={"center"}
          bgColor={WHITE_LGRAY}
          borderRadius={"15px"}
        >
          <Image
            width={"140px"}
            height={"142px"}
            src="https://cdn.pixabay.com/photo/2018/08/26/14/38/city-3632431__340.jpg"
            alt={"image"}
            borderTopLeftRadius={"15px"}
            borderBottomLeftRadius={"15px"}
          />
          <Box ml={"10px"} p={"5px"}>
            <Heading as={"h6"} size={"md"} color={BLACK_WHITE}>
              Mern Technology
            </Heading>
            <Text fontSize={"15px"}>MERN stands for MongoDB... </Text>
          </Box>
        </Flex>

        <Flex
          mt={"1rem"}
          ml={"2rem"}
          h={"140px"}
          alignItems={"center"}
          bgColor={WHITE_LGRAY}
          borderRadius={"15px"}
        >
          <Image
            w="140px"
            h="142px"
            src="https://cdn.pixabay.com/photo/2018/08/26/14/38/city-3632431__340.jpg"
            alt="image"
            borderTopLeftRadius="15px"
            borderBottomLeftRadius="15px"
          />
          <Box ml={"10px"} p={"5px"}>
            <Heading as={"h6"} size={"md"} color={BLACK_WHITE}>
              Mern Technology
            </Heading>
            <Text fontSize={"15px"}>MERN stands for MongoDB... </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MernTech;
