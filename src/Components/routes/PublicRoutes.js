import React, { lazy, Suspense, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import ProtectedRoute from "../../Elements/ProtectedRoute";
import { Home, Join, Logout } from "../../Pages";
const NotFound = lazy(() => import("../../Pages/NotFound/NotFound"));
const AdminRoutes = lazy(() => import("./AdminRoutes"));

function PublicRoutes() {
  const { authenticated, loading } = useContext(AuthContext);

  return (
    <Suspense fallback={null}>
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
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default PublicRoutes;
