import { transparentize } from "polished";
import styled, { keyframes } from "styled-components";

export const shine = keyframes`
0% {
  left: -60px;
}

40%, 100% {
  left: 100%;
}
`;

export const Pill = styled.span`
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
      `linear-gradient(90deg, ${theme.gray} 0, ${transparentize(
        0.5,
        theme.white
      )} 50%, ${theme.gray} 100%)`};
    animation: ${shine} 1.4s infinite linear;
  }
`;
