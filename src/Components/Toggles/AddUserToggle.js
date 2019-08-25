import { transparentize } from "polished";
import React from "react";
import styled from "styled-components";
import { Toggle } from "../../Elements";
import AddUserImage from "../../images/add-user.svg";
import AddUserModal from "../Modals/AddUserModal";

const ActionWrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => transparentize(0.9, theme.blue)};
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  padding: 1em;
  margin-top: 3em;
  transition: transform 200ms ease, margin 300ms ease;
  user-select: none;

  &:focus,
  &:hover {
    margin-top: 0;
    figure {
      margin-top: 0;
    }
  }

  &:active {
    backface-visibility: hidden;
    transform: perspective(1px) scale3d(0.97, 0.97, 0.97);
  }

  figure {
    flex: 1 0 140px;
    margin: -3em 1em 0 0;
    max-width: 140px;
    transition: margin 300ms ease;
    img {
      display: block;
    }
  }
  h5 {
    color: ${({ theme }) => theme.blue};
    line-height: 1;
    margin: 0;
  }
`;

function AddUserToggle(props = {}) {
  return (
    <Toggle>
      {({ on, toggle }) => {
        return (
          <>
            <AddUserModal on={on} toggle={toggle} />
            <ActionWrapper onClick={toggle}>
              <figure>
                <img
                  src={AddUserImage}
                  alt="Illustration for adding new user"
                />
              </figure>
              <h5>Add user to workspace</h5>
            </ActionWrapper>
          </>
        );
      }}
    </Toggle>
  );
}

export default AddUserToggle;
