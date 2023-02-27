import MainLayout from "@/components/layouts/mainLayout";
import ProductList from "./components/product";
import ImageSlider from "./components/slider";
import { FRUIT_GIFTS_DATA } from "@/configs/fruitGiftsData";
import { Container } from "@chakra-ui/react";

type Props = {};
const IMAGES = [
  "/assets/images/banners/slide1.webp",
  "/assets/images/banners/slide2.webp",
  "/assets/images/banners/slide3.webp",
  "/assets/images/banners/slide4.webp",
];

const Home = (props: Props) => {
  return (
    <MainLayout>
      <ImageSlider images={IMAGES} />

      <Container maxW={"1300px"}>
        <ProductList
          containerProps={{ mb: "200px" }}
          label="Quà tặng trái cây"
          data={FRUIT_GIFTS_DATA}
        />
      </Container>
      <Container maxW={[100, 150, null, 200]}>
        <ProductList label="Quà tặng trái cây" data={FRUIT_GIFTS_DATA} />
      </Container>
      <Container maxW={"1300px"}>
        <ProductList label="Quà tặng trái cây" data={FRUIT_GIFTS_DATA} />
      </Container>
    </MainLayout>
  );
};

export default Home;
