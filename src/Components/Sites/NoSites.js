import React from "react";
import NoDataImage from "../../assets/no-data.svg";
import { QuickActionWrapper } from "../Toggles/Toggles";

function NoSites(props = {}) {
  return (
    <QuickActionWrapper withActive={false}>
      <figure>
        <img src={NoDataImage} alt="Illustration for no data" />
      </figure>
      <div>
        <h5>Looks like you haven't created any sites!</h5>
      </div>
    </QuickActionWrapper>
  );
}

export default NoSites;
