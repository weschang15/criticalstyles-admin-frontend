import { transparentize } from "polished";
import styled from "styled-components";

export const DropdownListItem = styled.li`
  background-color: #fff;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  margin: 5px 0;
  padding: 0.5em;
  position: relative;
  &.active {
    border-radius: 0;
    padding-left: 15px;
    pointer-events: none;

    &:before {
      background-color: ${({ theme }) => theme.blue};
      border-radius: 50%;
      content: "";
      display: block;
      height: 5px;
      left: 0;
      position: absolute;
      top: 50%;
      transform: translate3d(0, -50%, 0);
      width: 5px;
    }
  }
  &:hover {
    background-color: ${({ theme }) => transparentize(0.9, theme.blue)};
    color: ${({ theme }) => theme.blue};
  }
`;
