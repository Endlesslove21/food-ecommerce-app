import { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { ProductByCategory } from "@/types/product";
import NavList from "@/components/elements/nav-list";

type Props = {
  data: ProductByCategory[];
  productBannerUrl: string;
};

const ProductTabList = ({ data, productBannerUrl }: Props) => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [productBtnName, setProductBtnName] = useState<any>(
    <Flex>
      <Image src={data[tabIndex].categoryIconUrl} />
      <Text>{data[tabIndex].categoryName}</Text>
    </Flex>
  );

  return (
    <Box>
      {/* tab list */}
      <NavList mt="5">
        {data.map((tab, index) => (
          <Box
            p={3}
            mx={3}
            as="li"
            bgColor={index === tabIndex ? "primary" : ""}
            color={index === tabIndex ? "white" : ""}
            cursor={"pointer"}
            onClick={() => {
              setTabIndex(index);
              setProductBtnName(
                <Flex>
                  <Image src={tab.categoryIconUrl} />
                  <Text>{tab.categoryName}</Text>
                </Flex>
              );
            }}
            key={tab.id}
          >
            <Center pb={2}>
              <Image src={tab.categoryIconUrl} alt={tab.categoryName} />
            </Center>
            <Text>{tab.categoryName}</Text>
          </Box>
        ))}
      </NavList>

      {/* tab content */}
      <Grid
        h={"100%"}
        pt={5}
        gap={5}
        templateRows={"repeat(2, 1fr)"}
        templateColumns="repeat(4,1fr)"
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Link href="#">
            <Image src={productBannerUrl} />
          </Link>
        </GridItem>

        {data[tabIndex].products.map((item) => (
          <GridItem colSpan={1}>
            <Box>
              <Image src={item.imageUrl} alt={item.itemName} />
              <Heading as={"h6"}>{item.itemName}</Heading>
              <Text>{item.originalPrice}đ</Text>
              <Button>Chon mua</Button>
            </Box>
          </GridItem>
        ))}
      </Grid>
      {/* dynamic tab content button */}
      <Center>
        <Button>Xem tất cả {productBtnName}</Button>
      </Center>
    </Box>
  );
};

export default ProductTabList;
