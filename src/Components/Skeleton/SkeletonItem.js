import React from "react";
import { TableCell, TableRow } from "../../Elements";
import { Pill } from "./Pill";

function SkeletonItem({ size, colCount, className }) {
  return (
    <TableRow className={className}>
      {Array.from({ length: colCount }, (_, i) => {
        return (
          <TableCell key={i}>
            <Pill size={size} />
          </TableCell>
        );
      })}
    </TableRow>
  );
}

export default SkeletonItem;
