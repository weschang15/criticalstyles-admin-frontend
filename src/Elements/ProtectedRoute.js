import PropTypes from "prop-types";
import React from "react";
import { Route } from "react-router-dom";

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

  if (!isAuthenticated) {
    window.location.assign(process.env.REACT_APP_PUBLIC_URL);
  }

  return (
    <Route
      {...rest}
      render={props => (isAuthenticated ? <Component {...props} /> : null)}
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
