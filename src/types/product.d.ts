export type Product = {
  id: number;
  name: string;
  iconName: string;
  productList: {
    productId: number;
    itemName: string;
    image: string;
    code: string;
    vendor?: string;
    originalPrice: number;
    status: number;
    varients?: {
      sizeBox: string;
      dimension: string;
      discountPercent: number;
      specificPrice: number;
    }[];
    description: string;
  }[];
};
