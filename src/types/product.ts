export type Product = {
  id: string;
  name: string;
  thumbnail: string | null;
  price: string;
};

export type Pagination = {
  products: Product[];
  totalCount: number;
};

export type ProductDetail = {
  product: Product;
};
