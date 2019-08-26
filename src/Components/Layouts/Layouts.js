import React from "react";
import styled from "styled-components";
import Footer from "../../Elements/Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Main = styled.main`
  position: relative;
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
