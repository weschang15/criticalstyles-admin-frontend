import PropTypes from "prop-types";
import React from "react";
import { Redirect, Route } from "react-router-dom";

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
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  redirect: PropTypes.string
};

export default ProtectedRoute;
