import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import { Textarea, PrimaryButton } from "../Elements";

const CriticalStylesWrapper = styled.div``;

function CriticalStyles({ data }) {
  const [, setState] = useState(false);

  return (
    <CriticalStylesWrapper>
      <Textarea value={data} readOnly />
      <CopyToClipboard text={data} onCopy={() => setState(true)}>
        <PrimaryButton>Copy to Clipboard</PrimaryButton>
      </CopyToClipboard>
    </CriticalStylesWrapper>
  );
}

export default CriticalStyles;
