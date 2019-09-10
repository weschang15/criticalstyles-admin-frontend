import React from "react";
import { withRouter } from "react-router-dom";
import { Nav } from "../../Elements";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ToolbarToggles from "./ToolbarToggles";

function Toolbar({ location: { pathname, state = {} } }) {
  const { isSingle } = state;
  return (
    <Nav.ToolbarNav>
      <Breadcrumbs here={pathname} />
      <ToolbarToggles isSingle={isSingle} />
    </Nav.ToolbarNav>
  );
}

export default withRouter(Toolbar);
