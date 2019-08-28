import styled from "styled-components";

export const Square = styled.span`
  display: block;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 7px;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.gray};
`;
