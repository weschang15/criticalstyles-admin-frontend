import React from "react";
import styled from "styled-components";
import UrlIcon from "../images/url-icon.svg";
import ErrorIcon from "../images/error-icon.svg";

export const Submit = styled.button.attrs({ type: "submit" })`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 0.025em;
  margin-left: 2em;
  padding: 0.5em;
  text-transform: uppercase;
`;

export const Text = styled.input.attrs({ type: "text" })``;

export const Url = styled.input.attrs({ type: "url" })`
  background-image: url('${UrlIcon}');
  background-position: 0 0.5em;
  background-repeat: no-repeat;
  background-size: 1em 1em;
  border: 0;
  box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.gray};
  color: #201c29;
  font-size: 1em;
  line-height: normal;
  outline: 0;
  padding: 0.5em 0.25em;
  text-indent: 1.25em;
  transition: box-shadow 125ms linear;
  &:focus, &:active {
    box-shadow: inset 0 -2px 0 0 ${({ theme }) => theme.teal};
  }

  &:invalid {
    background-image: url('${ErrorIcon}');
    box-shadow: inset 0 -2px 0 0 ${({ theme }) => theme.salmon};
    + ${Submit} {
      display: none;
    }
  }

  &:valid + ${Submit}{
    display: inline-block;
  }

  &::placeholder {
    color: ${({ theme }) => theme.gray};
  }
`;

export const Fields = props => {
  switch (props.type) {
    case "url":
      return <Url {...props} />;

    case "submit":
      return <Submit {...props} />;

    default:
      return <Text {...props} />;
  }
};
