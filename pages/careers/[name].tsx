import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  ListItem,
  OrderedList,
  Text,
  Textarea,
  UnorderedList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import useColorManager from "../../helpers/hooks/useColorManager";

const ApplyNow = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cover, setCover] = useState("");
  
  const { DARK_OFF_WHITE, BLACK_WHITE } = useColorManager();

  const handleSubmit = async (event: any) => {
    event.preventDefault()
  };

  return (
    <Flex
      px="10rem"
      mt="3rem"
      mb="10rem"
      flexDir="column"
      align="center"
      justify="center"
    >
      <Heading mb="2rem" textAlign={"center"}>
        Apply for this position
      </Heading>
      <Box w="70%">
        <form method="post" onSubmit={handleSubmit}>
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

          <FormControl isRequired mt="1rem">
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

          <FormControl isRequired mt="1rem">
            <FormLabel color={DARK_OFF_WHITE}>Phone Number</FormLabel>

            <Input
              size="sm"
              color={BLACK_WHITE}
              variant="flushed"
              borderColor={"gray.400"}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired mt="1rem">
            <FormLabel color={DARK_OFF_WHITE}>Cover Letter</FormLabel>
            <Textarea
              size="sm"
              resize={"vertical"}
              rows={7}
              minLength={100}
              maxLength={2000}
              color={BLACK_WHITE}
              borderColor={"gray.400"}
              value={cover}
              onChange={(e) => setCover(e.target.value)}
            />
          </FormControl>
          <Box float={"right"}>{cover.length}/2000</Box>
          <FormControl mt="1rem" isRequired>
            <FormLabel color={DARK_OFF_WHITE}> Upload CV/Resume</FormLabel>

            <input name="avatar" type="file" placeholder={"Profile picture"}/>
          </FormControl>

          <Flex justifyContent="center">
            <Button
              type="submit"
              mt="20px"
              colorScheme="blue"
              w={{ lg: "40%", md: "100%", sm: "80%" }}
            >
              Apply
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

const JobField = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <>
      <Box px="10rem" mt="3rem" mb="10rem">
        <Heading as="h3" size="lg">
          {name}
        </Heading>
        <Flex h="50px" align="center">
          <Text>Hisar</Text>
          <Divider orientation="vertical" borderColor='black' height={'20px'} mx={"10px"}/>
          <Text>Full Time</Text>
          <Divider orientation="vertical" borderColor='black' height={'20px'} mx={"10px"}/>
          <Text>CTC- 3-6 lakhs p.a.</Text>
        </Flex>
        <Text mt="15px" fontSize="18px" w="80%">
          We are looking for Software developers at Repozitory Technologies Pvt
          Ltd, Hisar. Your primary focus will be developing user-facing web
          applications and configuring existing components.
        </Text>
        <Heading as="h3" size="lg" mt="2rem">
          Required Skills
        </Heading>
        <UnorderedList mt="2rem" fontSize="18px" w="80%">
          <ListItem>
            B.Tech. / M.Tech. in CS or IT / MCA Freshers - 2021/2022 passed out.
            At least 60% marks throughout the academics.
          </ListItem>
          <ListItem>
            Good understanding of one of the latest languages like NodeJS /
            Python / Java. Must have made at least 1 or 2 personal projects.
          </ListItem>
          <ListItem>
            Grasp on concepts taught in college, Algorithms, DSA, SDLC, OOPS
            etc. Good verbal and written Communication skills.
          </ListItem>
          <ListItem>
            MERN, MEAN stack knowledge is plus. Must be able to sign an
            agreement to work with us for 2 years.
          </ListItem>
          <ListItem> Must be able to relocate to Hisar. </ListItem>
        </UnorderedList>
        <Heading as="h3" size="lg" mt="2rem">
          {" "}
          Selection process{" "}
        </Heading>
        <OrderedList mt="2rem" fontSize="18px" w="80%">
          <ListItem> Programming Test</ListItem>
          <ListItem> Personal interview (Round 1 & Round 2) </ListItem>
        </OrderedList>
      </Box>
        <ApplyNow />
    </>
  );
};
export default JobField;
