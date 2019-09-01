import pluralize from "pluralize";
import React from "react";
import { useQuery } from "react-apollo";
import styled from "styled-components";
import { GridSection } from "../../Elements";
import { GET_ACCOUNT } from "../../Queries/GetAccount";
import SummaryItem from "./SummaryItem";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 270px));
  grid-gap: 30px;
  margin: 2em 0;
`;

function Summary() {
  const {
    data: { getAccount },
    loading
  } = useQuery(GET_ACCOUNT);

  const {
    summary = {
      sites: 0,
      users: 0
    }
  } = getAccount ? getAccount.account : {};

  return (
    <GridSection>
      <h4>Workspace Overview</h4>
      <Grid>
        <SummaryItem
          subject={pluralize("Site", summary.sites)}
          loading={loading}
          count={summary.sites}
        />
        <SummaryItem
          subject={pluralize("User", summary.users)}
          loading={loading}
          count={summary.users}
        />
      </Grid>
    </GridSection>
  );
}

export default Summary;
