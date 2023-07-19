import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Box,
  Image,
  Button,
} from "@chakra-ui/react";

import { FaHeart, FaComment } from "react-icons/fa";


let artistData = {
  name: "John Doe",
  bio: "Talented artist passionate about creating beautiful art.",
  isFavorite: false,
};

export default function LeftPart() {
  const handleToggleFavorite = () => {
    // Toggle the favorite status of the artist
    const updatedArtist = { ...artistData, isFavorite: !artistData.isFavorite };
    artistData = updatedArtist;
  };

  return (
    <Box>
      <Image
        margin={"auto"}
        src="https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-summer-mountain-sunrise-and-sunset-scenery-clouds-natural-scenery-natural-scenery-image_789792.jpg"
      />
      {/* Artist Details */}
      <Box mt="4">
        <Text fontSize="lg" fontWeight="bold">
          Artist: {artistData.name}
        </Text>
        <Text mt="2">{artistData.bio}</Text>
        <Button
          mt="2"
          colorScheme={artistData.isFavorite ? "red" : "gray"}
          leftIcon={
            artistData.isFavorite ? <FaHeart /> : <FaHeart color="white" />
          }
          onClick={handleToggleFavorite}
        >
          {artistData.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
        <Button
          mt="2"
          colorScheme="blue"
          leftIcon={<FaComment color="white" />}
        >
          Purchase
        </Button>
      </Box>
    </Box>
  );
}
