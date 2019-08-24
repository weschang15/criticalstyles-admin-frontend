import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import gql from "graphql-tag";
import PageList from "../../Components/PageList/PageList";
import { GET_SITE_PAGES } from "../../Queries/GetSitePages";
import { AuthContext } from "../../contexts/AuthContext";

const Section = styled.section``;

const ON_PAGE_ADDED_SUBSCRIPTION = gql`
  subscription OnPageAdded($input: PageAddedInput!) {
    pageAdded(input: $input) {
      _id
      name
      url
    }
  }
`;

function Site({
  match: {
    params: { slug }
  },
  location: { state = {} }
}) {
  const { siteId } = state;
  const { accountId } = useContext(AuthContext);
  const { data, loading, subscribeToMore } = useQuery(GET_SITE_PAGES, {
    variables: {
      input: {
        slug
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
          getSite: {
            ...prevData.getSite,
            site: {
              ...prevData.getSite.site,
              pages: [newItem, ...prevData.getSite.site.pages]
            }
          }
        };
      }
    });

    return unsubscribe;
  };

  const pages = data && data.getSite ? data.getSite.site.pages : [];

  return (
    <>
      <Section>
        <PageList
          loading={loading}
          pages={pages}
          subscribeToMore={subscribe}
          {...state}
        />
      </Section>
    </>
  );
}

export default Site;
