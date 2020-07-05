import gql from "graphql-tag";
import PropTypes from "prop-types";
import React from "react";
import { useSubscription } from "react-apollo";
import { Spinner, TableCell, TableRow } from "../../Elements";
import DeleteButton from "./DeleteButton";
import RefreshButton from "./RefreshButton";
import ViewButton from "./ViewButton";

const ON_PAGE_UPDATED = gql`
  subscription OnPageUpdated($input: PageUpdatedInput!) {
    pageUpdated(input: $input) {
      _id
      name
      url
      createdAt
      updatedAt
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

function PageListItem({
  createdAt,
  updatedAt,
  name,
  stylesheet,
  url,
  _id,
  onError,
}) {
  useSubscription(ON_PAGE_UPDATED, {
    variables: {
      input: {
        pageId: _id,
      },
    },
  });

  return (
    <TableRow className={stylesheet.styles ? "" : "no-hover"}>
      <TableCell>{name}</TableCell>
      <TableCell>{url}</TableCell>
      <TableCell>{new Date(createdAt).toLocaleString()}</TableCell>
      <TableCell>{new Date(updatedAt).toLocaleString()}</TableCell>
      <TableCell>
        {stylesheet.styles ? (
          <>
            <ViewButton name={name} stylesheet={stylesheet} url={url} />
            <DeleteButton setContainerErrors={onError} pageId={_id} />
            <RefreshButton
              setContainerErrors={onError}
              pageId={_id}
              pageUrl={url}
            />
          </>
        ) : (
          <Spinner bgColor="teal" />
        )}
      </TableCell>
    </TableRow>
  );
}

PageListItem.defaultProps = {
  onError: () => null,
};

PageListItem.propTypes = {
  onError: PropTypes.func.isRequired,
};

export default PageListItem;
