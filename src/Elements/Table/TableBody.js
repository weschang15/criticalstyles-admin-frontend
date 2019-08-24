import styled from "styled-components";
import { transparentize } from "polished";

const TableBody = styled.tbody`
  tr {
    td:last-of-type {
      text-align: center;
    }

    &:not(.no-hover) {
      &:hover {
        background-color: ${({ theme }) => transparentize(0.75, theme.gray)};
        td:last-of-type > * {
          visibility: visible;
        }
      }

      td:last-of-type > * {
        visibility: hidden;
      }
    }
  }
`;

export default TableBody;
