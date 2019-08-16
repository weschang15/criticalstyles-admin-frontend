import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Home, Join, Logout } from "../../Pages";
import Navbar from "../Navbar/Navbar";
import ProtectedRoute from "../../Elements/ProtectedRoute";
import AdminRoutes from "./AdminRoutes";
import { AuthContext } from "../../contexts/AuthContext";

const Main = styled.main`
  position: relative;
`;

function PublicRoutes() {
  const { authenticated } = useContext(AuthContext);

  return (
    <Main>
      <Navbar isAuthenticated={authenticated} />
      <Switch>
        <Route path="/" component={Home} exact />
        <ProtectedRoute
          path="/dashboard"
          component={AdminRoutes}
          isAuthenticated={authenticated}
        />
        <Route path="/join" component={Join} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </Main>
  );
}

export default PublicRoutes;
