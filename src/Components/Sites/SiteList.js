import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Table, TableBody, TableHeader, TableRow } from "../../Elements";
import Skeleton from "../Skeleton/Skeleton";
import NoSites from "./NoSites";
import SiteListItem from "./SiteListItem";

function SiteList({ loading, sites, here, subscribeToMore }) {
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
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <th>name</th>
            <th>created at</th>
            <th>actions</th>
          </TableRow>
        </TableHeader>
        <TableBody>
          <Skeleton />
        </TableBody>
      </Table>
    );
  }

  return sites.length ? (
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
          <SiteListItem key={site._id} {...site} />
        ))}
      </TableBody>
    </Table>
  ) : (
    <NoSites />
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
