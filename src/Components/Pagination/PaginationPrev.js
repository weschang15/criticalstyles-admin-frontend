import PropTypes from "prop-types";
import React from "react";
import { PaginationItem } from "./PaginationItem";

function PaginationPrev({ isFirstPage, handleClick }) {
  return (
    !isFirstPage && (
      <PaginationItem>
        <button onClick={handleClick}>Next page</button>
      </PaginationItem>
    )
  );
}

PaginationPrev.defaultProps = {
  isFirstPage: false,
  handleClick: () => null,
};

PaginationPrev.propTypes = {
  isFirstPage: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export { PaginationPrev };
