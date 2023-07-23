import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Flex,
  Text,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { FaHeart, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getFavItems,deleteFavItem } from '../redux/Favourite/action';


const FavoriteItemsPage = () => {
  
  
  const toast = useToast();

  const favoriteItems = useSelector((store) => store.FavReducer.items)
  const dispatch = useDispatch();
  console.log(favoriteItems)

  useEffect(() => {
   dispatch(getFavItems())
    
    
  }, [dispatch]);

  const handleRemoveItem = (itemId) => {
    dispatch(deleteFavItem(itemId))
    toast({
      title: 'Item Removed',
      description: 'The item has been removed from your favorites.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box bg="gray.100" py={8}>
      <Container maxW="lg">
        <Heading as="h1" size="xl" mb={6} textAlign="center">
          My Favorite Items
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {favoriteItems.map((item) => (
            <Box key={item.id} bg="white" borderRadius="md" shadow="md" overflow="hidden">
              <Flex align="center" justify="space-between" p={4}>
                <Text fontSize="xl" fontWeight="semibold">
                  {item.name}
                </Text>
                <IconButton
                  icon={<FaTrash />}
                  variant="ghost"
                  color="red.500"
                  aria-label={`Remove ${item.name}`}
                  onClick={() => handleRemoveItem(item.id)}
                />
              </Flex>
              <Box w="100%">
                <img src={item.image} alt={item.name} />
              </Box>
              <Box p={4}>
                <Text color="gray.600">₹.{item.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
        {favoriteItems.length === 0 && (
          <Text textAlign="center" mt={6}>
            You haven't added any items to your favorites yet.
            <br />
            Click the <FaHeart color="red" /> icon to add items.
          </Text>
        )}
      </Container>
    </Box>
  );
};

export default FavoriteItemsPage;
