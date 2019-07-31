import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import { Textarea, PrimaryButton, LinkButton } from "../Elements";

const CriticalStylesWrapper = styled.div``;
const Actions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;

  button:first-child {
    margin-right: 0.25em;
  }

  button:last-child {
    margin-left: 0.25em;
  }
`;

function CriticalStyles({ data }) {
  const [, setState] = useState(false);

  return (
    <CriticalStylesWrapper>
      <Textarea value={data} readOnly />
      <Actions>
        <LinkButton>Format CSS</LinkButton>
        <CopyToClipboard text={data} onCopy={() => setState(true)}>
          <PrimaryButton>Copy to Clipboard</PrimaryButton>
        </CopyToClipboard>
      </Actions>
    </CriticalStylesWrapper>
  );
}

export default CriticalStyles;
