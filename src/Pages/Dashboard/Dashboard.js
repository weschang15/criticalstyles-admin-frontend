import React from "react";
import styled from "styled-components";
import AddUserToggle from "../../Components/Toggles/AddUserToggle";

const Section = styled.section``;

function Dashboard() {
  return (
    <>
      <Section>
        <AddUserToggle />
      </Section>
    </>
  );
}

export default Dashboard;
