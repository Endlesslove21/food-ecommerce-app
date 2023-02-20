import { Center, Circle, Flex, Icon, Text, Button } from "@chakra-ui/react";
import React from "react";

import { BsBagPlus } from "react-icons/bs";
type Props = {};

const Cart = (props: Props) => {
  return (
    <Button ml={10} variant="unstyled">
      <Flex>
        <Flex position="relative">
          <Center>
            <Icon as={BsBagPlus} boxSize={7} />
          </Center>
          <Circle
            position="absolute"
            left={4}
            bg="main"
            color="white"
            size="18px"
            fontSize="10px"
          >
            0
          </Circle>
        </Flex>
        <Center>
          <Text fontWeight="400" pl={3} fontSize="14px">
            Giỏ hàng
          </Text>
        </Center>
      </Flex>
    </Button>
  );
};

export default Cart;
