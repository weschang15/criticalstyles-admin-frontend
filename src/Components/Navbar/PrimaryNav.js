import { transparentize } from "polished";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Icons } from "../../Elements";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.black};
  display: inline-block;
  overflow: hidden;
  z-index: 5;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
`;

const List = styled.ul`
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: block;
  a {
    display: inline-block;
    padding: 16px 22px;
    text-align: center;

    &.active {
      svg {
        fill: ${({ theme }) => theme.white};
      }
    }
  }

  &:first-of-type {
    a {
      padding: 16px 17px;
    }
    svg {
      fill: ${({ theme }) => theme.white};
    }
  }

  &:not(:first-of-type) {
    a {
      &:hover {
        svg {
          fill: ${({ theme }) => transparentize(0.5, theme.white)};
        }
      }
    }
  }

  svg {
    fill: ${({ theme }) => transparentize(0.8, theme.white)};
  }
`;

function PrimaryNav() {
  return (
    <Nav>
      <List>
        <Item>
          <NavLink to="/" exact>
            <Icons icon="logo" width="32px" height="32px" />
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/dashboard" exact>
            <Icons width="20px" />
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/dashboard/sites">
            <Icons icon="window" width="20px" />
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/dashboard/trash" exact>
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

export default PrimaryNav;
