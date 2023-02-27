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
import { ProductByCategory } from "@/types/product";
import ProductItemList from "./ProductItemList";

type Props = {
  data: ProductByCategory[];
};

const ProductTabList = ({ data }: Props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <Tabs variant={"unstyled"}>
      <TabList>
        {data.map((item) => (
          <Tab _selected={{ color: "white", bgColor: "primary" }}>
            <Box key={item.id}>
              <Center>
                <Image src={item.categoryIconUrl} alt={item.categoryName} />
              </Center>
              <Text mt={1}>{item.categoryName}</Text>
            </Box>
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {data.map((item) => (
          <ProductItemList data={item.products} />
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default ProductTabList;
