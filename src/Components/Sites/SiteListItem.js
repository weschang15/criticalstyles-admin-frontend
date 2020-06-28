import React from "react";
import { useMutation } from "react-apollo";
import { Link, useLocation } from "react-router-dom";
import { LinkButton, Spinner, TableCell, TableRow } from "../../Elements";
import { DELETE_SITE } from "../../Mutations";
import ScaryButton from "../ScaryButton/ScaryButton";

function SiteListItem({ createdAt, _id, name, slug }) {
  const [deleteSite, { loading }] = useMutation(DELETE_SITE, {
    variables: { input: { _id } },
    refetchQueries: ["GetSites"],
  });

  const { pathname } = useLocation();

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
        <ScaryButton action={deleteSite}>
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

export default SiteListItem;
