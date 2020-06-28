import React from "react";
import { NavLink } from "react-router-dom";

function NumberButton({ content, ...rest }) {
  return <NavLink {...rest}>{content}</NavLink>;
}

export default NumberButton;
