import React from "react";
import { Toggle, LinkButton, Drawer } from "../../Elements";
import Page from "../PageList/Page";

function TogglePageDetails(props = {}) {
  return (
    <Toggle>
      {({ on, toggle }) => {
        return (
          <>
            <Drawer on={on} toggle={toggle}>
              <Page {...props} />
            </Drawer>
            <LinkButton onClick={toggle}>View</LinkButton>
          </>
        );
      }}
    </Toggle>
  );
}

export default TogglePageDetails;
