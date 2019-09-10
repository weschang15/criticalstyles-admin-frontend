import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../contexts/AuthContext";
import { Icons, Toggle, Wrapper } from "../../Elements";
import NotificationMenu from "../Notifications/NotificationMenu";
import AddPageToggle from "../Toggles/AddPageToggle";
import AddSiteToggle from "../Toggles/AddSiteToggle";
import UserMenu from "../UserMenu/UserMenu";
import ToolbarIcon from "./ToolbarIcon";

const FlexWrapper = styled(Wrapper.Relative)`
  align-items: center;
  display: flex;
`;

function ToolbarToggles({ isSingle }) {
  const { user, account } = useContext(AuthContext);

  return (
    <FlexWrapper>
      {isSingle ? <AddPageToggle /> : <AddSiteToggle />}
      <Toggle>
        {({ on, toggle }) => (
          <>
            <NotificationMenu minWidth={360} on={on} />
            <ToolbarIcon onClick={toggle}>
              <Icons icon="notification" size={25} />
            </ToolbarIcon>
          </>
        )}
      </Toggle>
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
    </FlexWrapper>
  );
}

export default ToolbarToggles;
