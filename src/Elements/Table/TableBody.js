import styled from "styled-components";

const TableBody = styled.tbody`
  tr {
    td:last-of-type {
      text-align: center;
    }

    &:not(.no-hover) {
      &:hover {
        background-color: ${({ theme }) => theme.hoverGray};
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
