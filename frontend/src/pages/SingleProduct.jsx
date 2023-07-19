import React from "react";
import LeftPart from "../components/singleProduct/LeftPart";
import RightPart from "../components/singleProduct/RightPart";
import { Box, Flex } from "@chakra-ui/react";

export default function SingleProduct() {
  return (
    <Box>
      <Flex gap="5">
        <Box p="5" w="65%" border="1px solid red">
          <LeftPart />
        </Box>
        <Box w="35%" p="5" border="1px solid red">
          <RightPart />
        </Box>
      </Flex>
    </Box>
  );
}
