import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import ProductList from '../../components/ProductList';
import Pagination from '../../components/pagination/Pagination';
import useProducts from './useProducts';
import { ErrorPage } from '../../components/ErrorPage';

const PaginationPage: NextPage = () => {
  const { products, totalCount } = useProducts();
  return (
    <>
      {products ? (
        <Container>
          <ProductList products={products} />
          <Pagination totalCount={totalCount} />
        </Container>
      ) : (
        <ErrorPage>존재하지 않는 페이지입니다.</ErrorPage>
      )}
    </>
  );
};

export default PaginationPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
`;
