import { Product } from '../../types/product';
import { useState, useEffect } from 'react';
import productApi from '../../apis/productApi';
import { useRouter } from 'next/router';

const useProductDetail = () => {
  const [product, setProduct] = useState<Product>({
    id: '',
    name: '',
    thumbnail: '',
    price: '',
  });

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getProduct();
  }, [id]);

  const getProduct = async () => {
    const res = await productApi.getProductDetail(String(id));
    setProduct(res.data.product);
  };

  return product;
};

export default useProductDetail;
