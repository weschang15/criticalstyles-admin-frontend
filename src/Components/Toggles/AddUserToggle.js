import React from "react";
import AddUserImage from "../../assets/add-user.svg";
import { Toggle } from "../../Elements";
import AddUserModal from "../Modals/AddUserModal";
import { QuickActionWrapper } from "./Toggles";

function AddUserToggle(props = {}) {
  return (
    <Toggle>
      {({ on, toggle }) => {
        return (
          <>
            <AddUserModal on={on} toggle={toggle} />
            <QuickActionWrapper onClick={toggle}>
              <figure>
                <img
                  src={AddUserImage}
                  alt="Illustration for adding new user"
                />
              </figure>
              <h5>Add user to workspace</h5>
            </QuickActionWrapper>
          </>
        );
      }}
    </Toggle>
  );
}

export default AddUserToggle;
