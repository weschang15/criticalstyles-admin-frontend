import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import AddPageToggle from "../Toggles/AddPageToggle";
import AddSiteToggle from "../Toggles/AddSiteToggle";
import ToggleUserMenu from "../UserMenu/ToggleUserMenu";

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 0 1em;
`;

const UserActions = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`;

function SecondaryNav({ location: { pathname, state = {} } }) {
  const { isSingle } = state;
  return (
    <Container>
      <Breadcrumbs here={pathname} />
      <UserActions>
        {isSingle ? <AddPageToggle /> : <AddSiteToggle />}
        <ToggleUserMenu />
      </UserActions>
    </Container>
  );
}

export default withRouter(SecondaryNav);
