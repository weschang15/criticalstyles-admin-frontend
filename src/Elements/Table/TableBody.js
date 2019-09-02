import { transparentize } from "polished";
import styled from "styled-components";

const TableBody = styled.tbody`
  tr {
    td:last-of-type {
      text-align: center;
      > * {
        margin-right: 1em;
        &:last-child {
          margin: 0;
        }
      }
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
