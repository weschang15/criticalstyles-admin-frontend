import PropTypes from "prop-types";
import React from "react";
import { Table, TableBody, TableHeader, TableRow } from "../../Elements";
import Skeleton from "../Skeleton/Skeleton";
import ApiKeyListItem from "./ApiKeyListItem";
import NoApiKeys from "./NoApiKeys";

function ApiKeyList({ loading, tokens }) {
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
          <ApiKeyListItem key={token._id} {...token} />
        ))}
      </TableBody>
    </Table>
  ) : (
    <NoApiKeys />
  );
}

ApiKeyList.propTypes = {
  loading: PropTypes.bool.isRequired,
  tokens: PropTypes.array.isRequired,
};

ApiKeyList.defaultProps = {
  loading: false,
  tokens: [],
};

export default ApiKeyList;
