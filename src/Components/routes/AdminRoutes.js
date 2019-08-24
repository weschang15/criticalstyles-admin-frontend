import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import PrimaryNav from "../Navbar/PrimaryNav";
import { Sites, Site, Dashboard } from "../../Pages";
import SecondaryNav from "../Navbar/SecondaryNav";

const Container = styled.div`
  padding: 1em 1em 1em calc(66px + 1em);
`;

function AdminRoutes({ match: { path }, location: { pathname } }) {
  const parts = pathname.split("/").filter(part => Boolean(part));
  const here = parts[parts.length - 1];
  const prev = parts[parts.length - 2];
  const isSingle = prev === "sites" && here !== "sites";

  return (
    <>
      <PrimaryNav />
      <Container>
        <SecondaryNav currentPath={pathname} isSingle={isSingle} />
        <Route path={`${path}`} component={Dashboard} exact />
        <Route path={`${path}/sites`} component={Sites} exact />
        <Route path={`${path}/sites/:slug`} component={Site} />
      </Container>
    </>
  );
}

export default AdminRoutes;
