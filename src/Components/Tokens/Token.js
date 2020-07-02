import React from "react";
import { useMutation } from "react-apollo";
import { LinkButton, Spinner, TableCell, TableRow } from "../../Elements";
import { DELETE_TOKEN } from "../../Mutations";
import ScaryButton from "../ScaryButton/ScaryButton";

function Token({ createdAt, _id, secret }) {
  const [deleteToken, { loading }] = useMutation(DELETE_TOKEN, {
    variables: { input: { _id } },
    refetchQueries: ["GetTokens"],
  });

  return (
    <TableRow>
      <TableCell>{secret}</TableCell>
      <TableCell>{new Date(createdAt).toLocaleString()}</TableCell>
      <TableCell>
        <ScaryButton action={deleteToken}>
          {({ message, onPress }) => (
            <LinkButton onClick={onPress}>
              {loading ? <Spinner bgColor="teal" /> : message}
            </LinkButton>
          )}
        </ScaryButton>
      </TableCell>
    </TableRow>
  );
}

export default Token;
