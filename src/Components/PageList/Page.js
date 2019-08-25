import React from "react";
import styled from "styled-components";
import { darken } from "polished";
import Icons from "../../Elements/Icons";
import Accordion from "../Accordion/Accordion";

const Wrapper = styled.div``;

const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  margin: 2em 0;
  padding-bottom: 1em;
  p {
    color: ${({ theme }) => darken(0.25, theme.gray)};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    margin: 0;
    svg {
      display: inline-block;
      vertical-align: text-bottom;
      margin-right: 0.5em;
    }
  }
`;

function Page({ _id, name, url, stylesheet }) {
  return (
    <Wrapper>
      <Header>
        <h3>{name}</h3>
        <p>
          <Icons icon="url" width="17px" fill="currentColor" />
          {url}
        </p>
      </Header>
      <Accordion stylesheet={stylesheet} />
    </Wrapper>
  );
}

export default Page;
