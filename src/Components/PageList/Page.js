import React from "react";
import Icons from "../../Elements/Icons";
import MoneyMakerHeader from "../MoneyMaker/MoneyMakerHeader";
import MoneyMakerResults from "../MoneyMaker/MoneyMakerResults";

function Page({ name, url, stylesheet }) {
  return (
    <div>
      <MoneyMakerHeader>
        <h3>{name}</h3>
        <p>
          <Icons icon="url" width="17px" fill="currentColor" />
          {url}
        </p>
      </MoneyMakerHeader>
      <MoneyMakerResults ccss={stylesheet} />
    </div>
  );
}

export default Page;
