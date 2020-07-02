import PropTypes from "prop-types";
import React from "react";
import { useMutation } from "react-apollo";
import { Link, useLocation } from "react-router-dom";
import { LinkButton, Spinner, TableCell, TableRow } from "../../Elements";
import { DELETE_SITE } from "../../Mutations";
import ScaryButton from "../ScaryButton/ScaryButton";

function SiteListItem({ createdAt, _id, name, onError }) {
  const [deleteSite, { loading }] = useMutation(DELETE_SITE);
  const { pathname } = useLocation();

  const handleDelete = async () => {
    const { data } = await deleteSite({
      variables: { input: { _id } },
      refetchQueries: ["GetSites"],
    });

    const ok = (data.deleteSite || {}).ok || false;
    const errors = (data.deleteSite || {}).errors || [];

    if (!ok) {
      onError(errors);
    }
  };

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{new Date(createdAt).toLocaleString()}</TableCell>
      <TableCell>
        <Link
          to={{
            pathname: `${pathname}/${_id}`,
            state: {
              siteName: name,
              siteId: _id,
              isSingle: true,
            },
          }}
        >
          View
        </Link>
        <ScaryButton action={handleDelete}>
          {({ message, onPress }) => (
            <LinkButton onClick={onPress}>
              {loading ? <Spinner bgColor="teal" /> : message}
            </LinkButton>
          )}
        </ScaryButton>
      </TableCell>
    </TableRow>
  );
}

SiteListItem.defaultProps = {
  onError: () => null,
};

SiteListItem.propTypes = {
  onError: PropTypes.func.isRequired,
};

export default SiteListItem;
