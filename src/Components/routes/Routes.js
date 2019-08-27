import React, { lazy, Suspense, useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Dashboard, Site, Sites } from "../../Pages";

const NotFound = lazy(() => import("../../Pages/NotFound/NotFound"));

function Routes() {
  const { authenticated, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!authenticated && !loading) {
      window.location.assign(process.env.REACT_APP_PUBLIC_URL);
    }
  });

  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/sites" component={Sites} />
        <Route path="/sites/:slug" component={Site} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
