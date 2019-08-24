import React from "react";
import styled from "styled-components";
import AddSiteToggle from "../Toggles/AddSiteToggle";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 0 1em;
`;

function SecondaryNav({ currentPath }) {
  return (
    <Container>
      <Breadcrumbs here={currentPath} />
      <AddSiteToggle />
    </Container>
  );
}

export default SecondaryNav;
