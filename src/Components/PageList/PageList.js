import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Skeleton from "../Skeleton/Skeleton";
import {
  TableHeader,
  Table,
  TableRow,
  TableCell,
  TableBody,
  LinkButton
} from "../../Elements";

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
          pages.map(({ _id, name }) => (
            <TableRow key={_id}>
              <TableCell>{name}</TableCell>
              <TableCell />
              <TableCell>
                <LinkButton>View</LinkButton>
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
