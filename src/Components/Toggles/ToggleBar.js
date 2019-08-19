import React from "react";
import styled from "styled-components";
import { Toggle, Icons } from "../../Elements";
import AddSiteModal from "../Sites/AddSiteModal";

const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.darkGray};
  align-items: center;
  background-color: transparent;
  border-radius: 16px;
  color: ${({ theme }) => theme.darkGray};
  cursor: pointer;
  display: inline-flex;
  padding: 0.75em 1em;
  font-size: 14px;
  font-weight: 600;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.hoverGray};
  }

  svg {
    fill: ${({ theme }) => theme.darkGray};
    height: 16px;
    margin-right: 0.5em;
    width: 16px;
  }
`;
function ToggleBar() {
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

export default ToggleBar;
