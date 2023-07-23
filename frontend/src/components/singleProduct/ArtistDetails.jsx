import React, { useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Text,
  Tag,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";



let tags = [
  "artdigital",
  "artwork",
  "deviantart",
  "deviantartist",
  "digital",
  "digitalartwork",
  "digitaldrawing",
  "digitalpainting",
  "environment",
  "fantasyartwork",
  "fantasylandscape",
  "landscape",
  "landscapeart",
  "landscapescenery",
  "moody",
  "mountains",
  "peaceful",
  "photoshop",
  "quiet",
  "sunset",
  "wallpaper",
  "water",
  "artworkpainting",
];

export default function ArtistDetails(props) {
  console.log("props inside artistDetails", props)
  return (
    <Box
      className="artistDetails"
      mt="4"
      boxShadow="base"
      p="6"
      rounded="md"
      bg="#F4F5F7"
    >
      <Flex>
        <Avatar size="" src="https://i.pravatar.cc/40?u=yourname" />
        <Text fontSize="lg" fontWeight="bold" m="auto" ml="3">
          {props.creator_name}
        </Text>
      </Flex>
      <Text className="discription" mt="4">
        {props.description}
      </Text>
      <Box className="image details" mt="4">
        <Text as="b">Image details</Text>
        {/* <Text>Size </Text> */}
        <TableContainer>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td>Size</Td>
                <Td>3840x2160px</Td>
              </Tr>
              <Tr>
                <Td>Type of ArtWork</Td>
                <Td>{props.typeOfArtWork}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box className="tags" display="inline-block" mt="4">
        {tags.map((el) => (
          <Tag
            m="1"
            ml="0"
            size="md"
            key={el}
            variant="solid"
            colorScheme="teal"
          >
            {el}
          </Tag>
        ))}
      </Box>
    </Box>
  );
}