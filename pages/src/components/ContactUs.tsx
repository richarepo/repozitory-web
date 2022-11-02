/** @format */

import React, { useState } from "react";
import {
  Box,
  Flex,
  Input,
  Text,
  Textarea,
    Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import { CONTACT_INFO, SERVER_URL } from "../../../helpers/constant";
import useColorManager from "../../../helpers/hooks/useColorManager";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const {TEXT_COLOR,WHITE_TO_BLACK,DARK_OFF_WHITE,BLACK_WHITE}=useColorManager();

  const ContactHeading = () => {
    return (
      <>
        {CONTACT_INFO.map(({ heading, Icon, content }: any, index: any) => {
          return (
            <Box key={index} color={WHITE_TO_BLACK}>
              <Flex alignItems={{ base: "center", lg: "flex-end" }} mt="10%">
                <Box fontSize={{ base: "20px", lg: "30px" }}>
                  {" "}
                  <Icon color="#316CB4" />
                </Box>
                <Text
                  ml="5px"
                  fontSize={{ base: "20px", lg: "23px" }}
                  fontWeight="light"
                  color={TEXT_COLOR}
                >
                  {heading}
                </Text>
              </Flex>
              <Flex color={DARK_OFF_WHITE} mt="3%">
                <Text>{content}</Text>
              </Flex>
            </Box>
          );
        })}
      </>
    )
  };
 

  const handleSubmit = async (event: any) => {
    const response = await fetch(`${SERVER_URL}/api/contact`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        country: country,
        phone: phone,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
  };


  return (
    <Box
      bgColor={WHITE_TO_BLACK}
      p={"5%"}
      display="flex"
      flexDir={{ base: "column", md: "row" }}
      alignItems={{ base: "center", md: "flex-start" }}
      id="contact_us"
    >
      <Box w={{ lg: "40%", md: "100%" }}>
        <Text
          fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}
          fontWeight="bold"
          color={TEXT_COLOR}
        >
          Reach Us
        </Text>
        <ContactHeading />
      </Box>

      <Box w={{ lg: "60%", md: "100%", sm: "100%" }}>
        <Text
          pb={"2rem"}
          fontSize={{ base: "1xl", md: "2xl", lg: "4xl" }}
          fontWeight="bold"
          color={TEXT_COLOR}
        >
          Get in touch with us!
        </Text>
        <form method="post" onSubmit={handleSubmit}>
          <Flex
            flexDir={{ base: "column", md: "column", lg: "row" }}
            gap={{ base: "1rem", lg: "2.5rem" }}
          >
            <Flex
              w={{ lg: "50%", md: "100%" }}
              align={"center"}
              gap={{ base: "7px", lg: "12px" }}
            >
              <FormControl isRequired>
                <FormLabel color={DARK_OFF_WHITE}>Name</FormLabel>
                <Input
                  size="sm"
                  color={BLACK_WHITE}
                  variant="flushed"
                  borderColor={"gray.400"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
            </Flex>

            <Flex
              w={{ lg: "50%", md: "100%" }}
              align={"center"}
              gap={{ base: "7px", lg: "12px" }}
            >
              <FormControl isRequired>
                <FormLabel color={DARK_OFF_WHITE}>Email</FormLabel>
                <Input
                  type={"email"}
                  size="sm"
                  variant="flushed"
                  color={BLACK_WHITE}
                  borderColor={"gray.400"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </Flex>
          </Flex>
          <Flex
            mt={{ base: "1rem", md: "25px", lg: "25px" }}
            flexDir={{ base: "column", md: "column", lg: "row" }}
            gap={{ base: "1rem", lg: "2.5rem" }}
          >
            <Flex
              w={{ lg: "50%", md: "100%" }}
              align={"center"}
              gap={{ base: "7px", lg: "12px" }}
            >
              <FormControl isRequired>
                <FormLabel color={DARK_OFF_WHITE}>Country</FormLabel>

                <Input
                  size="sm"
                  color={BLACK_WHITE}
                  variant="flushed"
                  borderColor={"gray.400"}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </FormControl>
            </Flex>

            <Flex
              w={{ lg: "50%", md: "100%" }}
              align={"center"}
              gap={{ base: "7px", lg: "12px" }}
            >
              <FormControl isRequired>
                <FormLabel color={DARK_OFF_WHITE}>Phone Number</FormLabel>
                <Input
                  size="sm"
                  color={BLACK_WHITE}
                  variant="flushed"
                  borderColor={"gray.400"}
                  value={phone}
                  pattern="[1-9]{1}[0-9]{9}"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormControl>
            </Flex>
          </Flex>
          <Flex mt="40px" gap={{ base: "7px", lg: "12px" }}>
            <FormControl isRequired>
              <FormLabel color={DARK_OFF_WHITE}>Message</FormLabel>
              <Textarea
                size="sm"
                resize={"vertical"}
                rows={7}
                maxLength={100}
                color={BLACK_WHITE}
                borderColor={"gray.400"}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
               <Box float={"right"}>{message.length}/100</Box>
            </FormControl>
          </Flex>
          <Flex justifyContent="center">
            <Button
              type="submit"
              mt="20px"
              colorScheme="blue"
              w={{ lg: "40%", md: "100%", sm: "80%" }}
            >
              Send
            </Button>
          </Flex>
        </form>
      </Box>
    </Box>
  );
};

export default ContactUs;
