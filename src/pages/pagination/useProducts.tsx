import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import productApi from '../../apis/productApi';
import { Pagination, Product } from '../../types/product';

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>();
  const [totalCount, setTotalCount] = useState(0);

  const router = useRouter();
  const page = Number(router.query.page);

  useEffect(() => {
    getProducts();
  }, [page]);

  const getProducts = async () => {
    const res = await productApi.getProducts(page, 10);
    const newProducts = placeCommas(res.data);
    setProducts(newProducts);
    setTotalCount(res.data.totalCount);
  };

  const placeCommas = (arr: Pagination) => {
    return arr.products.map((product) => ({
      ...product,
      price: `${product.price.toLocaleString()}원`,
    }));
  };

  return { products, totalCount };
};

export default useProducts;
