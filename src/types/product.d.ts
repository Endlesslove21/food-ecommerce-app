export type ProductVariant = {
  sizeBox: string;
  dimension: string;
  discountPercent: number;
  specificPrice: number;
};

export type Product = {
  productId: number;
  itemName: string;
  imageUrl: string;
  slug: string;
  vendor?: string;
  originalPrice: number;
  status: number;
  variants?: ProductVariant[];
  description: string;
};

export type ProductByCategory = {
  id: number;
  categoryName: string;
  categoryIconUrl: string;
  products: Product[];
};
