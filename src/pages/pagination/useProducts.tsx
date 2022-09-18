import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import productApi from '../../apis/productApi';
import { Pagination, Product } from '../../types/product';

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>();
  const router = useRouter();
  const page = Number(router.query.page);

  useEffect(() => {
    getProducts();
  }, [page]);

  const getProducts = async () => {
    const res = await productApi.getProducts(page, 10);
    const newProducts = placeCommas(res.data);
    setProducts(newProducts);
  };

  const placeCommas = (arr: Pagination) => {
    return arr.products.map((product) => ({
      ...product,
      price: `${product.price.toLocaleString()}원`,
    }));
  };

  return products;
};

export default useProducts;
