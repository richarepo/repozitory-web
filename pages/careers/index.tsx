import React from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Select,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import careerMain from "../../assets/career/office.png";
import { CAREER_INFO } from "../../helpers/constant";

const Career = () => {
  return (
    <>
      <Box bgColor={"#EBE8E8"}>
        <Flex justifyContent={"space-between"} pl={"10rem"} pt={"5rem"}>
          <Image
            src={careerMain}
            alt="career"
            width={320}
            height={400}
            style={{
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "30px",
              borderBottomLeftRadius: "30px",
            }}
          />
          <Flex
            flexDir={"column"}
            bgColor={"#fff"}
            w={"680px"}
            h={"400px"}
            justifyContent={"center"}
            alignItems={"center"}
            borderBottomLeftRadius={"30px"}
          >
            <Box w={"70%"}>
              <Heading textAlign={"right"}>Lorem Ipsum is simply</Heading>
              <Text mt={"1rem"} w={"100%"}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industries standard dummy
                text
              </Text>
            </Box>
          </Flex>
        </Flex>

        {/* life at repozitory */}
        <Box mt={"5rem"}>
          <Heading textAlign={"left"} pl={"10rem"}>
            Life at repozitory
          </Heading>
          {CAREER_INFO.map((j, i) => (
            <Flex
              key={i}
              mt={"3rem"}
              justifyContent={"space-evenly"}
              p={"0 10rem"}
              style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
            >
              <Image
                src={j.images}
                alt="two_guys"
                height={350}
                width={350}
                style={{ borderRadius: "2rem" }}
              />
              <Flex
                flexDir={"column"}
                w={"50%"}
                justifyContent={"center"}
                style={{ textAlign: i % 2 === 0 ? "right" : "left" }}
              >
                <Heading as={"h5"}>{j.heading}</Heading>
                <Text py={"3rem"}>{j.subheading}</Text>
              </Flex>
            </Flex>
          ))}
        </Box>

        {/* vacancy section */}

        <FormControl
          display={"flex"}
          flexDir={"column"}
          mt={"5rem"}
          pb={"5rem"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex
            width={"100%"}
            className="form-career"
            justifyContent={"space-evenly"}
            mb={"2rem"}
          >
            <Flex flexDir={"column"}>
              <Text fontSize={"25px"} fontWeight={"bold"}>
                Departments
              </Text>
              <Select bgColor={"#E8E8E8"} placeholder="Select Departments">
                <option>IT</option>
                <option>CSE</option>
                <option>MBA</option>
                <option>Non-IT</option>
                <option>Other</option>
              </Select>
            </Flex>
            <Flex flexDir={"column"}>
              <Text fontSize={"25px"} fontWeight={"bold"}>
                Qualification
              </Text>
              <Select bgColor={"#E8E8E8"} placeholder="Select Qualification">
                <option>MCA</option>
                <option>BCA</option>
                <option>B.TECH</option>
                <option>Other</option>
              </Select>
            </Flex>
            <Flex flexDir={"column"}>
              <Text fontSize={"25px"} fontWeight={"bold"}>
                Locations
              </Text>
              <Select bgColor={"#EBE8E8;"} placeholder="Select Locations">
                <option>Hisar</option>
                <option>Gurgaon</option>
                <option>Other</option>
              </Select>
            </Flex>
          </Flex>
          <Button w={"15%"} color={"#fff"} bgColor={"#316DB8"} type="submit">
            Submit
          </Button>
        </FormControl>
      </Box>
    </>
  );
};
export default Career;
