// // CartPage.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Image,
  Flex,
  VStack,
  HStack,
  Text,
  Button,
  IconButton,
  Input,
  ChakraProvider,
  extendTheme,
  Spacer,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const theme = extendTheme({
  fonts: {
    body: 'Arial, sans-serif',
  },
});

const CartItem = ({ item, onRemove }) => {

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p={4}
      mb={4}
      borderWidth={1}
      borderRadius={4}
      _hover={{
        shadow: 'md',
      }}
    >
      <Flex alignItems="center">
        <Image src={item.image} alt={item.name} boxSize="80px" mr={4} />
        <VStack align="start">
          <Text fontWeight="bold">{item.name}</Text>
          <Text color="gray.600" fontSize="sm">
            ${item.price.toFixed(2)}
          </Text>
        </VStack>
      </Flex>
      <IconButton
        icon={<CloseIcon />}
        variant="ghost"
        colorScheme="red"
        aria-label="Remove item"
        onClick={() => onRemove(item.id)}
      />
    </Flex>
  );
};

const Cart = () => {
  // const cartItems = useSelector((state) => state.items);
  // const dispatch = useDispatch();
  // console.log(cartItems)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlktcQiMYZGRujYel00rXUw80bQLpNJ1Y4Q&usqp=CAU',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15.49,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlktcQiMYZGRujYel00rXUw80bQLpNJ1Y4Q&usqp=CAU',
    },
    // Add more items to the cart as needed
  ]);
  
  const navigate=useNavigate()
  const [promoCode, setPromoCode] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState(null);

  useEffect(() => {
    // Calculate discounted price whenever promoCode or cartItems change
   
    calculateDiscountedPrice();
  }, [promoCode, cartItems,discountedPrice]);

  const handleApplyPromoCode = () => {
    // Here, you can implement the logic to verify the promo code and apply the discount
    // For now, we'll just assume a promo code named "DISCOUNT10" that gives 10% off
    if (promoCode === 'DISCOUNT10') {
      setDiscountedPrice((prevTotal) => prevTotal * 0.9);
    } else {
      // Promo code is invalid or does not exist
      // You can show an error message or take other actions as per your requirements
      // For simplicity, we'll just reset the discountedPrice to null
      setDiscountedPrice(null);
    }
  };

  const calculateDiscountedPrice = () => {
    // Calculate the total price of cart items
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    // Set the discountedPrice based on the promo code (if applied)
    if (promoCode === 'masai20') {
      setDiscountedPrice(totalPrice * 0.9);
    } else {
      setDiscountedPrice(totalPrice);
    }
  };

  const handleDelete = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
  const getCartItemCount = () => {
    return cartItems.length;
  };
  const estimateDeliveryDate = () => {
    // For simplicity, let's assume the delivery date is 7 days from today
    const today = new Date();
    const estimatedDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    return estimatedDate.toDateString();
  };

  // Helper function to calculate the total price with shipping
  const getTotalPriceWithShipping = () => {
    // Flat shipping rate of $5
    const shippingRate = 5;
    return getTotalPrice() + shippingRate;
  };
  const handleClick=()=>{
      
    navigate("/pay")
  
}


  return (
    <ChakraProvider theme={theme}>
      <HStack align="center" p={4} w="100%" >
      <VStack w="80%" align="center" p={4}>
      
        
        {/* Cart Items Section */}
        {cartItems.map((item) => (
          <Flex
            key={item.id}
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ base: 'center', md: 'flex-start' }}
            w="100%"
            p={4}
            mb={2}
            borderWidth={2}
            borderRadius={4}
          >
            <Flex alignItems="center" mb={{ base: 4, md: 0 }}>
              <Image src={item.image} alt={item.name} boxSize="80px" mr={4} />
              <Text fontWeight="bold">{item.name}</Text>
            </Flex>
            <Text>${item.price.toFixed(2)}</Text>
            <Box
              cursor="pointer"
              color="red.500"
              fontWeight="bold"
              // onClick={() => handleDelete(item.id)}
            >
              Delete
            </Box>
          </Flex>
        ))}
        <Box fontSize="20px" mt={4} textAlign="right" w="100%">
          Total: ${getTotalPrice().toFixed(2)}
        </Box>
        </VStack>
        
        <VStack>
        {/* Order Summary Section */}
        {cartItems.length > 0 && (
        <Box w="100%" p={4} borderWidth={1} borderRadius={6}>
        <Box fontSize="24px" fontWeight="bold" mb={4} textAlign="center" w="100%">
          Order Summary
        </Box>

        <Flex justifyContent="space-between" mb={2}>
          <Text>Total Items:</Text>
          <Text>{getCartItemCount()}</Text>
        </Flex>
        {promoCode && (
         
          <Flex justifyContent="space-between" mb={2}>
            <Text>Promo Code Discount (10% off):</Text>
            <Text color="green.500">-${(getTotalPrice() - discountedPrice).toFixed(2)}</Text>
          </Flex>
        )}
        <Flex justifyContent="space-between" alignItems="center" gap={4} mt={4}>
           <Input
             placeholder="Enter Promo Code"
             value={promoCode}
             size="md"
             onChange={(e) => setPromoCode(e.target.value)}
           />
           <Button colorScheme="blue" onClick={handleApplyPromoCode}>
             Apply 
           </Button>
         </Flex>
        <Flex justifyContent="space-between" mb={2}>
          <Text>Discounted Price:</Text>
          <Text>${discountedPrice !== null ? discountedPrice.toFixed(2) : getTotalPrice().toFixed(2)}</Text>
        </Flex>
        
        {promoCode && (
          <Box color="green.500" fontSize="sm" textAlign="center" mt={2}>
            {`Promo code "${promoCode}" applied successfully!`}
          </Box>
        )}
        
        <Flex justifyContent="space-between" mb={2}>
          <Text>Total Price:</Text>
          <Text>${getTotalPrice().toFixed(2)}</Text>
        </Flex>
        
        
        <Flex justifyContent="space-between" mb={2}>
          <Text>Shipping:</Text>
          <Text>$5.00</Text>
        </Flex>
        <Flex justifyContent="space-between" mb={2}>
          <Text>Estimated Delivery Date:</Text>
          <Text>{estimateDeliveryDate()}</Text>
        </Flex>
        <Flex justifyContent="space-between" mb={2}>
          <Text>Total Price with Shipping:</Text>
          <Text>${getTotalPriceWithShipping().toFixed(2)}</Text>
        </Flex>
        <Button colorScheme="blue" w="100%" mt={4} onClick={handleClick}> 
          Proceed to Checkout
        </Button>
      </Box>
     )}
     </VStack>  
      </HStack>
   <orderSummery/>
      
    </ChakraProvider>
  );
};

export default Cart;
