import React, { useState } from "react";
import styled from "styled-components";
import { getOffset } from "./getOffset";
import { PaginationNext } from "./PaginationNext";
import { PaginationPrev } from "./PaginationPrev";
import PaginationRange from "./PaginationRange";

const PaginationList = styled.ul`
  margin: 2.25em 0;
  padding: 0;
  list-style: none;
  text-align: right;
`;

function Pagination({ totalPages, fetchMore }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page) => (e) => {
    e.preventDefault();
    setCurrentPage(page);
    fetchMore(getOffset(page));
  };

  const isFirstPage = currentPage === 1;

  const isLastPage = currentPage === totalPages;

  return (
    <PaginationList>
      <PaginationPrev
        isFirstPage={isFirstPage}
        handleClick={handleClick(currentPage - 1)}
      />
      <PaginationRange
        currentPage={currentPage}
        totalPages={totalPages}
        handleClick={handleClick}
      />
      <PaginationNext
        isLastPage={isLastPage}
        handleClick={handleClick(currentPage + 1)}
      />
    </PaginationList>
  );
}

export default Pagination;
