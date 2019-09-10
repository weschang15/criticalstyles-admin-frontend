import { transparentize } from "polished";
import styled from "styled-components";

const ToolbarIcon = styled.button`
  background: none;
  backface-visibility: hidden;
  border: 0;
  border-radius: 12px;
  cursor: pointer;
  display: inline-block;
  margin-left: 1em;
  outline: none;
  padding: 5px;
  position: relative;

  svg {
    fill: ${({ theme }) => theme.blue};
    display: block;
  }

  &:focus,
  &:hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.blue};
  }

  &:hover {
    background-color: ${({ theme }) => transparentize(0.9, theme.blue)};
  }

  &:active {
    transform: perspective(1px) scale3d(0.95, 0.95, 0.95);
  }
`;

export default ToolbarIcon;
