import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

type FlashSaleItemProps = {
  images: string[];
  vendor: string;
  name: string;

  info: {
    discountPercent: string;
    specificPrice: number;
    originalPrice: number;
  }[];
  onClickBuy: React.MouseEventHandler<HTMLButtonElement>;
};

const FlashSaleItem = (props: FlashSaleItemProps) => {
  const { images, vendor, name, info, onClickBuy } = props;

  return (
    <Box>
      <Box>
        <Text
          py={0.5}
          px={1.5}
          borderRadius={3}
          display="inline-block"
          color="white"
          fontWeight="bold"
          bgColor="red"
          fontSize="12px"
          as="span"
          letterSpacing={1}
        >
          {info[0].discountPercent}
        </Text>
      </Box>
      <Box>
        <Image src={images[0]} />
      </Box>
      <Box textAlign="center">
        <Text textTransform="uppercase" color="vendor" fontSize={12}>
          {vendor}
        </Text>
        <Heading mt={2} fontFamily="Quicksand" as="h3" fontSize="18px">
          {name}
        </Heading>
      </Box>
      <Flex mt={1} fontSize={14} justifyContent="center">
        <Text mr={3} color="red" fontWeight="bold">
          {info[0].specificPrice}
        </Text>
        <Text>{info[0].originalPrice}</Text>
      </Flex>

      <Button onClick={onClickBuy}>Chọn mua</Button>
    </Box>
  );
};

export default FlashSaleItem;
