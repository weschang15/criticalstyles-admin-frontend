import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import cssbeautify from "cssbeautify";
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

function CriticalStyles({ data, prevData, updateData }) {
  const [copied, setCopied] = useState(false);
  const [isFormated, setIsFormated] = useState(false);

  return (
    <CriticalStylesWrapper>
      <Textarea value={data} readOnly />
      <Actions>
        <LinkButton
          onClick={() => {
            updateData(
              !isFormated
                ? cssbeautify(data, {
                    indent: "  ",
                    openbrace: "separate-line"
                  })
                : prevData
            );

            setIsFormated(currVal => !currVal);
          }}
        >
          {isFormated ? "Minify CSS" : "Format CSS"}
        </LinkButton>
        <CopyToClipboard text={data} onCopy={() => setCopied(true)}>
          <PrimaryButton>
            {copied ? "Copied!" : "Copy to Clipboard"}
          </PrimaryButton>
        </CopyToClipboard>
      </Actions>
    </CriticalStylesWrapper>
  );
}

export default CriticalStyles;
