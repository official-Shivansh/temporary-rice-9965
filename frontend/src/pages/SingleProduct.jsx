import React from "react";
import LeftPart from "../components/singleProduct/LeftPart";
import RightPart from "../components/singleProduct/RightPart";
import { Box, Flex } from "@chakra-ui/react";

export default function SingleProduct() {
  return (
    <Box mt='80px'>
      <Flex gap="5" flexDirection={{ base: "column", md: "row" }}>
        <Box p="5" w={{ base: "100%",  md: "65%"}}>
          <LeftPart />
        </Box>
        <Box w={{ base: "100%",  md: "35%"}} p="5">
          <RightPart />
        </Box>
      </Flex>
    </Box>
  );
}
