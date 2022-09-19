import React from 'react';
import styled from 'styled-components';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import usePagination from './usePagination';

interface Props {
  totalCount: number;
}

const Pagination = ({ totalCount }: Props) => {
  const { currentPage, currentPages, pages, lastPages, onClickPage, onClickArrowButton } =
    usePagination(totalCount);

  return (
    <Container>
      <Button id='left' disabled={currentPages === 0} onClick={onClickArrowButton}>
        <VscChevronLeft />
      </Button>
      <PageWrapper>
        {pages[currentPages].map((page) => (
          <Page
            key={page}
            selected={page === currentPage}
            disabled={page === currentPage}
            onClick={onClickPage}
          >
            {page}
          </Page>
        ))}
      </PageWrapper>
      <Button id='right' disabled={currentPages === lastPages - 1} onClick={onClickArrowButton}>
        <VscChevronRight />
      </Button>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin-top: 40px;
  margin-left: -20px;
`;

const Button = styled.button`
  &:disabled {
    color: #e2e2ea;
    cursor: default;
  }
  cursor: pointer;
`;

const PageWrapper = styled.div`
  display: flex;
  margin: 0 16px;
`;

type PageType = {
  selected: boolean;
};

const Page = styled.button<PageType>`
  padding: 4px 6px;
  background-color: ${({ selected }) => (selected ? '#000' : 'transparent')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  font-size: 20px;
  cursor: pointer;
  & + & {
    margin-left: 4px;
  }

  &:disabled {
    cursor: default;
  }
`;