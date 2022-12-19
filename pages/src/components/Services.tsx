import React from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';

import { SERVICES } from '../../../helpers/constant';
import DeviderLogo from "../../../assets/service/border_image.png"

const Services = () => {
    return (
        <Box
            width={"100%"}
            display={"flex"}
            flexWrap={"wrap"}
            padding={"0px 5%"}
            position={"relative"}
            justifyContent={"center"}
        >
            {SERVICES.map((obj: any) => {
                return (
                    <Box
                        key={obj.id}
                        display={"flex"}
                        margin={"5% 0px"}
                        alignItems={"center"}
                        flexDirection={"column"}
                        width={{ base: "50%", md: "50%", lg: "25%" }}
                    >
                        <Box
                            width={"90px"}
                            height={"90px"}
                            _hover={{ background: "#cfcfcf", animationName: "bounce" }}
                            transitionDuration="1.1s"
                            borderRadius={"50px"}
                            cursor={"pointer"}
                            className="child bounce"
                        >
                            <Image src={obj.logo} alt={obj.header} />
                        </Box>
                        <Box
                            fontWeight={700}
                            fontSize={"20px"}
                            lineHeight={"19px"}
                            textAlign={"center"}
                            padding={"20px 0px"}
                            letterSpacing={"-0.04em"}
                            textTransform={"capitalize"}
                        >
                            {obj.header}
                        </Box>
                        <Box
                            textAlign={"center"}
                            width={"75%"}
                        >{obj.testMessage}</Box>
                        {
                            obj.id === "4" &&
                            <Box
                                position={"absolute"}
                                width={"100%"}
                                justifyContent={"center"}
                                display={{ base: "none", md: "none", lg: "flex" }}
                                alignItems={"center"}
                                right={0}
                                bottom={"50%"}
                            >
                                <Image src={DeviderLogo} alt="kaka" />
                            </Box>
                        }
                    </Box >
                )
            })}
        </Box >
    )
}

export default Services;
