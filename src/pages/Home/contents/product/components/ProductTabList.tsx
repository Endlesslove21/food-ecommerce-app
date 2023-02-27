import NavList from "@/components/elements/nav-list";
import { useState } from "react";
import {
  Box,
  Center,
  Image,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Product } from "@/types/product";
import ProductItemList from "./ProductItemList";

type Props = {
  productData: Product[];
};

const ProductTabList = ({ productData }: Props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <Tabs variant={"unstyled"}>
      <TabList>
        {productData.map((item) => (
          <Tab _selected={{ color: "white", bgColor: "primary" }}>
            <Box key={item.id}>
              <Center>
                <Image src={item.iconName} alt={item.name} />
              </Center>
              <Text mt={1}>{item.name}</Text>
            </Box>
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {productData.map((item) => (
          <ProductItemList itemList={item.productList} />
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default ProductTabList;
