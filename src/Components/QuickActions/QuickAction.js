import { transparentize } from "polished";
import PropTypes from "prop-types";
import styled from "styled-components";

const ACTIVE_STATE = `
&:active {
  backface-visibility: hidden;
  transform: perspective(1px) scale3d(0.97, 0.97, 0.97);
}
`;

const HOVER_STATE = `
&:focus, 
&:hover {
  margin-top: 0;
  figure {
    margin-top: 0;
  } 
}
`;

const QuickAction = styled.div`
  align-items: center;
  background-color: ${({ bgColor, theme }) =>
    transparentize(0.9, theme[bgColor])};
  border-radius: 16px;
  cursor: ${({ withActive }) => withActive && "pointer"};
  display: inline-flex;
  padding: 1em;
  margin-top: ${({ withHover }) => withHover && `3em`};
  transition: transform 200ms ease, margin 300ms ease;
  user-select: none;

  ${({ withHover }) => withHover && HOVER_STATE};

  ${({ withActive }) => withActive && ACTIVE_STATE}

  figure {
    margin: ${({ withHover }) => (withHover ? `-3em 1em 0 0` : `0 1em 0 0`)};
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

QuickAction.defaultProps = {
  withActive: true,
  withHover: true,
  bgColor: "blue"
};

QuickAction.propTypes = {
  withActive: PropTypes.bool.isRequired,
  withHover: PropTypes.bool.isRequired,
  bgColor: PropTypes.string
};

export default QuickAction;
