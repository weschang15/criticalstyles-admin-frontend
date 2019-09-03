import gql from "graphql-tag";
import React from "react";
import { useSubscription } from "react-apollo";
import { Spinner, TableCell, TableRow } from "../../Elements";
import PageDetails from "./PageDetails";

const ON_PAGE_UPDATED = gql`
  subscription OnPageUpdated($input: PageUpdatedInput!) {
    pageUpdated(input: $input) {
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

function PageListItem({ page }) {
  const { createdAt, name, stylesheet } = page;

  useSubscription(ON_PAGE_UPDATED, {
    variables: {
      input: {
        pageId: page._id
      }
    }
  });

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{new Date(createdAt).toLocaleString()}</TableCell>
      <TableCell>
        {stylesheet.styles ? (
          <PageDetails {...page} />
        ) : (
          <Spinner bgColor="teal" />
        )}
      </TableCell>
    </TableRow>
  );
}

export default PageListItem;
