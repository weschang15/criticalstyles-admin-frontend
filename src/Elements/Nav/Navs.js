import styled from "styled-components";

export const PrimaryNav = styled.nav`
  background-color: ${({ theme }) => theme.black};
  display: inline-block;
  overflow: hidden;
  z-index: 5;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 66px;
  .logo {
    display: block;
    color: ${({ theme }) => theme.white};
    text-align: center;
    padding: 0.75em;
    svg {
      display: block;
      width: 100%;
      height: auto;
    }
  }
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
`;

export const SecondaryNav = styled(Nav)`
  justify-content: flex-end;
  margin: 0 0 1em;
`;

export const StaticNav = styled(Nav)`
  justify-content: space-between;
  background-color: ${({ theme }) => theme.purple};
  padding: 1em;
  .logo {
    svg {
      fill: ${({ theme }) => theme.white};
    }
  }
`;
