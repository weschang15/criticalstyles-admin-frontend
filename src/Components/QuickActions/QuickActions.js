import React from "react";
import styled from "styled-components";
import AddUserImage from "../../assets/add-user.svg";
import CreateCodeImage from "../../assets/create-code.svg";
import { Drawer, GridSection, Toggle } from "../../Elements";
import AddUserModal from "../Modals/AddUserModal";
import MoneyMaker from "../MoneyMaker/MoneyMaker";
import QuickAction from "./QuickAction";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 420px));
  grid-gap: 30px;
  margin: 2em 0;
`;

function QuickActions() {
  return (
    <GridSection>
      <h4>Quick Actions</h4>
      <Grid>
        <Toggle>
          {({ on, toggle }) => {
            return (
              <>
                <AddUserModal on={on} toggle={toggle} />
                <QuickAction onClick={toggle}>
                  <figure>
                    <img
                      src={AddUserImage}
                      alt="Illustration for adding new user"
                    />
                  </figure>
                  <h5>Add user to workspace</h5>
                </QuickAction>
              </>
            );
          }}
        </Toggle>
        <Toggle>
          {({ on, toggle }) => {
            return (
              <>
                <Drawer on={on} toggle={toggle}>
                  <MoneyMaker />
                </Drawer>
                <QuickAction onClick={toggle}>
                  <figure>
                    <img
                      src={CreateCodeImage}
                      alt="Illustration for creating one-off CCSS"
                    />
                  </figure>
                  <h5>Generate CCSS</h5>
                </QuickAction>
              </>
            );
          }}
        </Toggle>
      </Grid>
    </GridSection>
  );
}

export default QuickActions;
