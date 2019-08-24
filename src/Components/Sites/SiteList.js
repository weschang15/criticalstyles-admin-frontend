import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Skeleton from "../Skeleton/Skeleton";
import {
  TableHeader,
  Table,
  TableRow,
  TableCell,
  TableBody
} from "../../Elements";

function SiteList({ loading, sites, location: { pathname }, subscribeToMore }) {
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

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <th>name</th>
          <th>url</th>
          <th>created at</th>
          <th>actions</th>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading ? (
          <Skeleton />
        ) : (
          sites.map(({ _id, name, slug, url }) => (
            <TableRow key={_id} className="no-hover">
              <TableCell>{name}</TableCell>
              <TableCell>{url}</TableCell>
              <TableCell />
              <TableCell>
                <Link to={`${pathname}/${slug}`}>View</Link>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}

SiteList.propTypes = {
  loading: PropTypes.bool.isRequired,
  sites: PropTypes.array.isRequired
};

SiteList.defaultProps = {
  loading: false,
  sites: []
};

export default SiteList;
