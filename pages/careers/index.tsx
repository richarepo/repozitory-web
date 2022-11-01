import React from "react";

import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Footer from "../src/components/Footer";

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
  return (
    <VStack spacing={4} align="stretch" my="3rem" px="8rem">
      {JOB_POST_NAME.map(({ name, posted_date }: any, index: number) => {
        return (
          <Flex
            key={index}
            h="8rem"
            px="7rem"
            bgColor="gray.100"
            borderRadius="md"
            boxShadow="md"
            align="center"
            justify="space-between"
          >
            <Box fontSize="xl" color="gray.700" fontWeight="bold">
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
  return (
    <Box>
      <Box className="contact-background-image" h="100vh"/>
      <Heading textAlign="center" mt={10}>
        Current Openings
      </Heading>
       <Jobs/>
      <Footer/>
    </Box>
  );
};
export default Career;
