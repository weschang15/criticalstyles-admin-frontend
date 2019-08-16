import React from "react";
import styled from "styled-components";
import { Toggle, Icons } from "../../Elements";
import AddSite from "../Site/AddSite";

const Button = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.black};
  border-radius: 16px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  display: inline-flex;
  padding: 0.75em 1em;
  font-size: 14px;
  font-weight: 600;

  svg {
    fill: ${({ theme }) => theme.white};
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
            <AddSite on={on} toggle={toggle} />
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
