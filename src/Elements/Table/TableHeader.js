import { darken } from "polished";
import styled from "styled-components";

const TableHeader = styled.thead`
  background-color: ${({ theme }) => theme.gray};
  tr:first-of-type {
    border: 0;
  }

  th {
    color: ${({ theme }) => darken(0.75, theme.gray)};
    font-weight: 700;
    text-transform: uppercase;
    text-align: left;

    &:nth-last-of-type(2) {
      width: 30%;
    }

    &:last-of-type {
      text-align: center;
      width: 20%;
    }
  }
`;

export default TableHeader;
