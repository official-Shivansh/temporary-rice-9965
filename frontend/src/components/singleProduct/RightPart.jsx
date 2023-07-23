import React from "react";
import { Box } from "@chakra-ui/react";
import Comments from "./Comments";
import Likes from "./Likes";

const SingleArtPage = () => {
  return (
    <Box maxW="600px" mx="auto" my="4">
      {/* Artwork Image */}
      {/* <Image src={imageData.imageUrl} alt="Artwork" /> */}
      <Likes />
      <Comments />
    </Box>
  );
};

export default SingleArtPage;
