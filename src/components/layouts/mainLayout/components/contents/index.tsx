import { Flex, Container, Box } from "@chakra-ui/react";
import ProductLabel from "./product/ProductLabel";
import ProductTabList from "./product/ProductTabList";

import ImageSlider from "./slider";

type Props = {};
const IMAGES = [
  "/assets/images/banners/slide1.webp",
  "/assets/images/banners/slide2.webp",
  "/assets/images/banners/slide3.webp",
  "/assets/images/banners/slide4.webp",
];
const Contents = (props: Props) => {
  return (
    <Box>
      <ImageSlider images={IMAGES} />
      <ProductLabel />
      <ProductTabList />
    </Box>
  );
};

export default Contents;
