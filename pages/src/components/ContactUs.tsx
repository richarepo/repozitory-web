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

import useColorManager from "../../../helpers/hooks/useColorManager";
import { CONTACT_INFO } from "../../../helpers/constant";

const ContactUs = () => {
  const ContactHeading = () => {
    return (
      <>
        {CONTACT_INFO.map(({ heading, Icon, content }: any, index: any) => {
          return (
            <Box key={index}>
              <Flex alignItems={{ base: "center", lg: "flex-end" }} mt="10%">
                <Box fontSize={{ base: "20px", lg: "46px" }}>
                  {" "}
                  <Icon color="#227bed" />
                </Box>
                <Text
                  ml="5px"
                  fontSize={{ base: "20px", lg: "28px" }}
                  fontWeight="bold"
                  color="#fff"
                >
                  {heading}
                </Text>
              </Flex>
              <Flex color="#fff" mt="3%">
                <Text>{content}</Text>
              </Flex>
            </Box>
          );
        })}
      </>
    );
  };

  return (
    <Box
      className="contact-background-image"
      pl="5%"
      pr="5%"
      display="flex"
      flexDir={{ base: "column", md: "row" }}
      alignItems={{ base: "center", md: "flex-start" }}
      id="contact_us"
    >
      <Box w={{ lg: "40%", md: "100%" }}>
        <Text
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="#fff"
        >
          Contact Us
        </Text>
        <ContactHeading />
      </Box>
      <Box w={{ lg: "60%", md: "100%", sm: "100%" }} mt="5%">
        <Flex
          flexDir={{ base: "column", md: "column", lg: "row" }}
          gap={{ base: "1rem", lg: "2.5rem" }}
        >
          <Flex
            w={{ lg: "50%", md: "100%" }}
            align={"center"}
            gap={{ base: "7px", lg: "12px" }}
          >
            <Icon as={FiUser} w={6} h={6} color="#fff" />
            <Input placeholder="Name" size="lg" color="#fff" />
          </Flex>

          <Flex
            w={{ lg: "50%", md: "100%" }}
            align={"center"}
            gap={{ base: "7px", lg: "12px" }}
          >
            <Icon as={FiMail} w={6} h={6} color="#fff" />
            <Input placeholder="Email" size="lg" color="#fff" />
          </Flex>
        </Flex>
        <Flex
          mt={{ base: "1rem", md: "25px", lg: "40px" }}
          flexDir={{ base: "column", md: "column", lg: "row" }}
          gap={{ base: "1rem", lg: "2.5rem" }}
        >
          <Flex
            w={{ lg: "50%", md: "100%" }}
            align={"center"}
            gap={{ base: "7px", lg: "12px" }}
          >
            <Icon as={FiGlobe} w={6} h={6} color="#fff" />
            <Input placeholder="Country" size="lg" color="#fff" />
          </Flex>

          <Flex
            w={{ lg: "50%", md: "100%" }}
            align={"center"}
            gap={{ base: "7px", lg: "12px" }}
          >
            <Icon as={FiPhoneCall} w={6} h={6} color="#fff" />
            <Input placeholder="Phone number" size="lg" color="#fff" />
          </Flex>
        </Flex>
        <Flex mt="40px" gap={{ base: "7px", lg: "12px" }}>
          <Icon as={FiEdit} w={6} h={6} color="#fff" />
          <Textarea
            placeholder="Message"
            size="lg"
            resize={"vertical"}
            rows={7}
            color="#fff"
          />
        </Flex>
        <Flex justifyContent="center">
          <Button
            mt="20px"
            colorScheme="blue"
            w={{ lg: "40%", md: "100%", sm: "80%" }}
          >
            Send
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ContactUs;
