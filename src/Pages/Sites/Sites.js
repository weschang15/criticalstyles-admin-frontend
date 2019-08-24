import React, { useContext } from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo";
import { AuthContext } from "../../contexts/AuthContext";
import SiteList from "../../Components/Sites/SiteList";
import { GET_ACCOUNT } from "../../Queries";
import gql from "graphql-tag";

const Section = styled.section``;

const ON_SITE_SUBSCRIPTION = gql`
  subscription OnSiteUpdated($accountId: String!) {
    siteAdded(accountId: $accountId) {
      _id
      slug
      name
    }
  }
`;

function Sites({ location: { pathname } }) {
  const { accountId } = useContext(AuthContext);
  const {
    data: { getAccount },
    loading,
    subscribeToMore
  } = useQuery(GET_ACCOUNT, {
    variables: {
      input: {
        id: accountId
      }
    }
  });

  const subscribe = () => {
    const unsubscribe = subscribeToMore({
      document: ON_SITE_SUBSCRIPTION,
      variables: { accountId },
      updateQuery: (prevData, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prevData;
        }
        const newItem = subscriptionData.data.siteAdded;
        return {
          ...prevData,
          getAccount: {
            ...prevData.getAccount,
            account: {
              ...prevData.getAccount.account,
              sites: [newItem, ...prevData.getAccount.account.sites]
            }
          }
        };
      }
    });

    return unsubscribe;
  };

  const sites = getAccount ? getAccount.account.sites : [];
  return (
    <>
      <Section>
        <SiteList
          loading={loading}
          sites={sites}
          here={pathname}
          subscribeToMore={subscribe}
        />
      </Section>
    </>
  );
}

export default Sites;
