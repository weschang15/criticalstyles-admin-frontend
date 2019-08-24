import React from "react";

import { Icons } from "../../Elements";
import Breadcrumb from "./Breadcrumb";

function Separator(props = {}) {
  return (
    <Breadcrumb {...props}>
      <Icons icon="chevron-right" width="20px" fill="currentColor" />
    </Breadcrumb>
  );
}

export default Separator;
