import React, { useState } from "react";
import styled from "styled-components";
import { FieldLabel } from "../../Elements";
import Accordion from "../Accordion/Accordion";
import Copier from "../Copier/Copier";

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

function MoneyMakerResults({ ccss }) {
  const { styles, stats } = ccss;
  const [toggled, toggle] = useState(false);

  return (
    <>
      <Labels>
        <FieldLabel htmlFor="css" onClick={() => toggle(!toggled)}>
          Critical CSS
        </FieldLabel>
        <Sublabel>{stats.minifiedSize * 0.001}KB Minified</Sublabel>
      </Labels>
      <Accordion toggled={toggled}>
        <CollapsibleTextarea id="css" value={styles} readOnly />
      </Accordion>
      <Actions>
        <Copier copyText={styles} />
      </Actions>
    </>
  );
}

export default MoneyMakerResults;
