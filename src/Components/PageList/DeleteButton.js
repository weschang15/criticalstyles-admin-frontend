import PropTypes from "prop-types";
import React from "react";
import { useMutation } from "react-apollo";
import { LinkButton, Spinner } from "../../Elements";
import { DELETE_PAGE } from "../../Mutations";
import ScaryButton from "../ScaryButton/ScaryButton";

function DeleteButton({ pageId, setContainerErrors }) {
  const [deletePage, { loading }] = useMutation(DELETE_PAGE);

  const handleDelete = async () => {
    const { data } = await deletePage({
      variables: { input: { _id: pageId } },
      refetchQueries: ["GetPages"],
    });

    const ok = (data.deletePage || {}).ok || false;
    const errors = (data.deletePage || {}).errors || [];

    if (!ok) {
      setContainerErrors(errors);
    }
  };

  return (
    <ScaryButton action={handleDelete}>
      {({ message, onPress }) => (
        <LinkButton onClick={onPress}>
          {loading ? <Spinner bgColor="teal" /> : message}
        </LinkButton>
      )}
    </ScaryButton>
  );
}

DeleteButton.propTypes = {
  pageId: PropTypes.string.isRequired,
  setContainerErrors: PropTypes.func.isRequired,
};

export default DeleteButton;
