import React from "react";
import NoDataImage from "../../assets/no-data.svg";
import QuickAction from "../QuickActions/QuickAction";

function NoTokens(props = {}) {
  return (
    <QuickAction withActive={false} withHover={false}>
      <figure>
        <img src={NoDataImage} alt="Illustration for no data" />
      </figure>
      <div>
        <h5>Looks like you haven't created any API keys yet!</h5>
      </div>
    </QuickAction>
  );
}

export default NoTokens;
