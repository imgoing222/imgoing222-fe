import { request } from './index';
import { AxiosResponse } from 'axios';
import { Pagination, ProductDetail } from '../types/product';

interface ProductApiType {
  getProducts: (page: number, size: number) => Promise<AxiosResponse<Pagination>>;
  getProductDetail: (userId: string) => Promise<AxiosResponse<ProductDetail>>;
}

const productApi: ProductApiType = {
  getProducts: (page, size) => request.get(`products?page=${page}&size=${size}`),
  getProductDetail: (userId) => request.get(`products/${userId}`),
};

export default productApi;
