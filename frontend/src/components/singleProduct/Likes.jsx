import React from "react";
import { Box, Flex, IconButton, Badge } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { handleLike } from "../../redux/reducers/artworkReducer/artworkAction";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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

  const { id } = useParams();
  const userId = JSON.parse(localStorage.getItem("user"))

  const [product, setProduct] = useState({});
  const products = useSelector((store) => store.artworkReducer.allarts.arts);

  // console.log(products, "products")
  useEffect(() => {
    const item = products?.find((element) => element._id === id);
    setProduct(item)
    console.log("item is", item)
  }, [id]);

  function clickingLike() {

    console.log("inside clickingLike", userId._id)
    handleLike(id, userId)
  }
  return (
    <Box>
      <Flex mt="2" align="center" justify="space-between">
        <IconButton
          icon={<FaHeart />}
          aria-label="Like"
          // size="sm"
          variant="ghost"
          color="gray.600"
          onClick={clickingLike}
        />
        <Badge colorScheme="pink">{product?.likes?.length} Likes</Badge>
      </Flex>
    </Box>
  );
}
