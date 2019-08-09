import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icons } from "../../Elements";
import { transparentize } from "polished";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.purple};
  border-radius: 52px;
  box-shadow: 0 6px 26px -2px ${({ theme }) => transparentize(0.3, theme.black)};
  display: inline-block;
  overflow: hidden;
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
    padding: 16px;
  }

  svg {
    fill: ${({ theme }) => theme.black};
  }

  &:last-of-type {
    a {
      border-top: 1px solid ${({ theme }) => theme.black};
    }
  }
`;

function FloatingNavBar() {
  return (
    <Nav>
      <List>
        <Item>
          <Link to="/dashboard/sites">
            <Icons icon="window" width="20px" />
          </Link>
        </Item>
        <Item>
          <Link to="/dashboard/trash">
            <Icons icon="trash" width="20px" />
          </Link>
        </Item>
        <Item>
          <Link to="/dashboard/logout">
            <Icons icon="power" width="20px" />
          </Link>
        </Item>
      </List>
    </Nav>
  );
}

export default FloatingNavBar;
