import {
    Badge,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
    Avatar, Box, keyframes
} from '@chakra-ui/react';
import { useSelector } from "react-redux";

export default function UserAvatar() {

    const logged = JSON.parse(localStorage.getItem("user"))

    const logged_in_user = logged.name || useSelector((store) => store.artworkReducer.user) 

    return (
        <Center py={6} style={{ marginTop: "70px" }}>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '540px', lg: "1380px" }}
                height={{ sm: '476px', md: '20rem' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                padding={4}>
                <Flex flex={1} bg="blue.200">
                    <Image
                        objectFit="cover"
                        boxSize="100%"
                        src={
                            'https://images.yourstory.com/cs/2/96eabe90392211eb93f18319e8c07a74/Imagejtb7-1684960500563.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces'
                        }
                    />
                </Flex>
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    pt={2}>
                    <AvatarWithRipple />
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        {logged_in_user}
                    </Heading>
                    <Text
                        textAlign={'center'}
                        color={useColorModeValue('gray.700', 'gray.400')}
                        px={3}>
                        Have a keen eye for beauty, expressing emotions through captivating creations. Art enthusiasts captivated by the world of colors, shapes, and forms, seeking inspiration and a deeper connection with the human experience.
                    </Text>
                    <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                        <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            #art
                        </Badge>
                        <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            #photography
                        </Badge>
                        <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            #music
                        </Badge>
                    </Stack>
                </Stack>
            </Stack>
        </Center>
    );
}


function AvatarWithRipple() {
    const size = '96px';
    const color = 'teal';

    const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

    const logged = JSON.parse(localStorage.getItem("user"))
    console.log(logged.profilePicture)

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            h="130px"
            w="full"
            overflow="hidden">
            {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
            <Box
                as="div"
                position="relative"
                w={size}
                h={size}
                _before={{
                    content: "''",
                    position: 'relative',
                    display: 'block',
                    width: '300%',
                    height: '300%',
                    boxSizing: 'border-box',
                    marginLeft: '-100%',
                    marginTop: '-100%',
                    borderRadius: '50%',
                    bgColor: color,
                    animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                }}>
                <Avatar
                    src={logged.profilePicture}
                    size="full"
                    position="absolute"
                    top={0}
                />
            </Box>
        </Flex>
    );
}