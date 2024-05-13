import { useState, useCallback } from 'react';

export const usePagination = (
  defaultPageSize: number,
  defaultPageNumber: number,
) => {
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [pageNumber, setPageNumber] = useState(defaultPageNumber);

  const handlePageSizeChange = useCallback(
    (size: number) => {
      setPageSize(size);
      setPageNumber(1);
    },
    [pageSize],
  );

  const handlePageNumberChange = useCallback(
    (page: number) => {
      setPageNumber(page);
    },
    [pageNumber],
  );

  return {
    pageSize,
    pageNumber,
    handlePageSizeChange,
    handlePageNumberChange,
  };
};
