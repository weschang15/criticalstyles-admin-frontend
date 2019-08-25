import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Skeleton from "../Skeleton/Skeleton";
import {
  TableHeader,
  Table,
  TableRow,
  TableCell,
  TableBody
} from "../../Elements";
import TogglePageDetails from "../Toggles/TogglePageDetails";

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
          pages.map(page => (
            <TableRow key={page._id}>
              <TableCell>{page.name}</TableCell>
              <TableCell />
              <TableCell>
                <TogglePageDetails {...page} />
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
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
