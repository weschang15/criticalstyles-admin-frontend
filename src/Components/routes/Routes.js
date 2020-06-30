import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import ProtectedRoute from "../../Elements/ProtectedRoute";
import { useAuth } from "../../Hooks";
import { Account, Dashboard, Site, Sites } from "../../Pages";

const NotFound = lazy(() => import("../../Pages/NotFound/NotFound"));

function Routes() {
  const { authenticated, loading } = useAuth();
  const { pathname } = useLocation();
  return (
    <Suspense fallback={null}>
      <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
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
          exact
        />
        <ProtectedRoute
          path="/sites/:siteId"
          component={Site}
          isAuthenticated={authenticated}
          loading={loading}
        />
        <ProtectedRoute
          path="/accounts/:accountId"
          component={Account}
          isAuthenticated={authenticated}
          loading={loading}
        />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
