import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react'
import qualityAssurance from '../../../../assets/service/qualityAssurance.png'
import useColorManager from '../../../../helpers/hooks/useColorManager';

const QualityAssurance = () => {
const {OFF_WHITE}=useColorManager();
  return (
    <Box position="initial" className="quality-section" px="3%">
        <Flex
          className="video"
          display="flex"
          flexDirection="row"
          minH="93vh"
          color={"gray.900"}
          px="4rem"
        >
          <Image src={qualityAssurance} alt="qualityAssurance.png" width={612} height={650} />
          <Flex
            w={"50%"}
            flexDir={"column"}
            alignItems={"flex-end"}
            textAlign={"right"}
            px="2rem"
          >
            <Text
              color={"blue"}
              fontSize={{ base: "25px", md: "30px", lg: "40px" }}
              lineHeight={{ base: "30px", md: "45px", lg: "60px" }}
              fontWeight="bold" 
            >
              QUALITY ASSURANCE
            </Text>

             <Text
              fontSize={{ base: "18px", lg: "20px" }}
              lineHeight={{ base: "25px", md: "30px", lg: "30px" }}
              color={OFF_WHITE}
              mt="1rem"
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