import React, { lazy, Suspense, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import ProtectedRoute from "../../Elements/ProtectedRoute";
import { Dashboard, Site, Sites } from "../../Pages";

const NotFound = lazy(() => import("../../Pages/NotFound/NotFound"));

function Routes() {
  const { authenticated, loading } = useContext(AuthContext);

  return (
    <Suspense fallback={null}>
      <Switch>
        <ProtectedRoute
          path="/"
          component={Dashboard}
          isAuthenticated={authenticated}
          loading={loading}
          exact
        />
        <ProtectedRoute
          path="/sites"
          component={Sites}
          isAuthenticated={authenticated}
          loading={loading}
        />
        <ProtectedRoute
          path="/sites/:slug"
          component={Site}
          isAuthenticated={authenticated}
          loading={loading}
        />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
