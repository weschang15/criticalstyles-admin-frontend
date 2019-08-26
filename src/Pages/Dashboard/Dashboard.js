import React from "react";
import styled from "styled-components";
import AddUserToggle from "../../Components/Toggles/AddUserToggle";
import ToggleServiceUtility from "../../Components/Toggles/ToggleServiceUtility";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 420px));
  grid-gap: 30px;
`;

function Dashboard() {
  return (
    <>
      <Section>
        <AddUserToggle />
        <ToggleServiceUtility />
      </Section>
    </>
  );
}

export default Dashboard;
