import React, { useContext } from "react";
import { useMutation } from "react-apollo";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { LOGOUT_USER } from "../../actions";
import { AuthDispatch } from "../../contexts/AuthContext";
import { Icons } from "../../Elements";
import { LOGOUT } from "../../Mutations";
import NavItem from "./NavItem";
import NavList from "./NavList";

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

function PrimaryNav() {
  const dispatch = useContext(AuthDispatch);
  const [logout] = useMutation(LOGOUT);

  return (
    <Nav>
      <NavLink to="/" className="logo" exact>
        <Icons icon="logo" fill="currentColor" />
      </NavLink>
      <NavList>
        <NavItem>
          <NavLink to="/" exact>
            <Icons fill="currentColor" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/sites">
            <Icons icon="window" fill="currentColor" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/trash" exact>
            <Icons icon="trash" fill="currentColor" />
          </NavLink>
        </NavItem>
        <NavItem>
          <span
            onClick={async () => {
              await logout();
              dispatch({ type: LOGOUT_USER });
            }}
          >
            <Icons icon="power" fill="currentColor" />
          </span>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default PrimaryNav;
