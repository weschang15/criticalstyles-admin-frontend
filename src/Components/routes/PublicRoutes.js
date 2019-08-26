import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import ProtectedRoute from "../../Elements/ProtectedRoute";
import { Home, Join, Logout } from "../../Pages";
import AdminRoutes from "./AdminRoutes";

function PublicRoutes() {
  const { authenticated, loading } = useContext(AuthContext);

  return (
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
  );
}

export default PublicRoutes;
