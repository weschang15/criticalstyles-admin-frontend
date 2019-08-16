import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { transparentize } from "polished";
import { Icons } from "../../Elements";
import { AuthContext } from "../../contexts/AuthContext";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.black};
  border-radius: 26px;
  box-shadow: 0 6px 26px -2px ${({ theme }) => transparentize(0.3, theme.black)};
  display: inline-block;
  grid-area: sidebar;
  overflow: hidden;
  z-index: 5;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: block;
  a {
    display: block;
    padding: 16px 22px;
    &.active {
      background-color: ${({ theme }) => transparentize(0.85, theme.teal)};
      border-left: 2px solid ${({ theme }) => theme.teal};
      svg {
        fill: ${({ theme }) => theme.white};
      }
    }
  }

  svg {
    fill: ${({ theme }) => transparentize(0.8, theme.white)};
  }

  &:last-of-type {
    a {
      border-top: 1px solid ${({ theme }) => theme.black};
    }
  }
`;

function FloatingNavBar() {
  const { accountId } = useContext(AuthContext);
  return (
    <Nav>
      <List>
        <Item>
          <NavLink to={`/dashboard?acc=${accountId}`} exact>
            <Icons width="20px" />
          </NavLink>
        </Item>
        <Item>
          <NavLink to={`/dashboard/sites?acc=${accountId}`} exact>
            <Icons icon="window" width="20px" />
          </NavLink>
        </Item>
        <Item>
          <NavLink to={`/dashboard/trash?acc=${accountId}`} exact>
            <Icons icon="trash" width="20px" />
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/logout" exact>
            <Icons icon="power" width="20px" />
          </NavLink>
        </Item>
      </List>
    </Nav>
  );
}

export default FloatingNavBar;
