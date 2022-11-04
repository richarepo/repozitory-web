import React from "react";

import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Footer from "../src/components/Footer";
import useColorManager from "../../helpers/hooks/useColorManager";

const JOB_POST_NAME = [
  {
    name: "Content Writer",
    posted_date: "posted 1 months ago",
  },
  {
    name: "MERN",
    posted_date: "posted 1 months ago",
  },
    {
    name: "MEAN",
    posted_date: "posted 1 months ago",
  },
    {
    name: "Product Manager",
    posted_date: "posted 1 months ago",
  },
];

const Jobs = () => {
const {GRAYL_GRAYD}=useColorManager();
  return (
    <VStack spacing={4} align="stretch" my="3rem" px={{base:"4rem",md:"6rem",lg:"8rem"}}>
      {JOB_POST_NAME.map(({ name, posted_date }: any, index: number) => {
        return (
          <Flex
            key={index}
            h={{base:"4rem",md:"6rem",lg:"8rem"}}
            px={{base:"1rem",md:"5rem",lg:"7rem"}}
            bgColor={GRAYL_GRAYD}
            borderRadius="md"
            boxShadow="md"
            align="center"
            justify="space-between"
          >
            <Box fontSize={{base:"15px",md:"18px",lg:"xl"}}fontWeight="bold" color="gray.600">
            <Link href={`/careers/${name}`} >
              {name}
            </Link>
               </Box>
            <Flex color="blue.400">
              <Box pr="10px"><CalendarIcon color="gray.800" /></Box>
              {posted_date}
            </Flex>
          </Flex>
        );
      })}
    </VStack>
  );
};

const Career = () => {
const {TEXT_COLOR}=useColorManager();
  return (
    <Box>
      <Box className="contact-background-image" h="100vh"/>
      <Heading textAlign="center" mt={10} color={'#316CB4'}>
        Current Openings
      </Heading>
       <Jobs/>
      <Footer/>
    </Box>
  );
};
export default Career;
