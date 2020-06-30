import { transparentize } from "polished";
import React from "react";
import styled from "styled-components";
import { Icons, PrimaryButton, Toggle } from "../../Elements";
import AddApiKeyModal from "../Modals/AddApiKeyModal";

const Button = styled(PrimaryButton)`
  align-items: center;
  background-color: transparent;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.blue};
  display: inline-flex;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => transparentize(0.9, theme.blue)};
    box-shadow: none;
  }

  &:active {
  }

  svg {
    fill: ${({ theme }) => theme.blue};
    height: 16px;
    margin-right: 0.5em;
    width: 16px;
  }
`;

function AddApiKey() {
  return (
    <Toggle>
      {({ on, toggle }) => {
        return (
          <>
            <AddApiKeyModal on={on} toggle={toggle} />
            <Button onClick={toggle}>
              <Icons icon="window-new" />
              <span>Add API Key</span>
            </Button>
          </>
        );
      }}
    </Toggle>
  );
}

export default AddApiKey;
