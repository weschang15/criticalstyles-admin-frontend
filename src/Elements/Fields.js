import { darken, transparentize } from "polished";
import React from "react";
import styled from "styled-components";
import EmailIcon from "../assets/email-icon.svg";
import ErrorIcon from "../assets/error-icon.svg";
import InformationIcon from "../assets/information-icon.svg";
import LockIcon from "../assets/lock-icon.svg";
import UrlIcon from "../assets/url-icon.svg";
import { PrimaryButton } from "./Buttons";

const Generic = styled.input`
  border: 0;
  box-shadow: inset 0 0 0 2px ${({ theme }) => theme.gray};
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
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.teal};
  }

  &:invalid:focus {
    background-image: url('${ErrorIcon}');
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.salmon};
  }

  &::placeholder {
    color: ${({ theme }) => darken(0.25, theme.gray)};
  }
`;

export const FieldLabel = styled.label`
  color: ${({ theme }) => darken(0.5, theme.gray)};
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
`;

export const Submit = styled(PrimaryButton).attrs({ type: "submit" })``;

export const Text = styled(Generic).attrs({ type: "text" })`
  background-image: url('${InformationIcon}');
`;

export const Url = styled(Generic).attrs({ type: "url" })`
  background-image: url('${UrlIcon}');  
`;

export const Email = styled(Generic).attrs({ type: "email" })`
  background-image: url('${EmailIcon}');  
`;

export const Password = styled(Generic).attrs({ type: "password" })`
  background-image: url('${LockIcon}');  
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
