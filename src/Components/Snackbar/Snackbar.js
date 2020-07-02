import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { notificationTheme } from "../../config/theme";

const SnackbarWrapper = styled.div`
  margin: 2em 0;
  padding: 1em;
  background-color: ${({ theme, type }) => theme[type].bgColor};
  border: ${({ theme, type }) => `1px solid  ${theme[type].border}`};
  color: ${({ theme, type }) => theme[type].color};
  font-size: 16px;
  border-radius: 4px;
`;

function Snackbar({ children, ...rest }) {
  return (
    <SnackbarWrapper theme={notificationTheme} {...rest}>
      {children}
    </SnackbarWrapper>
  );
}

Snackbar.defaultProps = {
  type: "success",
};

Snackbar.propTypes = {
  type: PropTypes.oneOf(["error", "success"]).isRequired,
};

export default Snackbar;
