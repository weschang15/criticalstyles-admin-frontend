import styled from "styled-components";
import { darken } from "polished";

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
    &:first-of-type {
      width: 20%;
    }

    &:nth-of-type(2) {
      width: 40%;
    }

    &:last-of-type {
      text-align: center;
    }
  }
`;

export default TableHeader;
