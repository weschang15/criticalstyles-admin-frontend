import { transparentize } from "polished";
import React, { useContext } from "react";
import { useMutation } from "react-apollo";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { LOGOUT_USER } from "../../actions";
import { AuthDispatch } from "../../contexts/AuthContext";
import { Icons } from "../../Elements";
import { LOGOUT } from "../../Mutations";

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
  width: 66px;

  .logo {
    display: block;
    color: ${({ theme }) => theme.white};
    text-align: center;
    padding: 0.75em;
    svg {
      display: block;
      width: 100%;
      height: auto;
    }
  }
`;

const List = styled.ul`
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
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

function PrimaryNav() {
  const dispatch = useContext(AuthDispatch);
  const [logout] = useMutation(LOGOUT);

  return (
    <Nav>
      <NavLink to="/" className="logo" exact>
        <Icons icon="logo" fill="currentColor" />
      </NavLink>
      <List>
        <Item>
          <NavLink to="/" exact>
            <Icons fill="currentColor" />
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/sites">
            <Icons icon="window" fill="currentColor" />
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/trash" exact>
            <Icons icon="trash" fill="currentColor" />
          </NavLink>
        </Item>
        <Item>
          <span
            onClick={async () => {
              await logout();
              dispatch({ type: LOGOUT_USER });
            }}
          >
            <Icons icon="power" fill="currentColor" />
          </span>
        </Item>
      </List>
    </Nav>
  );
}

export default PrimaryNav;
