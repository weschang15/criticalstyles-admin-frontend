import styled from "styled-components";

export const PaginationItem = styled.li`
  display: inline-flex;
  font-size: 0.9em;
  button {
    padding: 0.15em 0.5em;
    border-radius: 4px;
    background-color: var(--pure-white);
    border: 1px solid #d2d3d2;
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      box-shadow: none;
    }
    &:hover,
    &:focus {
      background-color: var(--white);
    }
  }

  &:not(:first-of-type) {
    margin-left: 0.5em;
  }
`;
