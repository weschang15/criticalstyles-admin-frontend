import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Table, TableBody, TableHeader, TableRow } from "../../Elements";
import Skeleton from "../Skeleton/Skeleton";
import NoSites from "./NoSites";
import SiteListItem from "./SiteListItem";

function SiteList({ loading, sites, subscribeToMore }) {
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    let unsub = null;
    if (!loading) {
      unsub = subscribeToMore();
    }
    return () => {
      if (unsub) {
        unsub();
      }
    };
  });

  if (loading) {
    return <Skeleton labels={["name", "created at", "actions"]} />;
  }

  if (!sites.length) {
    return <NoSites />;
  }

  return (
    <>
      {errors && (
        <Snackbar type="error">
          <ul>
            {errors.map(({ message }, i) => (
              <li key={i}>{message}</li>
            ))}
          </ul>
        </Snackbar>
      )}
      <Table>
        <TableHeader>
          <TableRow>
            <th>name</th>
            <th>created at</th>
            <th>actions</th>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sites.map((site) => (
            <SiteListItem key={site._id} onError={setErrors} {...site} />
          ))}
        </TableBody>
      </Table>
    </>
  );
}

SiteList.propTypes = {
  loading: PropTypes.bool.isRequired,
  sites: PropTypes.array.isRequired,
};

SiteList.defaultProps = {
  loading: false,
  sites: [],
};

export default SiteList;
