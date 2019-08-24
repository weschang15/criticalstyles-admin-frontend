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
  return (
    <>
      <PrimaryNav />
      <Container>
        <SecondaryNav />
        <Route path={`${path}`} component={Dashboard} exact />
        <Route path={`${path}/sites`} component={Sites} exact />
        <Route path={`${path}/sites/:slug`} component={Site} />
      </Container>
    </>
  );
}

export default AdminRoutes;
