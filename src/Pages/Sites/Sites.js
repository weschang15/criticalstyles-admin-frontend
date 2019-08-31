import gql from "graphql-tag";
import React, { useContext } from "react";
import { useQuery } from "react-apollo";
import styled from "styled-components";
import { AdminLayout } from "../../Components/Layouts/Layouts";
import SiteList from "../../Components/Sites/SiteList";
import { AuthContext } from "../../contexts/AuthContext";
import { GET_ACCOUNT } from "../../Queries";

const Section = styled.section``;

const ON_SITE_SUBSCRIPTION = gql`
  subscription OnSiteUpdated($accountId: String!) {
    siteAdded(accountId: $accountId) {
      _id
      slug
      name
      createdAt
    }
  }
`;

function Sites({ location: { pathname } }) {
  const {
    account: { _id }
  } = useContext(AuthContext);
  const {
    data: { getAccount },
    loading,
    subscribeToMore
  } = useQuery(GET_ACCOUNT, {
    variables: {
      input: {
        id: _id
      }
    }
  });

  const subscribe = () => {
    const unsubscribe = subscribeToMore({
      document: ON_SITE_SUBSCRIPTION,
      variables: { accountId: _id },
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
    <AdminLayout>
      <Section>
        <SiteList
          loading={loading}
          sites={sites}
          here={pathname}
          subscribeToMore={subscribe}
        />
      </Section>
    </AdminLayout>
  );
}

export default Sites;
