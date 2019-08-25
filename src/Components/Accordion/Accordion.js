import React, { useState } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSpring, animated } from "react-spring";
import { FieldLabel, PrimaryButton, Icons } from "../../Elements";

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
  button {
    font-size: 14px;
    svg {
      display: inline-block;
      margin-right: 0.5em;
      vertical-align: text-bottom;
    }
  }
`;

const Labels = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const Sublabel = styled(FieldLabel)`
  color: ${({ theme }) => theme.blue};
  display: block;
  cursor: auto;
`;

function Accordion({ stylesheet }) {
  const { stats } = stylesheet;
  const [copied, setCopied] = useState(false);
  const [toggled, toggle] = useState(false);
  const styles = useSpring({
    from: { height: 120 },
    to: { height: toggled ? 480 : 120 }
  });

  return (
    <>
      <Labels>
        <FieldLabel htmlFor="css" onClick={() => toggle(!toggled)}>
          Critical CSS
        </FieldLabel>
        <Sublabel>{stats.minifiedSize * 0.001}KB Minified</Sublabel>
      </Labels>
      <animated.div
        style={{ marginTop: "0.5em", position: "relative", ...styles }}
      >
        <CollapsibleTextarea
          id="css"
          value={stylesheet.styles}
          readOnly
        ></CollapsibleTextarea>
      </animated.div>
      <Actions>
        <CopyToClipboard
          text={stylesheet.styles}
          onCopy={() => setCopied(true)}
        >
          <PrimaryButton>
            <Icons
              icon="clipboard"
              width="18px"
              style={{ display: "inline-block" }}
              fill="currentColor"
            />
            Copy
          </PrimaryButton>
        </CopyToClipboard>
      </Actions>
    </>
  );
}

export default Accordion;
