import styled from "styled-components";

export const DropdownList = styled.ul`
  list-style: none;
  margin: 5px 0;
  padding: 0;
  &:not(:only-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.gray};
  }
`;
