import React from "react";
import styled from "styled-components";
import { Icons, Spinner } from "../../Elements";
import Footer from "../../Elements/Footer/Footer";
import Navbar from "../Navbar/Navbar";
import NavItem from "../Navbar/NavItem";
import NavList from "../Navbar/NavList";
import PrimaryNav from "../Navbar/PrimaryNav";
import SecondaryNav from "../Navbar/SecondaryNav";
import { Pill } from "../Skeleton/Pill";
import { Square } from "../Skeleton/Square";

const Main = styled.main`
  position: relative;
`;

const AdminMain = styled(Main)`
  position: relative;
  padding: 1em 1em 1em calc(66px + 1em);
`;

const SkeletonNav = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
`;

const SkeletonSidebar = styled.nav`
  background-color: ${({ theme }) => theme.black};
  bottom: 0;
  color: ${({ theme }) => theme.white};
  display: inline-block;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 66px;
  z-index: 5;

  .logo {
    color: ${({ theme }) => theme.white};
    display: block;
    opacity: 0.5;
    padding: 0.75em;
    text-align: center;
    svg {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  ${Square} {
    opacity: 0.5;
    margin: 1em auto;
    padding: 0;
  }
`;

const SkeletonSpinner = styled.div`
  padding: 15% 0;
`;

export function LoadingLayout() {
  return (
    <>
      <SkeletonSidebar>
        <div className="logo">
          <Icons icon="logo" width="36" height="36" fill="currentColor" />
        </div>
        <NavList>
          <NavItem>
            <Square size={22} />
          </NavItem>
          <NavItem>
            <Square size={22} />
          </NavItem>
          <NavItem>
            <Square size={22} />
          </NavItem>
        </NavList>
      </SkeletonSidebar>
      <AdminMain>
        <SkeletonNav>
          <Pill size={8} />
          <Pill size={10} />
        </SkeletonNav>
        <SkeletonSpinner>
          <Spinner bgColor="teal" size={24} />
        </SkeletonSpinner>
      </AdminMain>
    </>
  );
}

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
