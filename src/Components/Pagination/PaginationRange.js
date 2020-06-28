import PropTypes from "prop-types";
import React from "react";
import { getRange } from "./getRange";
import Omission from "./Omission";
import { PaginationItem } from "./PaginationItem";

function PaginationRange({ currentPage, totalPages, handleClick }) {
  if (totalPages === 1) {
    return null;
  }

  return getRange(currentPage, totalPages).map((page, index) =>
    Number.isNaN(Number(page)) ? (
      <PaginationItem key={index.toString()}>
        <Omission />
      </PaginationItem>
    ) : (
      <PaginationItem key={index.toString()}>
        <button onClick={handleClick(page)}>{page}</button>
      </PaginationItem>
    )
  );
}

PaginationRange.defaultProps = {
  currentPage: 1,
  handleClick: () => null,
};

PaginationRange.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PaginationRange;
