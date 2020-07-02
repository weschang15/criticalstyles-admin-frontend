import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo";
import { AdminLayout } from "../../Components/Layouts/Layouts";
import UtilityNav from "../../Components/Navbar/UtilityNav";
import Pagination from "../../Components/Pagination/Pagination";
import SiteList from "../../Components/Sites/SiteList";
import AddSiteToggle from "../../Components/Toggles/AddSiteToggle";
import { PAGINATION_LIMIT } from "../../config/pagination";
import { Section, SectionTitle } from "../../Elements";
import { useAuth } from "../../Hooks";
import { GET_SITES } from "../../Queries";

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

function Sites() {
  const {
    account: { _id },
  } = useAuth();

  const { data, loading, subscribeToMore, fetchMore } = useQuery(GET_SITES, {
    variables: {
      input: {
        skip: 0,
        limit: PAGINATION_LIMIT,
      },
    },
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
          sites: {
            ...prevData.sites,
            documents: [newItem, ...prevData.sites.documents],
          },
        };
      },
    });

    return unsubscribe;
  };

  const loadMore = (fn) => (skip) =>
    fn({
      variables: {
        input: { skip, limit: PAGINATION_LIMIT },
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          ...prev,
          sites: {
            ...fetchMoreResult.sites,
          },
        };
      },
    });

  const sites = ((data && data.sites) || {}).documents || [];
  const queryInfo = ((data && data.sites) || {}).queryInfo || {};

  return (
    <AdminLayout>
      <UtilityNav>
        <AddSiteToggle />
      </UtilityNav>
      <Section>
        <SectionTitle>All sites</SectionTitle>
        <SiteList loading={loading} sites={sites} subscribeToMore={subscribe} />
        {!loading && (
          <Pagination
            totalPages={queryInfo.totalPages}
            fetchMore={loadMore(fetchMore)}
          />
        )}
      </Section>
    </AdminLayout>
  );
}

export default Sites;
