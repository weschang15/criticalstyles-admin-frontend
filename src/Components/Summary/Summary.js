import pluralize from "pluralize";
import React from "react";
import { useQuery } from "react-apollo";
import styled from "styled-components";
import { GridSection, SectionTitle } from "../../Elements";
import { GET_ACCOUNT } from "../../Queries/GetAccount";
import SummaryItem from "./SummaryItem";
import SummarySkeleton from "./SummarySkeleton";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 270px));
  grid-gap: 30px;
  margin: 2em 0;
`;

function Summary() {
  const { data, loading } = useQuery(GET_ACCOUNT);

  if (loading) {
    return <SummarySkeleton />;
  }

  const { account } = data.getAccount;

  return (
    <GridSection>
      <SectionTitle>Overview</SectionTitle>
      <Grid>
        <SummaryItem
          subject={pluralize("Site", account.summary.sites)}
          count={account.summary.sites}
        />
        <SummaryItem
          subject={pluralize("User", account.summary.users)}
          count={account.summary.users}
        />
      </Grid>
    </GridSection>
  );
}

export default Summary;
