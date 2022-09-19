import { Product } from '../../types/product';
import { useState, useEffect } from 'react';
import productApi from '../../apis/productApi';
import { useRouter } from 'next/router';

const useProduct = () => {
  const [product, setProduct] = useState<Product>();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const res = await productApi.getProductDetail(String(id));
    setProduct(res.data.product);
  };

  return product;
};

export default useProduct;
