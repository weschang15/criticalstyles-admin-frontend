import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import AddSiteToggle from "../Toggles/AddSiteToggle";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import AddPageToggle from "../Toggles/AddPageToggle";

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 0 1em;
`;

function SecondaryNav({ location: { pathname, state = {} } }) {
  const { isSingle } = state;

  return (
    <Container>
      <Breadcrumbs here={pathname} />
      {isSingle ? <AddPageToggle /> : <AddSiteToggle />}
    </Container>
  );
}

export default withRouter(SecondaryNav);
