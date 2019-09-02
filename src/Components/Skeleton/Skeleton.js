import PropTypes from "prop-types";
import React, { useMemo } from "react";
import SkeletonItem from "./SkeletonItem";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Skeleton({ rowCount, colCount, className }) {
  const items = useMemo(() => {
    return Array.from({ length: rowCount }, (_, i) => {
      const size = getRndInteger(40, 75);
      return (
        <SkeletonItem
          key={i}
          size={size}
          colCount={colCount}
          className={className}
        />
      );
    });
  }, [rowCount, colCount, className]);

  return <>{items}</>;
}

Skeleton.propTypes = {
  rowCount: PropTypes.number.isRequired,
  colCount: PropTypes.number
};

Skeleton.defaultProps = {
  rowCount: 4,
  colCount: 3,
  className: "no-hover"
};

export default Skeleton;
