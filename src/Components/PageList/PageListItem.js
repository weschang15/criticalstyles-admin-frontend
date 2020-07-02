import gql from "graphql-tag";
import PropTypes from "prop-types";
import React from "react";
import { useMutation, useSubscription } from "react-apollo";
import { LinkButton, Spinner, TableCell, TableRow } from "../../Elements";
import { DELETE_PAGE } from "../../Mutations";
import ScaryButton from "../ScaryButton/ScaryButton";
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

function PageListItem({ createdAt, name, stylesheet, url, _id, onError }) {
  useSubscription(ON_PAGE_UPDATED, {
    variables: {
      input: {
        pageId: _id,
      },
    },
  });

  const [deletePage, { loading }] = useMutation(DELETE_PAGE);

  const handleDelete = async () => {
    const { data } = await deletePage({
      variables: { input: { _id } },
      refetchQueries: ["GetPages"],
    });

    const ok = (data.deletePage || {}).ok || false;
    const errors = (data.deletePage || {}).errors || [];

    if (!ok) {
      onError(errors);
    }
  };

  return (
    <TableRow className={stylesheet.styles ? "" : "no-hover"}>
      <TableCell>{name}</TableCell>
      <TableCell>{new Date(createdAt).toLocaleString()}</TableCell>
      <TableCell>
        {stylesheet.styles ? (
          <>
            <PageDetails name={name} stylesheet={stylesheet} url={url} />
            <ScaryButton action={handleDelete}>
              {({ message, onPress }) => (
                <LinkButton onClick={onPress}>
                  {loading ? <Spinner bgColor="teal" /> : message}
                </LinkButton>
              )}
            </ScaryButton>
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
