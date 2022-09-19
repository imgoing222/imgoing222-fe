import { useState, useEffect, useCallback, useRef } from 'react';

import productApi from '../../apis/productApi';
import { Product } from '../../types/product';
import { placeCommas } from '../../utilities/placeCommas';

const useInfiniteScroll = (target: React.RefObject<HTMLDivElement>) => {
  const [products, setProducts] = useState<Product[]>([]);

  const page = useRef<number>(1);
  let lastPage: number;

  const getProducts = useCallback(async () => {
    try {
      if (page.current !== 1 && lastPage < page.current) return;
      const res = await productApi.getProducts(page.current, 16);
      const newProducts = placeCommas(res.data);
      setProducts((prev) => [...prev, ...newProducts]);
      lastPage = Math.ceil(res.data.totalCount / 16);
      page.current += 1;
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    if (!target.current) return;

    const observeIntersect = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        getProducts();
      }
    });
    observeIntersect.observe(target.current);

    return () => {
      observeIntersect.disconnect();
    };
  }, [getProducts]);

  return { products };
};

export default useInfiniteScroll;
