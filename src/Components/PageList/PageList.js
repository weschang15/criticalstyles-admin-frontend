import PropTypes from "prop-types";
import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow
} from "../../Elements";
import Skeleton from "../Skeleton/Skeleton";
import TogglePageDetails from "../Toggles/TogglePageDetails";
import NoPages from "./NoPages";

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
          <TableRow key={page._id}>
            <TableCell>{page.name}</TableCell>
            <TableCell>{new Date(page.createdAt).toLocaleString()}</TableCell>
            <TableCell>
              <TogglePageDetails {...page} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : (
    <NoPages />
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
