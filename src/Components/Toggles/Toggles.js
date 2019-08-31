import { transparentize } from "polished";
import PropTypes from "prop-types";
import styled from "styled-components";

export const QuickActionWrapper = styled.div`
  align-items: center;
  background-color: ${({ bgColor, theme }) =>
    transparentize(0.9, theme[bgColor])};
  border-radius: 6px;
  cursor: ${({ withActive }) => (withActive ? "pointer" : "auto")};
  display: inline-flex;
  padding: 1em;
  margin-top: 3em;
  transition: transform 200ms ease, margin 300ms ease;
  user-select: none;

  &:focus,
  &:hover {
    margin-top: 0;
    figure {
      margin-top: 0;
    }
  }

  ${({ withActive }) =>
    withActive
      ? `
  &:active {
    backface-visibility: hidden;
    transform: perspective(1px) scale3d(0.97, 0.97, 0.97);
  }`
      : null}

  figure {
    flex: 1 0 140px;
    margin: -3em 1em 0 0;
    max-width: 140px;
    transition: margin 300ms ease;
    img {
      display: block;
    }
  }
  h5 {
    color: ${({ bgColor, theme }) => theme[bgColor]};
    line-height: 1;
    margin-top: 0;
  }
  p {
    display: block;
    font-size: 16px;
    margin: 0;
  }
`;

QuickActionWrapper.defaultProps = {
  withActive: true,
  bgColor: "blue"
};

QuickActionWrapper.propTypes = {
  withActive: PropTypes.bool.isRequired,
  bgColor: PropTypes.string
};
