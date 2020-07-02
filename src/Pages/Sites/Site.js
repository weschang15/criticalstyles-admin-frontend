import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { AdminLayout } from "../../Components/Layouts/Layouts";
import UtilityNav from "../../Components/Navbar/UtilityNav";
import PageList from "../../Components/PageList/PageList";
import Pagination from "../../Components/Pagination/Pagination";
import AddPageToggle from "../../Components/Toggles/AddPageToggle";
import { PAGINATION_LIMIT } from "../../config/pagination";
import { Section, SectionTitle } from "../../Elements";
import { useAuth } from "../../Hooks";
import { GET_PAGES } from "../../Queries";

const ON_PAGE_ADDED_SUBSCRIPTION = gql`
  subscription OnPageAdded($input: PageAddedInput!) {
    pageAdded(input: $input) {
      _id
      name
      url
      createdAt
      stylesheet {
        styles
        stats {
          originalSize
          minifiedSize
        }
      }
    }
  }
`;

function Site({ match }) {
  const {
    params: { siteId },
  } = match;

  const { data, loading, subscribeToMore, fetchMore } = useQuery(GET_PAGES, {
    variables: {
      input: {
        siteId,
        skip: 0,
        limit: PAGINATION_LIMIT,
      },
    },
    fetchPolicy: "network-only",
  });

  const {
    account: { _id },
  } = useAuth();

  const subscribe = () => {
    const unsubscribe = subscribeToMore({
      document: ON_PAGE_ADDED_SUBSCRIPTION,
      variables: { input: { accountId: _id, siteId } },
      updateQuery: (prevData, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prevData;
        }
        const newItem = subscriptionData.data.pageAdded;
        return {
          ...prevData,
          pages: {
            ...prevData.pages,
            documents: [newItem, ...prevData.pages.documents],
          },
        };
      },
    });

    return unsubscribe;
  };

  const loadMore = (fn) => (skip) =>
    fn({
      variables: {
        input: { siteId, skip, limit: PAGINATION_LIMIT },
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          ...prev,
          pages: {
            ...fetchMoreResult.pages,
          },
        };
      },
    });

  const pages = ((data && data.pages) || {}).documents || [];
  const queryInfo = ((data && data.pages) || {}).queryInfo || {};

  return (
    <AdminLayout>
      <UtilityNav>
        <AddPageToggle />
      </UtilityNav>
      <Section>
        <SectionTitle>All pages</SectionTitle>
        <PageList loading={loading} pages={pages} subscribeToMore={subscribe} />
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

export default Site;
