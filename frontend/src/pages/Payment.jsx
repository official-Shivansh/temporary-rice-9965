import React, { useState } from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  VStack,
  Radio,
  RadioGroup,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState('');
  const navigate = useNavigate();

  const handlePaymentChange = (value) => {
    setPaymentMethod(value);
  };

  const handlePayNow = () => {
    if (paymentMethod === 'card') {
      
      generateOTP();
      setShowOTP(true);
    } else {
    
    }
  };

  const generateOTP = () => {
    
    const newOTP = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOTP(newOTP);
    alert(`Generated OTP: ${newOTP}`);
  };

  const handleOTPSubmit = () => {
    
    const isValidOTP = otp === generatedOTP;
    if (isValidOTP) {
      setPaymentSuccess(true);
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleOrderPlace = () => {
    navigate("/cart")
    
  };
  const handleOrderPlaced = () => {
    
    setShowOTP(false);
    setPaymentSuccess(false);
    setPaymentMethod('card');
    setGeneratedOTP('');
  };

  return (
    <Flex justify="center" align="center" h="100vh">
      <VStack spacing={4} align="stretch">
        {paymentSuccess ? (
          <Box p={8} borderWidth={1} borderRadius="md" shadow="md">
            <Heading mb={4}>Order Placed Successfully!</Heading>
            <Text>Your payment has been successful. Thank you for your order!</Text>
            <Button mt={4} colorScheme="teal" onClick={handleOrderPlace}>
              Place Another Order
            </Button>
          </Box>
        ) : (
          <Box p={8} borderWidth={1} borderRadius="md" shadow="md">
            {!showOTP ? (
              <>
                <Heading mb={4}>Payment Information</Heading>
                <FormControl id="name">
                  <FormLabel>Name on Card</FormLabel>
                  <Input type="text" placeholder="John Doe" />
                </FormControl>

                <FormControl id="cardNumber">
                  <FormLabel>Card Number</FormLabel>
                  <Input type="text" placeholder="**** **** **** ****" />
                </FormControl>

                <FormControl id="expiry">
                  <FormLabel>Expiry Date</FormLabel>
                  <Input type="text" placeholder="MM/YY" />
                </FormControl>

                <FormControl id="cvv">
                  <FormLabel>CVV</FormLabel>
                  <Input type="text" placeholder="***" />
                </FormControl>

                <RadioGroup onChange={handlePaymentChange} value={paymentMethod}>
                  <FormControl as="fieldset">
                    <FormLabel as="legend">Payment Method</FormLabel>
                    <VStack align="start" spacing={2}>
                      <Radio value="card">Credit/Debit Card</Radio>
                      {/* Add other payment methods (e.g., PhonePe, Google Pay) here */}
                    </VStack>
                  </FormControl>
                </RadioGroup>

                <Button mt={4} colorScheme="teal" onClick={handlePayNow}>
                  Pay Now
                </Button>
              </>
            ) : (
              <>
                <Heading mb={4}>Enter OTP</Heading>
                <FormControl id="otp">
                  <FormLabel>OTP</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                  />
                </FormControl>

                <Button mt={4} colorScheme="teal" onClick={handleOTPSubmit}>
                  Submit OTP
                </Button>
              </>
            )}
          </Box>
        )}
      </VStack>
    </Flex>
  );
};

export default PaymentPage;
