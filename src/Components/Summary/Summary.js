import pluralize from "pluralize";
import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../contexts/AuthContext";
import { GridSection } from "../../Elements";
import SummaryItem from "./SummaryItem";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 270px));
  grid-gap: 30px;
  margin: 2em 0;
`;

function Summary() {
  const {
    account: { summary }
  } = useContext(AuthContext);

  return (
    <GridSection>
      <h4>Workspace Overview</h4>
      <Grid>
        <SummaryItem
          subject={pluralize("Site", summary.sites)}
          count={summary.sites}
        />
        <SummaryItem
          subject={pluralize("User", summary.users)}
          count={summary.users}
        />
      </Grid>
    </GridSection>
  );
}

export default Summary;
