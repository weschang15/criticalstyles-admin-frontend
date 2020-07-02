import React from "react";
import NoDataImage from "../../assets/no-data.svg";
import QuickAction from "../QuickActions/QuickAction";

function NoPages(props = {}) {
  return (
    <QuickAction withActive={false} withHover={false} bgColor="teal" fullWidth>
      <figure>
        <img src={NoDataImage} alt="Illustration for no data" />
      </figure>
      <div>
        <h5>Looks like you haven't created any pages!</h5>
      </div>
    </QuickAction>
  );
}

export default NoPages;
