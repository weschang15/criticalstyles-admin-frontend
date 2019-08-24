import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { Toggle, Icons } from "../../Elements";
import AddSiteModal from "../Sites/AddSiteModal";

const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.blue};
  align-items: center;
  background-color: transparent;
  border-radius: 16px;
  color: ${({ theme }) => theme.blue};
  cursor: pointer;
  display: inline-flex;
  padding: 0.75em 1em;
  font-size: 14px;
  font-weight: 600;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => transparentize(0.9, theme.blue)};
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
