import React from 'react'
import {Image, Box, Flex, Button, Heading, Text, Input, InputGroup, InputLeftElement,  Grid, GridItem } from '@chakra-ui/react'
import BgVideo from "../images/background.mp4"
import BgVideo2 from "../images/background2.mp4"
import { Search2Icon } from '@chakra-ui/icons'
import YouTube from 'react-youtube';
import {AiOutlineHeart,AiFillHeart  } from "react-icons/ai";
function Container() {
    const opts = {
        height: '130%',
        width: '100%',

    };
    return (
        <>
            <Box   mt={"5%"} w={"100%"} h={"80vh"}>
                {/* <video style={{ objectFit: "cover", height: "100%", width: "100%" }} src={BgVideo} autoPlay loop muted /> */}
                <video style={{ objectFit: "cover", height: "100%", width: "100%", filter: "brigthness(70%)" }} src={BgVideo2} autoPlay loop muted />
                <Box position={"absolute"} w={"100%"} h={"80vh"} top={"20"} textAlign={"center"} alignItems={"center"} color={"white"} >
                    <Flex width={"100%"} justify={"center"}>

                        <Flex w={"60%"} flexWrap={"wrap"} justifyContent={"space-evenly"} gap={"2%"}>
                            <Button borderRadius={"20px"} background={"rgba(0, 0, 0, .2)"} _hover={{ color: "black", bgColor: "white" }} color={"white"}><Text size={"md"}>Discover</Text></Button>
                            <Button borderRadius={"20px"} background={"rgba(0, 0, 0, .2)"} _hover={{ color: "black", bgColor: "white" }} color={"white"}><Text size={"md"}>Animation</Text></Button>
                            <Button borderRadius={"20px"} background={"rgba(0, 0, 0, .2)"} _hover={{ color: "black", bgColor: "white" }} color={"white"}><Text size={"md"}>Branding</Text></Button>
                            <Button borderRadius={"20px"} background={"rgba(0, 0, 0, .2)"} _hover={{ color: "black", bgColor: "white" }} color={"white"}><Text size={"md"}>Illustration</Text></Button>
                            <Button borderRadius={"20px"} background={"rgba(0, 0, 0, .2)"} _hover={{ color: "black", bgColor: "white" }} color={"white"}><Text size={"md"}>Mobile</Text></Button>
                            <Button borderRadius={"20px"} background={"rgba(0, 0, 0, .2)"} _hover={{ color: "black", bgColor: "white" }} color={"white"}><Text size={"md"}>Print</Text></Button>
                            <Button borderRadius={"20px"} background={"rgba(0, 0, 0, .2)"} _hover={{ color: "black", bgColor: "white" }} color={"white"}><Text size={"md"}>Product Design</Text></Button>

                        </Flex>
                    </Flex>
                    <Box pt={"3%"} >
                        <Heading>Explore the world’s leading </Heading>
                        <Heading>design portfolios</Heading>
                    </Box>
                    <Box pt={"3%"} >
                        <Text fontSize={"lg"}>Millions of designers and agencies around the world showcase their portfolio work </Text>
                        <Text fontSize={"lg"}>on ArtHub - the home to the world’s best design and creative professionals.</Text>
                    </Box>
                    <Flex pt={"3%"} justifyContent={"center"} w={"100%"} >
                        {/* <Input w={"60%"} variant='flushed' placeholder='Search...' /> */}
                        <InputGroup w={"45%"}>

                            <Input color={"black"} _focus={{ bg: "white", border: "0px solid white" }} bgColor={"white"} borderRadius={"50px"} variant='filled' placeholder='Search...' />
                            <InputLeftElement  >
                                {/* <CheckIcon color='green.500' /> */}
                                <Search2Icon color='grey' />
                            </InputLeftElement>
                        </InputGroup>
                    </Flex>
                </Box>
            </Box>
            <Flex width={"100%"} justifyContent={"center"}>
                
            <Grid w={"90%"} mt={"5%"}  templateColumns={{base:'repeat(1,1fr)',sm:'repeat(2,1fr)',md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)'}}  gap={6}>
                <GridItem  w='100%' h='auto'   transition= "transform .2s" _hover={{transform:"scale(1.1)"}} >
                    <Image src='https://cdn.dribbble.com/userupload/8756089/file/original-6ffb02b7f1e8e50d9dd2f22daddbf6c5.jpg?resize=400x300&vertical=center'/>
                    <Flex p={"5%"} pt={"2%"} justifyContent={"space-between"}>
                        <Text as={"b"}>
                            Shiv
                        </Text>
                        <Flex>
                       <AiFillHeart color='red' size={"20px"}/>
                       <Text>12</Text>
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem  w='100%' h='auto'   transition= "transform .2s" _hover={{transform:"scale(1.1)"}} >
                    <Image src='https://cdn.dribbble.com/userupload/8756089/file/original-6ffb02b7f1e8e50d9dd2f22daddbf6c5.jpg?resize=400x300&vertical=center'/>
                    <Flex p={"5%"} pt={"2%"} justifyContent={"space-between"}>
                        <Text as={"b"}>
                            Shiv
                        </Text>
                        <Flex>
                       <AiFillHeart color='red' size={"20px"}/>
                       <Text>12</Text>
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem  w='100%' h='auto'   transition= "transform .2s" _hover={{transform:"scale(1.1)"}} >
                    <Image src='https://cdn.dribbble.com/userupload/8756089/file/original-6ffb02b7f1e8e50d9dd2f22daddbf6c5.jpg?resize=400x300&vertical=center'/>
                    <Flex p={"5%"} pt={"2%"} justifyContent={"space-between"}>
                        <Text as={"b"}>
                            Shiv
                        </Text>
                        <Flex>
                       <AiFillHeart color='red' size={"20px"}/>
                       <Text>12</Text>
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem  w='100%' h='auto'   transition= "transform .2s" _hover={{transform:"scale(1.1)"}} >
                    <Image src='https://cdn.dribbble.com/userupload/8756089/file/original-6ffb02b7f1e8e50d9dd2f22daddbf6c5.jpg?resize=400x300&vertical=center'/>
                    <Flex p={"5%"} pt={"2%"} justifyContent={"space-between"}>
                        <Text as={"b"}>
                            Shiv
                        </Text>
                        <Flex>
                       <AiFillHeart color='red' size={"20px"}/>
                       <Text>12</Text>
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem  w='100%' h='auto'   transition= "transform .2s" _hover={{transform:"scale(1.1)"}} >
                    <Image src='https://cdn.dribbble.com/userupload/8756089/file/original-6ffb02b7f1e8e50d9dd2f22daddbf6c5.jpg?resize=400x300&vertical=center'/>
                    <Flex p={"5%"} pt={"2%"} justifyContent={"space-between"}>
                        <Text as={"b"}>
                            Shiv
                        </Text>
                        <Flex>
                       <AiFillHeart color='red' size={"20px"}/>
                       <Text>12</Text>
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem  w='100%' h='auto'   transition= "transform .2s" _hover={{transform:"scale(1.1)"}} >
                    <Image src='https://cdn.dribbble.com/userupload/8756089/file/original-6ffb02b7f1e8e50d9dd2f22daddbf6c5.jpg?resize=400x300&vertical=center'/>
                    <Flex p={"5%"} pt={"2%"} justifyContent={"space-between"}>
                        <Text as={"b"}>
                            Shiv
                        </Text>
                        <Flex>
                       <AiFillHeart color='red' size={"20px"}/>
                       <Text>12</Text>
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem  w='100%' h='auto'   transition= "transform .2s" _hover={{transform:"scale(1.1)"}} >
                    <Image src='https://cdn.dribbble.com/userupload/8756089/file/original-6ffb02b7f1e8e50d9dd2f22daddbf6c5.jpg?resize=400x300&vertical=center'/>
                    <Flex p={"5%"} pt={"2%"} justifyContent={"space-between"}>
                        <Text as={"b"}>
                            Shiv
                        </Text>
                        <Flex>
                       <AiFillHeart color='red' size={"20px"}/>
                       <Text>12</Text>
                        </Flex>
                    </Flex>
                </GridItem>
                
               
            </Grid>
            </Flex>
            <Box textAlign={"center"} w={"90%"} m={"auto"} mt={"5%"} h={{ base: "70vh", md: "40vh" }} >

                <Text className='colorprop' fontSize={"4xl"} as={"b"} >Feedback </Text>
                <Flex justifyContent={"space-evenly"} alignItems={"center"} w={"100%"} m={"auto"} mt={"3%"} direction={{ base: "column", md: "row" }} >
                    <Box mb={{ base: "5%", md: "1%" }} w={{ base: "60%", md: "20%" }} >
                        <YouTube videoId="WynO-PamxfM" opts={opts} />
                    </Box>
                    <Box mb={{ base: "5%", md: "1%" }} w={{ base: "60%", md: "20%" }} >
                        <YouTube videoId="BMkXEtFiBNg" opts={opts} />
                    </Box>
                    <Box mb={{ base: "5%", md: "1%" }} w={{ base: "60%", md: "20%" }} >
                        <YouTube videoId="p1bsCYFTh0g" opts={opts} />
                    </Box>
                </Flex>
            </Box>

        </>
        // <iframe width="560" height="315" src="https://www.youtube.com/embed/WynO-PamxfM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    )
}

export default Container
