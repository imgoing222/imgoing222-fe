import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import productApi from '../../apis/productApi';
import { Product } from '../../types/product';
import { placeCommas } from '../../utilities/placeCommas';

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

  return { products, totalCount };
};

export default useProducts;
