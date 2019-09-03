import React from "react";
import { Drawer, LinkButton, Toggle } from "../../Elements";
import Icons from "../../Elements/Icons";
import MoneyMakerHeader from "../MoneyMaker/MoneyMakerHeader";
import MoneyMakerResults from "../MoneyMaker/MoneyMakerResults";

function PageDetails({ name, stylesheet, url }) {
  return (
    <Toggle>
      {({ on, toggle }) => {
        return (
          <>
            <Drawer on={on} toggle={toggle}>
              <div>
                <MoneyMakerHeader>
                  <h3>{name}</h3>
                  <p>
                    <Icons icon="url" width="17px" fill="currentColor" />
                    {url}
                  </p>
                </MoneyMakerHeader>
                <MoneyMakerResults ccss={stylesheet} />
              </div>
            </Drawer>
            <LinkButton onClick={toggle}>View</LinkButton>
          </>
        );
      }}
    </Toggle>
  );
}

export default PageDetails;
