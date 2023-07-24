import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllArts } from "../../redux/reducers/artworkReducer/artworkAction";
import { useParams } from "react-router";

export default function ArtistDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [artist, setArtist] = useState({});
  const products = useSelector((store) => store.artworkReducer.allarts.arts);

  useEffect(() => {
    dispatch(fetchAllArts);
    const item = products?.find((element) => element._id === id);
    setProduct(item);
  }, [id]);

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
          {product?.creator_name}
        </Text>
      </Flex>
      <Text className="discription" mt="4">
        {product?.description}
      </Text>
      <Box className="image details" mt="4">
        <Text as="b">Image details</Text>
        <TableContainer>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td>Size(cm)</Td>
                <Td>500 x 300</Td>
              </Tr>
              <Tr>
                <Td>Type of ArtWork</Td>
                <Td>{product?.typeOfArtWork}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box className="tags" display="inline-block" mt="4">
        {product?.tags?.map((el) => (
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
