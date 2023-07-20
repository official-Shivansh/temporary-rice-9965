// CartPage.js
import React, { useState } from 'react';
import {
  Box,
  Image,
  Flex,
  VStack,
  Text,
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Arial, sans-serif',
  },
});

// const CartItem = ({ item }) => {
//   return (
//     <Flex
//       flexDirection={{ base: 'column', md: 'row' }}
//       justifyContent="space-between"
//       alignItems={{ base: 'center', md: 'flex-start' }}
//       w="100%"
//       p={4}
//       mb={2}
//       borderWidth={1}
//       borderRadius={4}
//     >
//       <Flex alignItems="center" mb={{ base: 4, md: 0 }}>
//         <Image src={item.imageUrl} alt={item.name} boxSize="80px" mr={4} />
//         <Text fontWeight="bold">{item.name}</Text>
//       </Flex>
//       <Text>${item.price.toFixed(2)}</Text>
//     </Flex>
//   );
// };

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
      imageUrl: 'data:image/jpeg;base64,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',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15.49,
      imageUrl: 'data:image/png;base64,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',
    },
    // Add more items to the cart as needed
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <ChakraProvider theme={theme}>
      <VStack align="center" p={4} w="100%">
        {cartItems.map((item) => (
          <Flex
            key={item.id}
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ base: 'center', md: 'flex-start' }}
            w="100%"
            p={4}
            mb={2}
            borderWidth={1}
            borderRadius={4}
          >
            <Flex alignItems="center" mb={{ base: 4, md: 0 }}>
              <Image src={item.imageUrl} alt={item.name} boxSize="80px" mr={4} />
              <Text fontWeight="bold">{item.name}</Text>
            </Flex>
            <Text>${item.price.toFixed(2)}</Text>
            <Box
              cursor="pointer"
              color="red.500"
              fontWeight="bold"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </Box>
          </Flex>
        ))}
        <Box fontSize="20px" mt={4} textAlign="right" w="100%">
          Total: ${getTotalPrice().toFixed(2)}
        </Box>
      </VStack>
    </ChakraProvider>
  );
};

export default CartPage;
