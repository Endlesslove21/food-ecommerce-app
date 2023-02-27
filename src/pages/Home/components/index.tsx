import { Flex, Container, Box } from "@chakra-ui/react";
import ProductList from "./product";
import ImageSlider from "./slider";
import { FRUIT_GIFTS_DATA } from "@/configs/fruitGiftsData";
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
      <ProductList label="Quà tặng trái cây" data={FRUIT_GIFTS_DATA} />
    </Box>
  );
};

export default Contents;
