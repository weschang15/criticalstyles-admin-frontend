import React from "react";
import NoDataImage from "../../assets/no-data.svg";
import QuickAction from "../QuickActions/QuickAction";

function NoSites(props = {}) {
  return (
    <QuickAction withActive={false} withHover={false} fullWidth>
      <figure>
        <img src={NoDataImage} alt="Illustration for no data" />
      </figure>
      <div>
        <h5>Looks like you haven't created any sites!</h5>
      </div>
    </QuickAction>
  );
}

export default NoSites;
