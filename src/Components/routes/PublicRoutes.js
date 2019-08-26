import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../contexts/AuthContext";
import ProtectedRoute from "../../Elements/ProtectedRoute";
import { Home, Join, Logout } from "../../Pages";
import AdminRoutes from "./AdminRoutes";

const Main = styled.main`
  position: relative;
`;

function PublicRoutes() {
  const { authenticated, loading } = useContext(AuthContext);

  return (
    <Main>
      <Switch>
        <Route path="/" component={Home} exact />
        <ProtectedRoute
          path="/dashboard"
          component={AdminRoutes}
          isAuthenticated={authenticated}
          loading={loading}
        />
        <Route path="/join" component={Join} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </Main>
  );
}

export default PublicRoutes;
