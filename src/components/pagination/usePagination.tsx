import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const usePagination = (totalCount: number) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPages, setCurrentPages] = useState(0);

  const totalPages = Math.ceil(totalCount / 10);
  const lastPages = Math.ceil(totalPages / 5);

  let tmp = [...Array(11)].map((v, i) => i + 1);
  let pages: Array<number[]> = [];
  for (let i = 0; i < lastPages; i++) {
    pages.push(tmp.splice(0, 5));
  }

  useEffect(() => {
    if (currentPage) {
      router.push(`/pagination?page=${currentPage}`);
    }
  }, [currentPage]);

  const onClickPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(Number(e.currentTarget.innerText));
  };

  const onClickArrowButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.id === 'left') {
      setCurrentPages((prev) => prev - 1);
      setCurrentPage(pages[currentPages - 1][4]);
    } else {
      setCurrentPages((prev) => prev + 1);
      setCurrentPage(pages[currentPages + 1][0]);
    }
  };

  return { currentPage, currentPages, pages, lastPages, onClickPage, onClickArrowButton };
};

export default usePagination;
