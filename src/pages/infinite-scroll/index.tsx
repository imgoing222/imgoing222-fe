import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import { useRef, useEffect } from 'react';

import ProductList from '../../components/ProductList';
import useInfiniteScroll from './useInfiniteScroll';

const InfiniteScrollPage: NextPage = () => {
  const observerTargetEl = useRef<HTMLDivElement>(null);

  const { products } = useInfiniteScroll(observerTargetEl);

  return (
    <>
      <Container>
        <ProductList products={products} />
        <div ref={observerTargetEl}></div>
      </Container>
    </>
  );
};

export default InfiniteScrollPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
`;
