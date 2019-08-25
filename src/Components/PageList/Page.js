import { darken } from "polished";
import React, { useState } from "react";
import styled from "styled-components";
import { FieldLabel } from "../../Elements";
import Icons from "../../Elements/Icons";
import Accordion from "../Accordion/Accordion";
import Copier from "../Copier/Copier";

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

const Labels = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 0.5em;
`;

const Sublabel = styled(FieldLabel)`
  color: ${({ theme }) => theme.blue};
  display: block;
  cursor: auto;
`;

const CollapsibleTextarea = styled.textarea`
  background-color: ${({ theme }) => theme.gray};
  border-radius: 6px;
  height: 100%;
  width: 100%;
  border: 0;
  padding: 0.5em;
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  font-size: 14px;
  resize: none;
`;

const Actions = styled.div`
  margin-top: 1em;
`;

function Page({ name, url, stylesheet }) {
  const { stats } = stylesheet;
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <Header>
        <h3>{name}</h3>
        <p>
          <Icons icon="url" width="17px" fill="currentColor" />
          {url}
        </p>
      </Header>
      <Labels>
        <FieldLabel htmlFor="css" onClick={() => toggle(!toggled)}>
          Critical CSS
        </FieldLabel>
        <Sublabel>{stats.minifiedSize * 0.001}KB Minified</Sublabel>
      </Labels>
      <Accordion toggled={toggled}>
        <CollapsibleTextarea id="css" value={stylesheet.styles} readOnly />
      </Accordion>
      <Actions>
        <Copier copyText={stylesheet.styles} />
      </Actions>
    </div>
  );
}

export default Page;
