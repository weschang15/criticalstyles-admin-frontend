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
  > div {
    animation: ${bounce} 1.4s infinite ease-in-out both;
    background-color: ${({ bgColor, theme }) => bgColor || theme.white};
    border-radius: 100%;
    height: 16px;
    width: 16px;
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

export const Spinner = () => (
  <StyledSpinner>
    <div />
    <div />
    <div />
  </StyledSpinner>
);
