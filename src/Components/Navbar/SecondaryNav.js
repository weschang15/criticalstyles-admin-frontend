import React from "react";
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

function SecondaryNav({ currentPath, isSingle }) {
  return (
    <Container>
      <Breadcrumbs here={currentPath} />
      {isSingle ? <AddPageToggle /> : <AddSiteToggle />}
    </Container>
  );
}

export default SecondaryNav;
