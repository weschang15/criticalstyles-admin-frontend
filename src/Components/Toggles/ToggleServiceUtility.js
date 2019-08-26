import React from "react";
import CreateCodeImage from "../../assets/create-code.svg";
import { Drawer, Toggle } from "../../Elements";
import MoneyMaker from "../MoneyMaker/MoneyMaker";
import { QuickActionWrapper } from "./Toggles";

function ToggleServiceUtility(props = {}) {
  return (
    <Toggle>
      {({ on, toggle }) => {
        return (
          <>
            <Drawer on={on} toggle={toggle}>
              <MoneyMaker />
            </Drawer>
            <QuickActionWrapper onClick={toggle}>
              <figure>
                <img
                  src={CreateCodeImage}
                  alt="Illustration for creating one-off CCSS"
                />
              </figure>
              <h5>Generate CCSS</h5>
            </QuickActionWrapper>
          </>
        );
      }}
    </Toggle>
  );
}

export default ToggleServiceUtility;
