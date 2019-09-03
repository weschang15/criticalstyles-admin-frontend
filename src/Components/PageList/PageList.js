import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Table, TableBody, TableHeader, TableRow } from "../../Elements";
import Skeleton from "../Skeleton/Skeleton";
import NoPages from "./NoPages";
import PageListItem from "./PageListItem";

function PageList({ loading, pages, subscribeToMore }) {
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
          <TableRow />
          <TableRow />
          <TableRow />
        </TableHeader>
        <TableBody>
          <Skeleton />
        </TableBody>
      </Table>
    );
  }

  return pages.length ? (
    <Table>
      <TableHeader>
        <TableRow>
          <th>name</th>
          <th>created at</th>
          <th>actions</th>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pages.map(page => (
          <PageListItem key={page._id} page={page} />
        ))}
      </TableBody>
    </Table>
  ) : (
    <NoPages bgColor="teal" />
  );
}

PageList.propTypes = {
  loading: PropTypes.bool.isRequired,
  pages: PropTypes.array.isRequired
};

PageList.defaultProps = {
  loading: false,
  pages: []
};

export default PageList;
