import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Icons } from "../../Elements";

const Nav = styled.nav`
  align-items: center;
  background-color: ${({ path, theme }) =>
    path.includes("/dashboard") ? theme.white : theme.purple};
  display: flex;
  justify-content: space-between;
  padding: ${({ isAuthenticated }) =>
    isAuthenticated ? "1em 1em 1em calc(66px + 1em)" : "16px 1em"};

  svg {
    fill: ${({ path, theme }) =>
      path.includes("/dashboard") ? theme.purple : theme.white};
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

function Navbar({ isAuthenticated, location, ...rest }) {
  return (
    <Nav path={location.pathname} isAuthenticated>
      <Link to="/">
        <Icons icon="logo" width="48px" height="48px" />
      </Link>

      {isAuthenticated ? (
        <Icons icon="user" width="32px" />
      ) : (
        <List>
          <li>
            <Link to="/join">Sign Up Now</Link>
          </li>
        </List>
      )}
    </Nav>
  );
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

Navbar.defaultProps = {
  isAuthenticated: false
};

export default withRouter(Navbar);
