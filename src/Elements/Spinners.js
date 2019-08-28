import PropTypes from "prop-types";
import React from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }
`;

const StyledSpinner = styled.div`
  display: flex;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  height: 100%;
  justify-content: center;
  height: ${({ size }) => `${size}px`};
  > div {
    animation: ${bounce} 1.4s infinite ease-in-out both;
    background-color: ${({ bgColor, theme }) => theme[bgColor] || theme.white};
    border-radius: 100%;
    height: ${({ size }) => `${Math.floor(size / 2)}px`};
    width: ${({ size }) => `${Math.floor(size / 2)}px`};
    vertical-align: middle;
    margin: 0 2px;
    &:first-child {
      animation-delay: -0.32s;
      margin-left: 0;
    }

    &:nth-child(2) {
      animation-delay: -0.16s;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export function Spinner(props) {
  return (
    <StyledSpinner {...props}>
      <div />
      <div />
      <div />
    </StyledSpinner>
  );
}

Spinner.defaultProps = {
  size: 16
};

Spinner.propTypes = {
  size: PropTypes.number.isRequired
};
