import React from 'react';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/react';

import WeWorkWith from "../../../assets/service/ideaExecute.png";
import useColorManager from '../../../helpers/hooks/useColorManager';

const IdeaExecute = () => {
    const { BLUE, OFF_WHITE } = useColorManager();
    return (
        <Box width={"90%"}>
            <Flex
                display={"flex"}
                flexDirection={{ base: "column", md: "column", lg: "row" }}
            >
                <Box width={{ base: "100%", md: "100%", lg: "60%" }} >
                    <Image src={WeWorkWith} alt="Work-width" />
                </Box>
                <Box width={{ base: "100%", md: "100%", lg: "40%" }} textAlign={{ base: "center", lg: "left" }} padding={"0px 40px"}>
                    <Text
                        color={BLUE}
                        fontWeight="bold"
                        fontSize={{ base: "25px", md: "4xl", lg: "5xl" }}
                        lineHeight={"54px"}
                        letterSpacing={"-0.04em"}
                        textTransform={"capitalize"}
                    >
                        Have an idea? Let&apos;s execute.
                    </Text>
                    <Box
                        color={OFF_WHITE}
                        fontSize="16px"
                        lineHeight="25px"
                        mt={{ base: "20px", md: "30px%", lg: "20px" }}
                        mb={"15px"}
                        w={"100%"}>
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum
                        has been the industrys standard dummy text
                        ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make
                        a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default IdeaExecute;
