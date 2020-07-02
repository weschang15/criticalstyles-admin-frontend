import PropTypes from "prop-types";
import React, { useMemo } from "react";
import { Table, TableBody, TableHeader, TableRow } from "../../Elements";
import SkeletonItem from "./SkeletonItem";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Skeleton({ rowCount, colCount, className, labels }) {
  const rows = useMemo(() => {
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

  const cells = labels.map((label, i) => <th key={i.toString()}>{label}</th>);

  return (
    <Table>
      <TableHeader>
        <TableRow>{cells}</TableRow>
      </TableHeader>
      <TableBody>{rows}</TableBody>
    </Table>
  );
}

Skeleton.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  rowCount: PropTypes.number.isRequired,
  colCount: PropTypes.number,
};

Skeleton.defaultProps = {
  rowCount: 4,
  colCount: 3,
  className: "no-hover",
};

export default Skeleton;
