import styled from "styled-components";

const NavItem = styled.li`
  display: block;
  color: ${({ theme }) => theme.white};
  text-align: center;
  padding: 0.5em 1em;

  a,
  span {
    cursor: pointer;
    display: block;
    margin: 0 auto;
    padding: 1em 0;

    &.active {
      box-shadow: inset 0 -2px 0 0 ${({ theme }) => theme.teal};
      svg {
        fill: ${({ theme }) => theme.white};
      }
    }
  }

  svg {
    display: block;
    margin: 0 auto;
  }
`;
export default NavItem;
