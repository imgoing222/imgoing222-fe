import { Pagination } from '../types/product';

export const placeCommas = (arr: Pagination) => {
  return arr.products.map((product) => ({
    ...product,
    price: `${product.price.toLocaleString()}원`,
  }));
};
