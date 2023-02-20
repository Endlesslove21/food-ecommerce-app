import { Box, Image, Flex, Heading, Center } from "@chakra-ui/react";
import ProductNavigation from "@/components/elements/product-navigation";
import CountdownClock from "./countdown-clock";
import FlashSaleList from "./flash-sale_list";

type Props = {};

const FlashSale = (props: Props) => {
  const targetDate = new Date("2023-03-31T00:00:00.000Z");
  return (
    <Box maxWidth="1300px" width="100%" m="0 auto" mt="650px">
      {/* header_Flashsale */}
      <Flex justifyContent="space-between" height="50px">
        <Flex>
          <Image
            src="/assets/images/logo/flash_sale.webp"
            alt="flash_sale"
            align="left"
          />
          <Center>
            <Heading as="h3" fontSize="2xl" textTransform="uppercase">
              Flash sale
            </Heading>
          </Center>
          <CountdownClock targetDate={targetDate} />
        </Flex>

        <ProductNavigation />
      </Flex>
      {/* product_Flash-sale */}
      <FlashSaleList />
    </Box>
  );
};

export default FlashSale;
