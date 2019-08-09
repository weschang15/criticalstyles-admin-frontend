import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../UserContext";
import { Home, Login, Dashboard } from "../../Pages";
import Navbar from "../Navbar/Navbar";
import ProtectedRoute from "../../Elements/ProtectedRoute";

const Main = styled.main`
  position: relative;
`;

function PublicRoutes() {
  const { authenticated } = useContext(UserContext);
  return (
    <Main>
      <Navbar isAuthenticated={authenticated} />
      <Switch>
        <Route path="/" component={Home} exact />
        <ProtectedRoute
          path="/dashboard"
          component={Dashboard}
          isAuthenticated={authenticated}
        />
        <Route path="/join" component={Login} />
      </Switch>
    </Main>
  );
}

export default PublicRoutes;
