import React from "react";
import { Route, withRouter } from "react-router-dom";
import FloatingNavBar from "../../Components/Navbar/FloatingNavBar";
import { Sites } from "../../Pages";

function AdminRoutes({ match: { path } }) {
  return (
    <div>
      <FloatingNavBar />
      <Route path={`${path}/sites`} component={Sites} exact />
    </div>
  );
}

export default withRouter(AdminRoutes);
