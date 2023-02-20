import { Grid } from "@chakra-ui/react";
import React from "react";
import { PRODUCT_LIST_DATA } from "@/configs/productListData";
import FlashSaleItem from "../flash-sale_item";
type FlashSaleListProps = {};

const FlashSaleList = (props: FlashSaleListProps) => {
  return (
    <Grid mt={10} templateColumns="repeat(5, 1fr)" gap={6}>
      {PRODUCT_LIST_DATA.map((item) => (
        <FlashSaleItem
          images={item.images}
          info={item.info}
          name={item.name}
          onClickBuy={() => {
            alert("Hi");
          }}
          vendor={item.vendor}
          key={item.id}
        />
      ))}
    </Grid>
  );
};

export default FlashSaleList;
