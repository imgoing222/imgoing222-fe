import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import { ErrorPage } from '../../components/ErrorPage';
import useProductDetail from './useProductDetail';

const ProductDetailPage: NextPage = () => {
  const product = useProductDetail();

  return (
    <>
      {product ? (
        <>
          <Thumbnail src={product.thumbnail ? product.thumbnail : '/defaultThumbnail.jpg'} />
          <ProductInfoWrapper>
            <Name>{product.name}</Name>
            <Price>{product.price}원</Price>
          </ProductInfoWrapper>
        </>
      ) : (
        <ErrorPage>존재하지 않는 상품입니다.</ErrorPage>
      )}
    </>
  );
};

export default ProductDetailPage;

const Thumbnail = styled.img`
  width: 100%;
  height: 420px;
`;

const ProductInfoWrapper = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Price = styled.div`
  font-size: 18px;
  margin-top: 8px;
`;
