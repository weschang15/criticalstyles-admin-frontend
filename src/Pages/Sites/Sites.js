import gql from "graphql-tag";
import React, { useContext } from "react";
import { useQuery } from "react-apollo";
import styled from "styled-components";
import { AdminLayout } from "../../Components/Layouts/Layouts";
import SiteList from "../../Components/Sites/SiteList";
import { AuthContext } from "../../contexts/AuthContext";
import { GET_SITES } from "../../Queries";

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
  const { data, loading, subscribeToMore } = useQuery(GET_SITES);

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
          sites: {
            ...prevData.sites,
            documents: [newItem, ...prevData.sites.documents]
          }
        };
      }
    });

    return unsubscribe;
  };

  const sites = data && data.sites ? data.sites.documents : [];

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
