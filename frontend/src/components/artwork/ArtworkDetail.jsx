import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    border,
    grid,
} from '@chakra-ui/react';

import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";


const ArtworkDetail = ({ _id, title, image, price, description, typeOfArtWork }) => {

    function truncateWords(description) {
        const words = description.split('');

        if (words.length > 2) {
            const truncatedWords = words.slice(0, 400);
            return truncatedWords.join('') + '...';
        }

        return description;
    }



    return (
        <div>
            <Box
                bg={useColorModeValue('white', 'gray.800')}
                maxW="sm"
                margin={2}
                style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", border: "5px solid red" }}
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
            >

                <Circle
                    size="10px"
                    position="absolute"
                    top={2}
                    right={2}
                    bg="red.200"
                />

                <Image
                    src={image}

                    alt={`Picture of ${title}`}
                    roundedTop="md"
                    width={"full"}
                    height={285}
                />
                <Box p="6">
                    <Box
                        fontSize="md"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated>
                        {title}

                        {<Badge rounded="10px" px="6" fontSize="0.8em" colorScheme="blue" textAlign={'left'}>
                            {typeOfArtWork}
                        </Badge>}
                    </Box>
                    <Flex mt="1" justifyContent="space-between" alignContent="center">


                        <Box
                            fontSize="md"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {truncateWords(description)}
                        </Box>
                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center">
                        {/* <Rating rating={rating} numReviews={count * 3} /> */}
                        <Box fontSize="md" color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={'gray.600'} fontSize="sm">
                                ₹
                            </Box>
                            {price}
                        </Box>
                    </Flex>
                    <Flex justifyContent={"flex-end"}>
                        <Tooltip
                            label="Edit details"
                            bg="white"
                            placement={'top'}
                            color={'#0066FF'}
                            fontSize={'0.6em'}>
                            <chakra.a href={'#'} display={'flex'}>
                                <Icon as={AiTwotoneEdit} h={6} w={20} alignSelf={'center'} color={'#0066FF'} />
                            </chakra.a>
                        </Tooltip>
                        <Tooltip
                            label="Delete item"
                            bg="white"
                            placement={'top'}
                            color={'#0066FF'}
                            fontSize={'0.6em'}>
                            <chakra.a href={'#'} display={'flex'}>
                                <Icon as={AiTwotoneDelete} h={6} w={20} alignSelf={'center'} color={'#f44013'} />
                            </chakra.a>
                        </Tooltip>
                    </Flex>

                </Box>
            </Box>
        </div>
    )
}

export default ArtworkDetail

