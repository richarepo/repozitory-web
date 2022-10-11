/** @format */

import React from "react";
import {
  Box,
  Flex,
  Input,
  Text,
  Textarea,
  Icon,
  Button,
} from "@chakra-ui/react";
import { FiUser, FiMail, FiGlobe, FiPhoneCall, FiEdit } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import { SiGooglemaps } from "react-icons/si";
import { AiOutlineFieldTime } from "react-icons/ai";

const ContactUs = () => {
  return (
    <Box className="contact-background-image" pl="5%" pr="5%" display="flex">
      <Box w="40%">
        <Text
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="#fff"
        >
          Contact Us
        </Text>

        <Flex alignItems="flex-end" mt="10%">
          <BiPhoneCall fontSize="46px" color="#227bed" />
          <Text ml="5px" fontSize="28px" fontWeight="bold" color="#fff">
            Call Us
          </Text>
        </Flex>
        <Flex color="#fff" mt="3%">
          <Text>1(234)567-890,</Text>
          <Text ml="10px">0(987)654-321</Text>
        </Flex>

        <Flex alignItems="flex-end" mt="10%">
          <SiGooglemaps fontSize="46px" color="#227bed" />
          <Text ml="5px" fontSize="28px" fontWeight="bold" color="#fff">
            Location
          </Text>
        </Flex>
        <Flex color="#fff" mt="3%">
          <Text>Building no. 591, Sector-14 -125001, Hisar (Haryana)</Text>
        </Flex>
        <Flex alignItems="flex-end" mt="10%">
          <AiOutlineFieldTime fontSize="46px" color="#227bed" />
          <Text ml="5px" fontSize="28px" fontWeight="bold" color="#fff">
            Business Hours
          </Text>
        </Flex>
        <Flex color="#fff" mt="3%">
          <Text>Mon-Fri.....9 am-6 pm, Sat-Sun.....Closed</Text>
        </Flex>
      </Box>
      <Box w="60%" mt="5%">
        <Flex>
          <Flex align={"center"}>
            <Icon as={FiUser} w={6} h={6} mx="5px" color="#fff" />
            <Input width="350px" placeholder="Name" size="lg" color="#fff" />
          </Flex>

          <Flex align={"center"} ml="10px">
            <Icon as={FiMail} w={6} h={6} mx="5px" color="#fff" />
            <Input width="350px" placeholder="Email" size="lg" color="#fff" />
          </Flex>
        </Flex>
        <Flex mt="40px">
          <Flex align={"center"}>
            <Icon as={FiGlobe} w={6} h={6} mx="5px" color="#fff" />
            <Input width="350px" placeholder="Country" size="lg" color="#fff" />
          </Flex>

          <Flex align={"center"} ml="10px">
            <Icon as={FiPhoneCall} w={6} h={6} mx="5px" color="#fff" />
            <Input
              width="350px"
              placeholder="Phone number"
              size="lg"
              color="#fff"
            />
          </Flex>
        </Flex>
        <Flex mt="40px">
          <Icon as={FiEdit} w={6} h={6} mx="5px" color="#fff" />
          <Textarea
            placeholder="Message"
            size="lg"
            resize={"vertical"}
            rows={7}
            color="#fff"
          />
        </Flex>
        <Flex justifyContent="center">
          <Button mt="20px" colorScheme="blue" w="40%">
            Send
          </Button>
        </Flex>
      </Box>

      {/* <Box
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
      </Box> */}
    </Box>
  );
};

export default ContactUs;
