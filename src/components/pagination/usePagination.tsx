import { useState, useEffect, useCallback, useMemo } from 'react';

interface Props {
  initialPage: number;
  totalPages: number;
  arraySize: number;
  moveToCurrentPage: (currentPage: number) => void;
}

const usePagination = ({ initialPage, totalPages, arraySize, moveToCurrentPage }: Props) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [currentPages, setCurrentPages] = useState(0);

  const lastPages = Math.ceil(totalPages / arraySize);

  const getPaginationList = () => {
    let tmpPages = [];
    let tmp = [...Array(totalPages)].map((_, i) => i + 1);
    for (let i = 0; i < lastPages; i++) {
      tmpPages.push(tmp.splice(0, arraySize));
    }
    return tmpPages;
  };

  const pages: number[][] = useMemo(() => getPaginationList(), [totalPages, arraySize]);

  useEffect(() => {
    moveToCurrentPage(currentPage);
  }, [currentPage]);

  const onClickPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(Number(e.currentTarget.innerText));
  };

  const onClickArrowButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.id === 'left') {
      setCurrentPages((prev) => prev - 1);
      setCurrentPage(pages[currentPages - 1][arraySize - 1]);
    } else {
      setCurrentPages((prev) => prev + 1);
      setCurrentPage(pages[currentPages + 1][0]);
    }
  };

  return { currentPage, currentPages, pages, lastPages, onClickPage, onClickArrowButton };
};

export default usePagination;
