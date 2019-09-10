import React, { useContext } from "react";
import { useMutation } from "react-apollo";
import { NavLink } from "react-router-dom";
import { LOGOUT_USER } from "../../actions";
import { AuthDispatch } from "../../contexts/AuthContext";
import { Icons, Nav } from "../../Elements";
import { LOGOUT } from "../../Mutations";

function VerticalNav() {
  const dispatch = useContext(AuthDispatch);
  const [logout] = useMutation(LOGOUT);

  return (
    <Nav.VerticalNav>
      <NavLink to="/" className="logo" exact>
        <Icons icon="logo" fill="currentColor" />
      </NavLink>
      <Nav.NavList>
        <Nav.NavListItem>
          <NavLink to="/" exact>
            <Icons fill="currentColor" />
          </NavLink>
        </Nav.NavListItem>
        <Nav.NavListItem>
          <NavLink to="/sites">
            <Icons icon="window" fill="currentColor" />
          </NavLink>
        </Nav.NavListItem>
        <Nav.NavListItem>
          <span
            onClick={async () => {
              await logout();
              dispatch({ type: LOGOUT_USER });
            }}
          >
            <Icons icon="power" fill="currentColor" />
          </span>
        </Nav.NavListItem>
      </Nav.NavList>
    </Nav.VerticalNav>
  );
}

export default VerticalNav;
