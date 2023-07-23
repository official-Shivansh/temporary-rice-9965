import React, { useEffect, useState } from "react";
import { Box, Image, Button, Flex, useToast, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import ArtistDetails from "./ArtistDetails";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllArts } from "../../redux/reducers/artworkReducer/artworkAction";
import { addItemToCart, addItemToFavourite } from "../../redux/Cart/action";
import { Link } from "react-router-dom";
// import { fetchAllArts, getProductById } from "../../redux/reducers/artworkReducer/artworkAction";

export default function LeftPart() {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const toastIdRef = React.useRef();
  const toast = useToast();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const products = useSelector((store) => store.artworkReducer.allarts.arts);

  useEffect(() => {
    dispatch(fetchAllArts);
  }, []);

  useEffect(() => {
    const item = products?.find((element) => element._id === id);
    setProduct(item);
  }, [id, products]);
// =======

//     // const item = products?.find((element) => element._id === id);
//     let item = getProductById(id).then((res) => {
//       console.log("res is", res.art)
//       setProduct(res.art)
//     })
//     console.log("item inside useEffect item is", item)

//     console.log("item is", item)
//   }, [id]);

//   console.log("single product", product)

// >>>>>>> main

  const handleAddToCart = () => {
    toastIdRef.current = toast({
      title: "Added to Cart",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    dispatch(addItemToCart(product._id));
  };

  const handleToggleFavorite = () => {
    setIsFavorite(true);
    toastIdRef.current = toast({
      title: "Added to favourite",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    dispatch(addItemToFavourite(product._id));
  };

  return (
    <Box>
      <Box className="image">
        <Text fontSize="3xl" as="b" ml="50">
          {product?.title}
        </Text>
        <Image m="auto" className="img" src={product?.image} />
      </Box>
      <Box m="9" mt="4">
        {/* likePurchaseBtn */}
        <Flex gap="4" className="likePurchaseBtn">
          <Link to={'/fav'}>
            <Button
              colorScheme="white"
              color="black"
              leftIcon={
                isFavorite ? <FaHeart color="red" /> : <FaHeart color="grey" />
              }
              sx={{
                _hover: {
                  backgroundColor: "#319795",
                },
              }}
              onClick={handleToggleFavorite}
            >
              {/* Add to Favorites */}
              {isFavorite ? "Added" : "Add to Favorites"}
            </Button>
          </Link>
          <Link to={'/cart'}>
            <Button
              colorScheme="black"
              color="black"
              sx={{
                _hover: {
                  backgroundColor: "#319795",
                },
              }}
              onClick={handleAddToCart}
            >
              Purchase for ₹ {product?.price}
            </Button>
          </Link>
        </Flex>

        {/* Artist Details */}
        <ArtistDetails {...product} />
      </Box>
    </Box>
  );
}
