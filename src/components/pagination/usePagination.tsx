import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

interface Props {
  totalPages: number;
  arraySize: number;
  moveToCurrentPage: (currentPage: string | string[] | undefined) => void;
}
const usePagination = ({ totalPages, arraySize, moveToCurrentPage }: Props) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(router.query.page);
  const [currentPages, setCurrentPages] = useState(0);

  const lastPages = Math.ceil(totalPages / arraySize);
  let tmp = [...Array(totalPages)].map((_, i) => String(i + 1));
  let pages: Array<string[]> = [];
  for (let i = 0; i < lastPages; i++) {
    pages.push(tmp.splice(0, arraySize));
  }

  useEffect(() => {
    moveToCurrentPage(currentPage);
  }, [currentPage]);

  const onClickPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(e.currentTarget.innerText);
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
