import PropTypes from "prop-types";
import React from "react";
import { PaginationItem } from "./PaginationItem";

function PaginationNext({ isLastPage, handleClick }) {
  return (
    !isLastPage && (
      <PaginationItem>
        <button onClick={handleClick}>Next page</button>
      </PaginationItem>
    )
  );
}

PaginationNext.defaultProps = {
  isLastPage: false,
  handleClick: () => null,
};

PaginationNext.propTypes = {
  isLastPage: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export { PaginationNext };
