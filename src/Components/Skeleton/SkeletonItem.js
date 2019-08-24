import React from "react";
import styled, { keyframes } from "styled-components";
import { TableRow, TableCell } from "../../Elements";

const animation = keyframes`
  0% {
    left: -60px;
  }
  
  40%, 100% {
    left: 100%;
  }
`;

const Line = styled.span`
  display: block;
  width: ${({ size }) => `${size}%`};
  height: 16px;
  margin: 2.5px 0;
  border-radius: 7px;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.gray};
  &:after {
    position: absolute;
    top: 0;
    left: -60px;
    content: "";
    display: block;
    height: 100%;
    width: 30px;
    background-image: ${({ theme }) =>
      `linear-gradient(90deg, ${theme.gray} 0px, ${theme.white} 40px, ${
        theme.gray
      } 80px)`};
    animation: ${animation} 1.6s infinite linear;
  }
`;

function SkeletonItem({ size }) {
  return (
    <TableRow>
      <TableCell>
        <Line size={size} />
      </TableCell>
      <TableCell>
        <Line size={size} />
      </TableCell>
      <TableCell>
        <Line size={size} />
      </TableCell>
      <TableCell>
        <Line size={size} />
      </TableCell>
    </TableRow>
  );
}

export default SkeletonItem;
