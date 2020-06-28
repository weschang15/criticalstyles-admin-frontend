import { transparentize } from "polished";
import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../contexts/AuthContext";
import { Icons, Nav, Toggle, Wrapper } from "../../Elements";
import UserMenu from "../UserMenu/UserMenu";

const ToolbarIcon = styled.button`
  background: none;
  backface-visibility: hidden;
  border: 0;
  border-radius: 12px;
  cursor: pointer;
  display: inline-block;
  outline: none;
  padding: 5px;
  position: relative;

  svg {
    fill: ${({ theme }) => theme.blue};
    display: block;
  }

  &:not(:first-of-type) {
    margin-left: 1em;
  }

  &:focus,
  &:hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.blue};
  }

  &:hover {
    background-color: ${({ theme }) => transparentize(0.9, theme.blue)};
  }

  &:active {
    transform: perspective(1px) scale3d(0.95, 0.95, 0.95);
  }
`;

function SecondaryNav() {
  const { user, account } = useContext(AuthContext);

  return (
    <Nav.SecondaryNav>
      <Wrapper.Relative>
        <Toggle>
          {({ on, toggle }) => (
            <>
              <UserMenu on={on} currentAccount={account} user={user} />
              <ToolbarIcon onClick={toggle}>
                <Icons icon="user" size={25} />
              </ToolbarIcon>
            </>
          )}
        </Toggle>
      </Wrapper.Relative>
    </Nav.SecondaryNav>
  );
}

export default SecondaryNav;
