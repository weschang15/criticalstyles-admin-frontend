import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Icons } from "../../Elements";

const Nav = styled.nav`
  align-items: center;
  background-color: ${({ path, theme }) =>
    path.includes("/dashboard") ? theme.white : theme.purple};
  display: flex;
  justify-content: ${({ path }) =>
    path.includes("/dashboard") ? "flex-end" : "space-between"};

  padding: 1em;

  svg {
    fill: ${({ path, theme }) =>
      path.includes("/dashboard") ? theme.purple : theme.white};
  }

  .logo {
    display: ${({ path }) => (path.includes("/dashboard") ? "none" : "block")};
  }
`;

const List = styled.ul`
  font-size: 14px;
  font-weight: 600;
  list-style: none;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  li {
    display: block;
    color: ${({ theme }) => theme.white};
  }

  a {
    text-decoration: none;
  }
`;

function Navbar({ location, ...rest }) {
  return (
    <Nav path={location.pathname}>
      <Link to="/" className="logo">
        <Icons icon="logo" size={48} />
      </Link>
      <List>
        <li>
          <Link to="/join">Sign Up Now</Link>
        </li>
      </List>
    </Nav>
  );
}

export default withRouter(Navbar);
