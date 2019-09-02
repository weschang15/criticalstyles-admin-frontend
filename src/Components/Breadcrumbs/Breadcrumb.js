import { darken, transparentize } from "polished";
import styled from "styled-components";

const Breadcrumb = styled.li`
  color: ${({ theme }) => darken(0.25, theme.gray)};
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-right: 0.25em;

  &:focus-within {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.blue};
  }

  a {
    display: block;
    padding: 0.5em;
    text-decoration: none;

    &:focus,
    &:hover {
      color: ${({ theme }) => theme.blue};
      outline: none;
    }
  }

  &:not(:only-child):last-of-type {
    background-color: ${({ theme }) => transparentize(0.9, theme.blue)};
    color: ${({ theme }) => theme.blue};
    margin-right: 0;
  }
`;

export default Breadcrumb;
