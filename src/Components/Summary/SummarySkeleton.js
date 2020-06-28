import React from "react";
import styled from "styled-components";
import { GridSection } from "../../Elements";
import SummaryItem from "./SummaryItem";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 270px));
  grid-gap: 30px;
  margin: 2em 0;
`;

function SummarySkeleton() {
  return (
    <GridSection>
      <h4>Workspace Overview</h4>
      <Grid>
        <SummaryItem subject="Sites" count={0} />
        <SummaryItem subject="Users" count={0} />
      </Grid>
    </GridSection>
  );
}

export default SummarySkeleton;
