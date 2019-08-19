import styled from "styled-components";

const TableHeader = styled.thead`
  background-color: ${({ theme }) => theme.lightGray};
  tr:first-of-type {
    border: 0;
  }

  th {
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.darkGray};
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
