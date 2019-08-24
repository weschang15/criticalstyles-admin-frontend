import styled from "styled-components";
import { transparentize, darken } from "polished";

const Breadcrumb = styled.li`
  color: ${({ theme }) => darken(0.5, theme.gray)};
  font-size: 14px;
  font-weight: 600;
  margin-right: 0.25em;

  a {
    text-decoration: none;
    &:focus,
    &:hover {
      color: ${({ theme }) => theme.blue};
    }
  }

  &:last-of-type {
    background-color: ${({ theme }) => transparentize(0.9, theme.blue)};
    border-radius: 12px;
    color: ${({ theme }) => theme.blue};
    margin-right: 0;
    a {
      padding: 0.25em 0.5em;
      display: block;
    }
  }
`;

export default Breadcrumb;
