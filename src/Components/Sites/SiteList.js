import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow
} from "../../Elements";
import Skeleton from "../Skeleton/Skeleton";

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
        {loading ? (
          <Skeleton />
        ) : (
          sites.map(({ createdAt, _id, name, slug }) => (
            <TableRow key={_id} className="no-hover">
              <TableCell>{name}</TableCell>
              <TableCell>{new Date(createdAt).toLocaleString()}</TableCell>
              <TableCell>
                <Link
                  to={{
                    pathname: `${here}/${slug}`,
                    state: {
                      siteId: _id,
                      isSingle: true
                    }
                  }}
                >
                  View
                </Link>
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
