import PropTypes from "prop-types";
import React, { useState } from "react";
import { Table, TableBody, TableHeader, TableRow } from "../../Elements";
import Skeleton from "../Skeleton/Skeleton";
import Snackbar from "../Snackbar/Snackbar";
import NoTokens from "./NoTokens";
import Token from "./Token";

function Tokens({ loading, tokens }) {
  const [errors, setErrors] = useState(null);

  if (loading) {
    return <Skeleton labels={["name", "created at", "actions"]} />;
  }

  if (!tokens.length) {
    return <NoTokens />;
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
            <th>secret</th>
            <th>created at</th>
            <th>actions</th>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tokens.map((token) => (
            <Token key={token._id} {...token} onError={setErrors} />
          ))}
        </TableBody>
      </Table>
    </>
  );
}

Tokens.propTypes = {
  loading: PropTypes.bool.isRequired,
  tokens: PropTypes.array.isRequired,
};

Tokens.defaultProps = {
  loading: false,
  tokens: [],
};

export default Tokens;
