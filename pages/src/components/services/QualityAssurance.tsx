import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react'
import qualityAssurance from '../../../../assets/service/qualityAssurance.png'

const QualityAssurance = () => {
  return (
    <Box position="initial" className="quality-section">
        <Flex
          className="video"
          display="flex"
          flexDirection="row"
          alignItems="center"
          minH="93vh"
          color={"gray.900"}
        >
          <Image src={qualityAssurance} alt="qualityAssurance.png" width={520} height={650} />
          <Flex
            w={"50%"}
            flexDir={"column"}
            alignItems={"flex-end"}
            textAlign={"right"}
            p={"2rem 2rem"}
          >
            <Text
              color={"orange.400"}
              fontSize={{ base: "px", md: "35px", lg: "40px" }}
              lineHeight={{ base: "30px", md: "45px", lg: "60px" }}
              fontWeight="bold" 
              maxWidth={"60%"}
            >
              QUALITY ASSURANCE
            </Text>

             <Text
              fontSize={{ base: "18px", lg: "20px" }}
              lineHeight={{ base: "30px", md: "45px", lg: "40PX" }}
            >
              Quality testing of your solutions complete our mobile app
              development services suite. Iterative testing of web app, mobile
              app and server side ensures solutions meet objectives are bug
              free. We create products that are almost risk-free.
            </Text>
          </Flex>
        </Flex>
    </Box>
  );
}

export default QualityAssurance