import React from "react";
import { Drawer, LinkButton, Toggle } from "../../Elements";
import Page from "./Page";

function PageDetails(props = {}) {
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

export default PageDetails;
