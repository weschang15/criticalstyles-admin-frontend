import React from "react";
import styled from "styled-components";
import Footer from "../../Elements/Footer/Footer";
import Navbar from "../Navbar/Navbar";
import PrimaryNav from "../Navbar/PrimaryNav";
import SecondaryNav from "../Navbar/SecondaryNav";

const Main = styled.main`
  position: relative;
`;

const AdminMain = styled(Main)`
  position: relative;
  padding: 1em 1em 1em calc(66px + 1em);
`;

export function PublicLayout({ children, ...rest }) {
  return (
    <Main {...rest}>
      <Navbar />
      {children}
      <Footer>
        Designed, Developed and Deployed by {` `}
        <a href="https://wesleychang.me">Wesley Chang</a> &copy;{" "}
        {new Date().getFullYear()}
      </Footer>
    </Main>
  );
}

export function AdminLayout({ children, ...rest }) {
  return (
    <>
      <PrimaryNav />
      <AdminMain {...rest}>
        <SecondaryNav />
        {children}
      </AdminMain>
    </>
  );
}
