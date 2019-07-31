import styled from "styled-components";
import { darken } from "polished";

export const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.teal};
  border: 1px solid ${({ theme }) => theme.teal};
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
    box-shadow: 0 0 0 2px ${({ theme }) => theme.black},
      0 0 0 4px ${({ theme }) => theme.teal};
    outline: 0;
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.teal)};
    border-color: ${({ theme }) => darken(0.05, theme.teal)};
  }
  &:active {
    background-color: ${({ theme }) => darken(0.15, theme.teal)};
    border-color: ${({ theme }) => darken(0.15, theme.teal)};
    transform: translateY(1px);
    transition: none;
  }
`;

export const LinkButton = styled.button``;
