import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import FloatingNavBar from "../../Components/Navbar/FloatingNavBar";
import { Sites, Dashboard } from "../../Pages";
import TopNavBar from "../Navbar/TopNavBar";

const Container = styled.div`
  background-color: transparent;
  position: relative;
  /* Ensures subroutes are properly spaced inwords from floating nav */
  /* padding: 1em 1em 1em calc(66px + 1em); */
  display: grid;
  grid-template-columns: minmax(0, 66px) auto;
  grid-template-rows: auto;
  grid-gap: 1rem;
  grid-template-areas:
    ". header"
    "sidebar content"
    "sidebar content"
    "sidebar content"
    "sidebar content";
  padding: 1em;
`;

function AdminRoutes({ match: { path } }) {
  return (
    <Container>
      <TopNavBar />
      <FloatingNavBar />
      <Route path={`${path}`} component={Dashboard} exact />
      <Route path={`${path}/sites`} component={Sites} />
    </Container>
  );
}

export default AdminRoutes;
