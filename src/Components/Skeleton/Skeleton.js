import React, { useMemo } from "react";
import PropTypes from "prop-types";
import SkeletonItem from "./SkeletonItem";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Skeleton({ count }) {
  const items = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const size = getRndInteger(40, 75);
      return <SkeletonItem key={i} size={size} />;
    });
  }, [count]);

  return <>{items}</>;
}

Skeleton.propTypes = {
  count: PropTypes.number.isRequired
};

Skeleton.defaultProps = {
  count: 4
};

export default Skeleton;
