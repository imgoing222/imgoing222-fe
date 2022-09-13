import { request } from './index';
import { AxiosResponse } from 'axios';
import { Product } from '../types/product';

interface ProductApiType {
  getProducts: (page: number, size: number) => Promise<AxiosResponse<Product[]>>;
  getProductDetail: (userId: string) => Promise<AxiosResponse<Product>>;
}

const productApi: ProductApiType = {
  getProducts: (page, size) => request.get(`products?page=${page}&size=${size}`),
  getProductDetail: (userId) => request.get(`users/${userId}`),
};

export default productApi;
