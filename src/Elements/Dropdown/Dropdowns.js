import { transparentize } from "polished";
import PropTypes from "prop-types";
import { config } from "react-spring";
import styled from "styled-components";

export const animation = {
  from: { opacity: 0, transform: "translate3d(0, -10px, 0)" },
  enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  leave: { opacity: 0, transform: "translate3d(0, -10px, 0)" },
  config: config.stiff
};

export const Dropdown = styled.nav`
  background-color: #fff;
  border: 1px solid ${({ theme }) => transparentize(0.75, theme.gray)};
  border-radius: 6px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  min-width: ${({ minWidth }) => `${minWidth}px`};
  overflow: hidden;
  position: absolute;
  right: 0;
  top: calc(100% + 0.5em);
  z-index: 9;
`;

Dropdown.defaultProps = {
  minWidth: 160
};

Dropdown.propTypes = {
  minWidth: PropTypes.number.isRequired
};
