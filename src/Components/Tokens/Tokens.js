import PropTypes from "prop-types";
import React from "react";
import { Table, TableBody, TableHeader, TableRow } from "../../Elements";
import Skeleton from "../Skeleton/Skeleton";
import NoTokens from "./NoTokens";
import Token from "./Token";

function Tokens({ loading, tokens }) {
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

  return tokens.length ? (
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
          <Token key={token._id} {...token} />
        ))}
      </TableBody>
    </Table>
  ) : (
    <NoTokens />
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
