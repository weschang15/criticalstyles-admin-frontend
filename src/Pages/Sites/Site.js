import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React, { useContext } from "react";
import styled from "styled-components";
import { AdminLayout } from "../../Components/Layouts/Layouts";
import PageList from "../../Components/PageList/PageList";
import { AuthContext } from "../../contexts/AuthContext";
import { GET_PAGES } from "../../Queries";

const Section = styled.section``;

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

function Site({ location: { state = {} } }) {
  const { siteId } = state;
  const { accountId } = useContext(AuthContext);
  const { data, loading, subscribeToMore } = useQuery(GET_PAGES, {
    variables: {
      input: {
        siteId
      }
    }
  });

  const subscribe = () => {
    const unsubscribe = subscribeToMore({
      document: ON_PAGE_ADDED_SUBSCRIPTION,
      variables: { input: { accountId, siteId } },
      updateQuery: (prevData, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prevData;
        }
        const newItem = subscriptionData.data.pageAdded;
        return {
          ...prevData,
          pages: {
            ...prevData.pages,
            documents: [newItem, ...prevData.pages.documents]
          }
        };
      }
    });

    return unsubscribe;
  };

  const pages = data && data.pages ? data.pages.documents : [];

  return (
    <AdminLayout>
      <Section>
        <PageList
          loading={loading}
          pages={pages}
          subscribeToMore={subscribe}
          {...state}
        />
      </Section>
    </AdminLayout>
  );
}

export default Site;
