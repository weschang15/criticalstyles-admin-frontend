import styled from "styled-components";

export const NavbarListItem = styled.li`
  display: block;
  color: ${({ theme }) => theme.white};
  a {
    text-decoration: none;
  }
`;

export const NavListItem = styled(NavbarListItem)`
  text-align: center;

  a,
  span {
    cursor: pointer;
    display: block;
    margin: 0 auto;
    padding: 1em;

    &.active {
      svg {
        box-shadow: 0px 4px 0 0 ${({ theme }) => theme.black},
          0px 6px 0 0 ${({ theme }) => theme.teal};
        fill: ${({ theme }) => theme.white};
      }
    }
  }

  svg {
    display: block;
    margin: 0 auto;
  }
`;
