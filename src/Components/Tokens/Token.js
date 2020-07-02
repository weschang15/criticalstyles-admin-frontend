import PropTypes from "prop-types";
import React from "react";
import { useMutation } from "react-apollo";
import { LinkButton, Spinner, TableCell, TableRow } from "../../Elements";
import { DELETE_TOKEN } from "../../Mutations";
import ScaryButton from "../ScaryButton/ScaryButton";

function Token({ createdAt, _id, secret, onError }) {
  const [deleteToken, { loading }] = useMutation(DELETE_TOKEN);

  const handleDelete = async () => {
    const { data } = await deleteToken({
      variables: { input: { _id } },
      refetchQueries: ["GetTokens"],
    });

    const ok = (data.deleteToken || {}).ok || false;
    const errors = (data.deleteToken || {}).errors || [];

    if (!ok) {
      onError(errors);
    }
  };

  return (
    <TableRow>
      <TableCell>{secret}</TableCell>
      <TableCell>{new Date(createdAt).toLocaleString()}</TableCell>
      <TableCell>
        <ScaryButton action={handleDelete}>
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

Token.defaultProps = {
  onError: () => null,
};

Token.propTypes = {
  onError: PropTypes.func.isRequired,
};

export default Token;
