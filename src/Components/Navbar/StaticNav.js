import React from "react";
import { Link } from "react-router-dom";
import { Icons, Nav } from "../../Elements";

function StaticNav() {
  return (
    <Nav.StaticNav>
      <Link to="/" className="logo">
        <Icons icon="logo" size={48} />
      </Link>
      <Nav.NavbarList>
        <Nav.NavbarListItem>
          <Link to="/join">Sign Up Now</Link>
        </Nav.NavbarListItem>
      </Nav.NavbarList>
    </Nav.StaticNav>
  );
}

export default StaticNav;
