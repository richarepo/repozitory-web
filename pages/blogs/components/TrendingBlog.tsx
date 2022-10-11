import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const TrendingBlog = ({ data }: any) => {
  console.log(`Your user ==>`, data);
  
  return (
    <Flex p="2% 10%" boxSizing="border-box">
      <Image
        width="500px"
        height="300"
        src="https://cdn.pixabay.com/photo/2018/08/26/14/38/city-3632431__340.jpg"
        alt="Dan Abramov"
        fallbackSrc="https://via.placeholder.com/150"
      />
      <Box
        ml="5%"
        display="flex"
        flexDirection="column"
        justifyContent={"space-between"}
      >
        <Box>
          <Box h="30px" display="flex" alignItems="center" mb="4%">
            <Text color="blue.500" mr="10px" fontSize="24px" fontWeight="bold">
              Eargo News
            </Text>
            <Divider orientation="vertical" borderWidth="1px" />
            <Text color="#666" ml="10px" fontSize="24px" fontWeight="bold">
              Sumit lal verma
            </Text>
          </Box>
          <Text
            fontSize="50px"
            color="#333"
            fontWeight="bold"
            lineHeight="55px"
          >
            Now see Eargos In-Person at Select...
          </Text>
          <Text fontSize="26px" color="#666" lineHeight="30px" mt="3%">
            We are excited to announce that we ve partnered with select Victra -
            Verizon...
          </Text>
        </Box>
        <Text fontSize="20px" color="#666">
          03-18-2022
        </Text>
      </Box>
    </Flex>
  );
}


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://www.google.com`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data: "sdf" } }
}

export default TrendingBlog