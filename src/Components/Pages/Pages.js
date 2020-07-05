import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Table, TableBody, TableHeader, TableRow } from "../../Elements";
import Skeleton from "../Skeleton/Skeleton";
import Snackbar from "../Snackbar/Snackbar";
import NoPages from "./NoPages";
import Page from "./Page";

function Pages({ loading, pages, subscribeToMore }) {
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
    return (
      <Skeleton
        labels={["name", "url", "created at", "updated at", "actions"]}
        colCount={5}
      />
    );
  }

  if (!pages.length) {
    return <NoPages />;
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
            <th>url</th>
            <th>created at</th>
            <th>updated at</th>
            <th>actions</th>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pages.map((page) => (
            <Page key={page._id} onError={setErrors} {...page} />
          ))}
        </TableBody>
      </Table>
    </>
  );
}

Pages.propTypes = {
  loading: PropTypes.bool.isRequired,
  pages: PropTypes.array.isRequired,
};

Pages.defaultProps = {
  loading: false,
  pages: [],
};

export default Pages;
