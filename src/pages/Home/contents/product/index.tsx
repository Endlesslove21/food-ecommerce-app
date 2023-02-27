import { Product } from "@/types/product";
import { Box } from "@chakra-ui/react";

import ProductLabel from "./components/ProductLabel";
import ProductTabList from "./components/ProductTabList";

type Props = {
  productData: Product[];
  productLabel: string;
};

const ProductList = ({ productData, productLabel }: Props) => {
  return (
    <Box>
      <ProductLabel>{productLabel}</ProductLabel>
      <ProductTabList productData={productData} />
    </Box>
  );
};

export default ProductList;
