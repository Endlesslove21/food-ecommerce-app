import NavList from "@/components/elements/nav-list";
import React from "react";
import { NAV_LIST_DATA } from "@/configs/navListData";
import { Button } from "@chakra-ui/react";
type ProductTabListProps = {};

const ProductTabList = (props: ProductTabListProps) => {
  return (
    <NavList>
      {NAV_LIST_DATA[0].children?.map((item) => (
        <Button>{item.label}</Button>
      ))}
    </NavList>
  );
};

export default ProductTabList;
