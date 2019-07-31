import styled from "styled-components";
import { darken, transparentize } from "polished";

export const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.yellow};
  border: 0;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 1;
  margin: 0.5em 0;
  padding: 0.75em 1em;
  text-transform: uppercase;

  &:focus {
    box-shadow: inset 0 0 0 2px ${({ theme }) => darken(0.25, theme.yellow)};
    outline: 0;
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.15, theme.yellow)};
  }
  &:active {
    background-color: ${({ theme }) => darken(0.25, theme.yellow)};
    transform: translateY(1px);
    transition: none;
  }
`;

export const LinkButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => transparentize(0.6, theme.white)};
  border: 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 1;
  margin: 0.5em 0;
  text-transform: uppercase;
  display: inline-block;
  text-decoration: underline;
`;
