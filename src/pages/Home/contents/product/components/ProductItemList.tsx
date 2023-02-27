import React from "react";
import { Product } from "@/types/product";
import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  Image,
  TabPanel,
  Text,
} from "@chakra-ui/react";
type Props = {
  itemList: Product["productList"];
};

const ProductItemList = ({ itemList }: Props) => {
  return (
    <TabPanel>
      <Grid templateColumns={"repeat(4, 1fr)"} gap={5}>
        {itemList.map((item) => (
          <Center>
            <Image src={item.image} alt={item.itemName} />
            <Heading as={"h6"}>{item.itemName}</Heading>
            <Text>{item.originalPrice}đ</Text>
            <Button>Chọn mua</Button>
          </Center>
        ))}
      </Grid>
    </TabPanel>
  );
};

export default ProductItemList;
