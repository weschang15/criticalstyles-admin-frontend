import React, { useContext } from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo";
import { AuthContext } from "../../contexts/AuthContext";
import SiteList from "../../Components/Sites/SiteList";
import { GET_ACCOUNT } from "../../Queries";

const Section = styled.section`
  grid-area: content;
  grid-row: auto / auto;
`;

function Sites({ location }) {
  const { accountId } = useContext(AuthContext);
  const {
    data: { getAccount },
    loading
  } = useQuery(GET_ACCOUNT, {
    variables: {
      input: {
        id: accountId
      }
    }
  });

  const sites = getAccount ? getAccount.account.sites : [];
  return (
    <>
      <Section>
        <SiteList loading={loading} sites={sites} location={location} />
      </Section>
    </>
  );
}

export default Sites;
