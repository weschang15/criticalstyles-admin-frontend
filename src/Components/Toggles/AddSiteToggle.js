import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { Toggle, Icons, PrimaryButton } from "../../Elements";
import AddSiteModal from "../Modals/AddSiteModal";

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

function AddSiteToggle() {
  return (
    <Toggle>
      {({ on, toggle }) => {
        return (
          <>
            <AddSiteModal on={on} toggle={toggle} />
            <Button onClick={toggle}>
              <Icons icon="window-new" />
              <span>Add site</span>
            </Button>
          </>
        );
      }}
    </Toggle>
  );
}

export default AddSiteToggle;
