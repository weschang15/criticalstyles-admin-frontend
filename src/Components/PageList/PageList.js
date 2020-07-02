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
    return <Skeleton labels={["name", "created at", "actions"]} />;
  }

  if (!pages.length) {
    return <NoPages bgColor="teal" />;
  }

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
        {pages.map((page) => (
          <PageListItem key={page._id} page={page} />
        ))}
      </TableBody>
    </Table>
  );
}

PageList.propTypes = {
  loading: PropTypes.bool.isRequired,
  pages: PropTypes.array.isRequired,
};

PageList.defaultProps = {
  loading: false,
  pages: [],
};

export default PageList;
