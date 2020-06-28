import React from "react";
import { Wrapper } from "../../Elements";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

function UtilityNav({ children }) {
  return (
    <Wrapper.Flex justifyContent="space-between" alignItems="center">
      <Breadcrumbs />
      {children}
    </Wrapper.Flex>
  );
}

export default UtilityNav;
