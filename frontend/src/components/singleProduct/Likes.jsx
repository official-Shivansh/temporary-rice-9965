import React from "react";
import { Box, Flex, IconButton, Badge } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const imageData = {
  imageUrl: "https://example.com/artwork.jpg",
  comments: [
    { user: "user1", comment: "This is beautiful!" },
    { user: "user2", comment: "Amazing artwork!" },
    { user: "user1", comment: "Great job!" },
  ],
  likes: 42,
};

export default function Likes() {
  return (
    <Box>
      <Flex mt="2" align="center" justify="space-between">
        <IconButton
          icon={<FaHeart />}
          aria-label="Like"
          // size="sm"
          variant="ghost"
          color="gray.600"
        />
        <Badge colorScheme="pink">{imageData.likes} Likes</Badge>
      </Flex>
    </Box>
  );
}
