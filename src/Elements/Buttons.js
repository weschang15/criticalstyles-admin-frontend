import { darken } from "polished";
import styled from "styled-components";

export const PrimaryButton = styled.button`
  background-color: ${({ bgColor, theme }) =>
    bgColor ? theme[bgColor] : theme.yellow};
  border: 0;
  border-radius: 2px;
  color: ${({ textColor, theme }) =>
    textColor ? theme[textColor] : theme.black};
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 1;
  margin: 0.5em 0;
  padding: 0.75em 1em;
  text-transform: uppercase;
  height: 40px;
  min-width: 80px;

  &:focus {
    box-shadow: inset 0 0 0 2px
      ${({ bgColor, theme }) =>
        bgColor ? darken(0.25, theme[bgColor]) : darken(0.25, theme.yellow)};
    outline: 0;
  }
  &:hover {
    background-color: ${({ bgColor, theme }) =>
      bgColor ? darken(0.21, theme[bgColor]) : darken(0.15, theme.yellow)};
  }
  &:active {
    background-color: ${({ bgColor, theme }) =>
      bgColor ? darken(0.25, theme[bgColor]) : darken(0.25, theme.yellow)};
    transform: translateY(1px);
    transition: none;
  }
`;

export const LinkButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ textColor, theme }) =>
    textColor ? theme[textColor] : theme.black};
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  padding: 0;
  text-decoration: underline;
`;
