import PropTypes from "prop-types";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../contexts/AuthContext";
import { getBreadcrumbs, removeLast } from "../../Utils";
import Breadcrumb from "./Breadcrumb";
import Separator from "./Separator";

const BreadcrumbList = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

function Breadcrumbs({ here }) {
  const {
    account: { name }
  } = useContext(AuthContext);
  const breadcrumbs = getBreadcrumbs(here);

  const crumbs = [{ to: null, page: name }, ...breadcrumbs]
    .map(({ to, page }) => (
      <Breadcrumb key={page}>
        {to ? <NavLink to={to}>{page}</NavLink> : page}
      </Breadcrumb>
    ))
    .reduce((acc, curr, index) => {
      return acc.concat(curr, <Separator key={index} />);
    }, []);

  return (
    <nav>
      <BreadcrumbList>{removeLast(crumbs)}</BreadcrumbList>
    </nav>
  );
}

Breadcrumbs.propTypes = {
  here: PropTypes.string.isRequired
};

export default Breadcrumbs;
