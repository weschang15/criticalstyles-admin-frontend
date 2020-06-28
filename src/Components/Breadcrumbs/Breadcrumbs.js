import React from "react";
import { NavLink, useLocation, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../Hooks";
import { getBreadcrumbs, removeLast } from "../../Utils";
import Breadcrumb from "./Breadcrumb";
import Separator from "./Separator";

const BreadcrumbsWrap = styled.nav`
  margin: 1em 0;
`;

const BreadcrumbList = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

function Breadcrumbs() {
  const {
    account: { name },
  } = useAuth();
  const { path } = useRouteMatch();
  const { pathname, state } = useLocation();
  const siteName = state && state.siteName;
  const here = siteName ? path.replace(":siteId", siteName) : pathname;
  const breadcrumbs = getBreadcrumbs(here);

  const crumbs = [{ to: null, page: name }, ...breadcrumbs]
    .filter(({ page }) => page !== "Page")
    .map(({ to, page }, i, arr) => (
      <Breadcrumb key={to}>
        {to ? (
          <NavLink
            to={to}
            style={{
              pointerEvents: i === arr.length - 1 && "none",
            }}
          >
            {page}
          </NavLink>
        ) : (
          page
        )}
      </Breadcrumb>
    ))
    .reduce((acc, curr, index) => {
      return acc.concat(curr, <Separator key={index} />);
    }, []);

  return (
    <BreadcrumbsWrap>
      <BreadcrumbList>{removeLast(crumbs)}</BreadcrumbList>
    </BreadcrumbsWrap>
  );
}

export default Breadcrumbs;
