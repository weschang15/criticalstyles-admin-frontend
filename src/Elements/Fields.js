import React from "react";
import styled from "styled-components";
import UrlIcon from "../images/url-icon.svg";
import ErrorIcon from "../images/error-icon.svg";
import { transparentize } from "polished";

const Generic = styled.input`
  border: 0;
  box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.white};
  background-position: 0.75em center;
  background-repeat: no-repeat;
  background-size: 1em;
  color: #201c29;
  font-size: 16px;
  line-height: normal;
  outline: 0;
  padding: 0.75em 0.75em 0.75em 2.25em;
  transition: box-shadow 125ms linear;

  &:focus, &:active, &:valid {
    box-shadow: inset 0 -2px 0 0 ${({ theme }) => theme.teal};
  }

  &:invalid {
    background-image: url('${ErrorIcon}');
    box-shadow: inset 0 -2px 0 0 ${({ theme }) => theme.salmon};
  }

  &::placeholder {
    color: ${({ theme }) => theme.gray};
    opacity: 0.5;
  }
`;

export const Submit = styled.button.attrs({ type: "submit" })`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 0.05em;
  margin-left: 2em;
  padding: 10px 5px;
  text-transform: uppercase;
`;

export const Text = styled(Generic).attrs({ type: "text" })``;

export const Url = styled(Generic).attrs({ type: "url" })`
  background-image: url('${UrlIcon}');  
`;

export const Email = styled(Generic).attrs({ type: "email" })`
  background-image: url('${UrlIcon}');  
`;

export const Password = styled(Generic).attrs({ type: "password" })`
  background-image: url('${UrlIcon}');  
`;

export const Textarea = styled.textarea.attrs({
  rows: 18
})`
  background-color: transparent;
  border: 2px solid ${({ theme }) => transparentize(0.75, theme.white)};
  color: ${({ theme }) => transparentize(0.5, theme.white)};
  font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
    "Liberation Mono", Menlo, Courier, monospace;
  height: 100%;
  padding: 1em;
  line-height: 1.5;
  resize: none;
  width: 100%;
`;

export const Fields = props => {
  switch (props.type) {
    case "url":
      return <Url {...props} />;

    case "submit":
      return <Submit {...props} />;

    case "textarea":
      return <Textarea {...props} />;

    case "email":
      return <Email {...props} />;

    case "password":
      return <Password {...props} />;

    default:
      return <Text {...props} />;
  }
};
