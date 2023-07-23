import React from "react";
import { Box, Flex, IconButton, Badge } from "@chakra-ui/react";
import { FaThumbsUp } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getProductById, handleLike } from "../../redux/reducers/artworkReducer/artworkAction";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { color } from "framer-motion";
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
  const [liked, setLiked] = useState(false)
  const [product, setProduct] = useState({});
  const products = useSelector((store) => store.artworkReducer.allarts.arts);

  // console.log(products, "products")
  useEffect(() => {
    let item = getProductById(id).then((res) => {
      console.log("res is", res.art)
      setProduct(res.art)
    })
    console.log("item is", item)
  }, [liked]);

  function clickingLike() {

    console.log("inside clickingLike", userId._id)
    handleLike(id, userId).then((res) => {
      setLiked(!liked)
    })

  }

  const totalLikes = product?.likes?.length + 3 * 245

  return (
    <Box>
      <Flex mt="2" align="center" justify="space-between">

        <IconButton
          icon={< FaThumbsUp />}
          aria-label="Like"
          size="35px"
          variant="ghost"
          onClick={clickingLike}
          style={{ color: liked ? "blue" : "grey" }}
        />


        <Badge colorScheme="pink">{totalLikes} Likes</Badge>
      </Flex>
    </Box>
  );
}
