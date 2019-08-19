import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  loading,
  redirect: pathname,
  ...rest
}) => {
  if (loading) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname, state: { from: props.location } }} />
        )
      }
    />
  );
};

ProtectedRoute.defaultProps = {
  redirect: "/join"
};

ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  redirect: PropTypes.string
};

export default ProtectedRoute;
