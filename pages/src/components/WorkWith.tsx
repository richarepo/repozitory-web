import React from 'react';
import Image from 'next/image';
import { Box, Text } from '@chakra-ui/react';

import SizeyLogo from "../../../assets/logo/sizey.png";
import EargoLogo from "../../../assets/logo/eargo.png";
import FidlixLogo from "../../../assets/logo/Fidlix.png";
import GetStatusLogo from "../../../assets/logo/get_status.png";
import useColorManager from '../../../helpers/hooks/useColorManager';

const WorkWith = () => {
    const { BLUE } = useColorManager();

    return (
        <Box
            width={"100%"}
            display={"flex"}
            padding={"0px 5%"}
            background={"#F5FBFB"}
            flexDirection={{ base: "column", md: "column", lg: "row" }}>
            <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-around"}
                width={{ base: "100%", md: "100%", lg: "50%" }}
                alignItems={{ base: "center", md: "center", lg: "flex-start" }}
            >
                <Text
                    color={"#013878"}
                    fontWeight="bold"
                    lineHeight={"54px"}
                    letterSpacing={"-0.04em"}
                    textTransform={"capitalize"}
                    fontSize={{ base: "25px", md: "4xl", lg: "5xl" }}
                    padding={{ base: "20px 0px", md: "20px 0px", lg: "0px" }}
                >
                    Who Trust Us?
                </Text>
                <Text>STARTUPS & ENTERPRISES</Text>
            </Box>
            <Box width={{ base: "100%", md: "100%", lg: "50%" }} >
                <Box display={"flex"} justifyContent={"space-between"} padding={{ base: "30px 0px", md: "30px 0px", lg: "40px 0px" }} alignItems={"center"}>
                    <Box width={{ base: "120px", md: "120px", lg: "200px" }} >
                        <Image src={GetStatusLogo} alt="get-status-logo" />
                    </Box>
                    <Box width={{ base: "120px", md: "120px", lg: "200px" }}>
                        <Image src={EargoLogo} alt="eargo-logo" />
                    </Box>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"} padding={{ base: "20px 0px", md: "20px 0px", lg: "40px 0px" }} alignItems={"center"} >
                    <Box width={{ base: "120px", md: "120px", lg: "200px" }} >
                        <Image src={FidlixLogo} alt="fidlix-logo" />
                    </Box>
                    <Box width={{ base: "120px", md: "120px", lg: "200px" }}>
                        <Image src={SizeyLogo} alt="sizey-logo" />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default WorkWith