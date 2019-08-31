import React from "react";
import NoDataImage from "../../assets/no-data.svg";
import { QuickActionWrapper } from "../Toggles/Toggles";

function NoPages(props = {}) {
  return (
    <QuickActionWrapper withActive={false}>
      <figure>
        <img src={NoDataImage} alt="Illustration for no data" />
      </figure>
      <div>
        <h5>Looks like you haven't created any pages!</h5>
      </div>
    </QuickActionWrapper>
  );
}

export default NoPages;
