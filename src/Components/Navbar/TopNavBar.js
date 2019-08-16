import React from "react";
import ToggleBar from "../Toggles/ToggleBar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  grid-area: header;
  justify-content: flex-end;
`;

function TopNavBar() {
  return (
    <Container>
      <ToggleBar />
    </Container>
  );
}

export default TopNavBar;
