import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { Toggle, Icons, PrimaryButton } from "../../Elements";
import AddPageModal from "../Modals/AddPageModal";

const Button = styled(PrimaryButton)`
  align-items: center;
  background-color: transparent;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.teal};
  color: ${({ theme }) => theme.teal};
  display: inline-flex;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => transparentize(0.9, theme.teal)};
    box-shadow: none;
  }

  &:active {
  }

  svg {
    fill: ${({ theme }) => theme.teal};
    height: 16px;
    margin-right: 0.5em;
    width: 16px;
  }
`;

function AddPageToggle() {
  return (
    <Toggle>
      {({ on, toggle }) => {
        return (
          <>
            <AddPageModal on={on} toggle={toggle} />
            <Button onClick={toggle}>
              <Icons icon="document-add" />
              <span>Add page</span>
            </Button>
          </>
        );
      }}
    </Toggle>
  );
}

export default AddPageToggle;
