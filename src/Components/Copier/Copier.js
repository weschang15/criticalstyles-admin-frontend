import PropTypes from "prop-types";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import { Icons, PrimaryButton } from "../../Elements";

const ButtonWwrapper = styled.div`
  position: relative;
  button {
    font-size: 14px;
    svg {
      display: inline-block;
      margin-right: 0.5em;
      vertical-align: text-bottom;
    }
  }
`;

function Copier({ copyText, bgColor, textColor }) {
  const [copied, copy] = useState(false);
  return (
    <ButtonWwrapper>
      <CopyToClipboard text={copyText} onCopy={() => copy(true)}>
        <PrimaryButton bgColor={bgColor} textColor={textColor}>
          <Icons
            icon="clipboard"
            width="18px"
            style={{ display: "inline-block" }}
            fill="currentColor"
          />
          {copied ? "Success!" : "Copy"}
        </PrimaryButton>
      </CopyToClipboard>
    </ButtonWwrapper>
  );
}

Copier.propTypes = {
  copyText: PropTypes.string.isRequired
};

export default Copier;
