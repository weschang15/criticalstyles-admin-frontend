import PropTypes from "prop-types";
import React from "react";
import { useMutation } from "react-apollo";
import { LinkButton, Spinner } from "../../Elements";
import { REFRESH_PAGE } from "../../Mutations";
import ScaryButton from "../ScaryButton/ScaryButton";

function RefreshButton({ pageId, pageUrl, setContainerErrors }) {
  const [refreshPage, { loading }] = useMutation(REFRESH_PAGE);

  const handleRefresh = async () => {
    const { data } = await refreshPage({
      variables: { input: { _id: pageId, url: pageUrl } },
    });

    const ok = (data.refreshPage || {}).ok || false;
    const errors = (data.refreshPage || {}).errors || [];

    if (!ok) {
      setContainerErrors(errors);
    }
  };

  return (
    <ScaryButton action={handleRefresh} messages={["Refresh", "Are you sure?"]}>
      {({ message, onPress }) => (
        <LinkButton onClick={onPress}>
          {loading ? <Spinner bgColor="teal" /> : message}
        </LinkButton>
      )}
    </ScaryButton>
  );
}

RefreshButton.propTypes = {
  pageId: PropTypes.string.isRequired,
  pageUrl: PropTypes.string.isRequired,
  setContainerErrors: PropTypes.func.isRequired,
};

export default RefreshButton;
