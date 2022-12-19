import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

const GridItemSection = () => {
    return (
        <Box px="100px" boxSizing="border-box" mt="10">
            <Flex w="100%" overflow="hidden">
                <Box
                    cursor="pointer"
                    className="first-image-container"
                    width="50%"
                    bg="tomato"
                    position="relative"
                >
                    <Image src="https://i0.wp.com/fastor7.com/wp-content/uploads/2021/03/Image-TAJWGU.jpg?fit=1303%2C1800&ssl=1"
                        alt="" />
                    <Box className="overlay">
                        <Box className="text-label">Technology</Box>
                        <Box className="text-description">
                            Websites - Mobile Apps - Web Apps - Full-scale Sass
                        </Box>
                    </Box>
                </Box>
                <Box width="50%">
                    <Box
                        position="relative"
                        className="second-image-container"
                        height="59vh"
                        bg="papayawhip"
                        cursor="pointer"
                    >
                        <Image
                            cursor="pointer"
                            src="https://i0.wp.com/fastor7.com/wp-content/uploads/2021/03/Image-WT7VTM.jpg?fit=1303%2C1800&ssl=1"
                            alt=""
                        />
                        <Box className="overlay">
                            <Box className="text-label">Product Design</Box>
                            <Box className="text-description">
                                Wireframes - Mockups - Prototypes
                            </Box>
                        </Box>
                    </Box>
                    <Flex height="41vh">
                        <Box
                            position="relative"
                            className="third-image-container"
                            width="50%"
                            cursor="pointer"
                        >
                            <Image
                                cursor="pointer"
                                src="https://i0.wp.com/fastor7.com/wp-content/uploads/2021/03/Image-QHNZCF.jpg?fit=1086%2C1500&ssl=1"
                                alt=""
                            />
                            <Box className="overlay" height="430px">
                                <Box className="text-label">Brand Management</Box>
                                <Box className="text-description">Branding - GTM</Box>
                            </Box>
                        </Box>
                        <Box
                            position="relative"
                            className="forth-image-container"
                            width="50%"
                            cursor="pointer"
                            height="430px"
                        >
                            <Image
                                cursor="pointer"
                                src="https://i0.wp.com/fastor7.com/wp-content/uploads/2021/03/Image-2DSQGP.jpg?fit=1303%2C1800&ssl=1"
                                alt=""
                            />
                            <Box className="overlay">
                                <Box className="text-label">Digital Marketing</Box>
                                <Box className="text-description">
                                    Performance - Organic
                                </Box>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default GridItemSection;