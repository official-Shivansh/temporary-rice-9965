import React from 'react'
import { Box, Flex, Button, Heading, Text, Input ,InputGroup,InputLeftElement,InputRightElement, border} from '@chakra-ui/react'
import BgVideo from "../images/background.mp4"
import { Search2Icon } from '@chakra-ui/icons'
function Container() {

    return (
        <Box w={"100%"} h={"80vh"}>
            <video style={{ objectFit: "cover", height: "100%", width: "100%" }} src={BgVideo} autoPlay loop muted />
            <Box pt={"2%"} position={"absolute"} w={"100%"} h={"100%"} top={"20"} textAlign={"center"} alignItems={"center"} color={"white"} >
                <Flex width={"100%"} justify={"center"}>

                    <Flex w={"80%"} justifyContent={"space-evenly"}>
                        <Button borderRadius={"20px"} background={"rgba(0, 0, 0, .2)"} _hover={{ color: "black", bgColor: "white" }} color={"white"}><Text size={"md"}>Discover</Text></Button>
                        <Button borderRadius={"20px"} background={"rgba(0, 0, 0, .2)"} _hover={{ color: "black", bgColor: "white" }} color={"white"}><Text size={"md"}>Animation</Text></Button>
                        <Button borderRadius={"20px"} background={"rgba(0, 0, 0, .2)"} _hover={{ color: "black", bgColor: "white" }} color={"white"}><Text size={"md"}>Branding</Text></Button>
                        <Button borderRadius={"20px"} background={"rgba(0, 0, 0, .2)"} _hover={{ color: "black", bgColor: "white" }} color={"white"}><Text size={"md"}>Illustration</Text></Button>
                        <Button borderRadius={"20px"} background={"rgba(0, 0, 0, .2)"} _hover={{ color: "black", bgColor: "white" }} color={"white"}><Text size={"md"}>Mobile</Text></Button>
                        <Button borderRadius={"20px"} background={"rgba(0, 0, 0, .2)"} _hover={{ color: "black", bgColor: "white" }} color={"white"}><Text size={"md"}>Print</Text></Button>
                        <Button borderRadius={"20px"} background={"rgba(0, 0, 0, .2)"} _hover={{ color: "black", bgColor: "white" }} color={"white"}><Text size={"md"}>Product Design</Text></Button>
                        <Button borderRadius={"20px"} background={"rgba(0, 0, 0, .2)"} _hover={{ color: "black", bgColor: "white" }} color={"white"}><Text size={"md"}>Typography</Text></Button>
                        <Button borderRadius={"20px"} background={"rgba(0, 0, 0, .2)"} _hover={{ color: "black", bgColor: "white" }} color={"white"}><Text size={"md"}>Web Design</Text></Button>

                    </Flex>
                </Flex>
                <Box pt={"2%"} >
                    <Heading>Explore the world’s leading </Heading>
                    <Heading>design portfolios</Heading>
                </Box>
                <Box pt={"2%"} >
                    <Text fontSize={"lg"}>Millions of designers and agencies around the world showcase their portfolio work </Text>
                    <Text fontSize={"lg"}>on Dribbble - the home to the world’s best design and creative professionals.</Text>
                </Box>
                <Flex pt={"2%"} justifyContent={"center"} w={"100%"} >
                    {/* <Input w={"60%"} variant='flushed' placeholder='Search...' /> */}
                    <InputGroup w={"45%"}>
                       
                        <Input color={"black"} _focus={{bg:"white" , border:"0px solid white"}}  bgColor={"white"} borderRadius={"50px"} variant='filled' placeholder='Search...'  />
                        <InputLeftElement>
                            {/* <CheckIcon color='green.500' /> */}
                            <Search2Icon color='grey' />
                        </InputLeftElement>
                    </InputGroup>
                </Flex>
            </Box>
        </Box>

    )
}

export default Container
