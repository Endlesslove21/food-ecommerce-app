import { ProductByCategory } from "@/types/product";
import { Box, ChakraStyledOptions } from "@chakra-ui/react";

import ProductLabel from "./components/ProductLabel";
import ProductTabList from "./components/ProductTabList";

type Props = {
  data: ProductByCategory[];
  label: string;
  containerProps?: ChakraStyledOptions;
};

const ProductList = ({ data, label, containerProps }: Props) => {
  return (
    <Box {...containerProps}>
      <ProductLabel>{label}</ProductLabel>

      <ProductTabList data={data} />
    </Box>
  );
};

export default ProductList;
