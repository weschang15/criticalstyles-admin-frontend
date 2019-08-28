import { transparentize } from "polished";
import styled from "styled-components";

const NavItem = styled.li`
  display: block;
  color: ${({ theme }) => theme.white};
  text-align: center;
  padding: 0.5em;

  a,
  span {
    cursor: pointer;
    display: block;
    padding: 0.65em;
    &.active {
      box-shadow: inset 0 -2px 0 0 ${({ theme }) => transparentize(0.8, theme.white)};
      svg {
        fill: ${({ theme }) => theme.white};
      }
    }
  }
`;
export default NavItem;
