import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import ProductList from '../../components/ProductList';
import Pagination from '../../components/pagination/Pagination';
import useProducts from './useProducts';

const PaginationPage: NextPage = () => {
  const products = useProducts();
  return (
    <>
      {products && (
        <Container>
          <ProductList products={products} />
          <Pagination />
        </Container>
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
