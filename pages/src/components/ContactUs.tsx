/** @format */

import React, { useEffect } from "react";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
  Textarea,
  Icon,
  Button,
} from "@chakra-ui/react";
import { FiUser, FiMail, FiGlobe, FiPhoneCall, FiEdit } from "react-icons/fi";

const ContactUs = () => {
  return (
    <Box className="contact-background-image">
      <Center>
        <Text
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="#fff"
        >
          Contact Us
        </Text>
      </Center>
      <Box
        display={{ md: "flex" }}
        flexDirection={{ md: "column" }}
        alignItems={{ md: "center" }}
        mt={"3%"}
      >
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={6}
          w={{ base: "90%", md: "65%" }}
        >
          <Flex align={"center"}>
            <Icon as={FiUser} w={6} h={6} mx="5px" color="#fff" />
            <Input placeholder="Name" size="lg" color="#fff" />
          </Flex>

          <Flex align={"center"}>
            <Icon as={FiMail} w={6} h={6} mx="5px" color="#fff" />
            <Input placeholder="Email" size="lg" color="#fff" />
          </Flex>

          <Flex align={"center"}>
            <Icon as={FiGlobe} w={6} h={6} mx="5px" color="#fff" />
            <Input placeholder="Country" size="lg" color="#fff" />
          </Flex>

          <Flex align={"center"}>
            <Icon as={FiPhoneCall} w={6} h={6} mx="5px" color="#fff" />
            <Input placeholder="Phone number" size="lg" color="#fff" />
          </Flex>

          <GridItem colSpan={2}>
            <Flex>
              <Icon as={FiEdit} w={6} h={6} mx="5px" color="#fff" />
              <Textarea
                placeholder="Message"
                size="lg"
                resize={"vertical"}
                rows={7}
                color="#fff"
              />
            </Flex>
          </GridItem>
        </Grid>
        <Button mt="20px" colorScheme="blue" w={300}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
