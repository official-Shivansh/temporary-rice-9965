import React, { useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Text,
  Tag,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

let artistData = {
  name: "John Doe",
  bio: "Talented artist passionate about creating beautiful art.",
  isFavorite: false,
};

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

export default function ArtistDetails() {
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
          {artistData.name}
        </Text>
      </Flex>
      <Text mt="4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
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
                <Td>Sculpture</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box display="inline-block" mt="4">
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

let x = {
  artist: "John Doe",
  artistImage: "https://i.pravatar.cc/40?u=yourname",
  artistDetails:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  artImage:
    "https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-summer-mountain-sunrise-and-sunset-scenery-clouds-natural-scenery-natural-scenery-image_789792.jpg",
  typeOfArtWork: "Sculpture",
  artWidth: 200,
  artHeight: 150,
  artPrice: 150,
  likes: 45,
  comments: [
    {
      image: "https://i.pravatar.cc/40?u=yourname",
      name: "Pablo",
      comment:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "",
    },
    {
      image: "https://i.pravatar.cc/40?u=yourname",
      name: "Pablo",
      comment:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "",
    },
    {
      image: "https://i.pravatar.cc/40?u=yourname",
      name: "Pablo",
      comment:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "",
    },
  ],
};
