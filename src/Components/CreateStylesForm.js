import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Fields, Icons } from "../Elements";
import { transparentize } from "polished";

const Form = styled.form`
  align-items: baseline;
  display: flex;
`;

const StyledSubmit = styled(Fields).attrs({
  type: "submit"
})`
  color: ${({ theme }) => theme.white};
  font-weight: 600;
  display: ${({ isShowing }) => (isShowing ? "inline-block" : "none")};
`;

const StyledUrlField = styled(Fields).attrs({
  type: "url",
  placeholder: "https://criticalstyles.com"
})`
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  width: 100%;
`;

const FieldGroup = styled.div`
  width: 100%;
`;

const Label = styled.label`
  display: block;
  color: ${({ theme }) => transparentize(0.75, theme.white)};
  font-size: 12px;
  font-weight: 600;
  margin: 1rem 0 10px;
  text-transform: uppercase;
`;

const DeviceIcon = styled(Icons)`
  fill: ${({ theme }) => transparentize(0.75, theme.white)};
`;

const IconField = styled.div`
  display: inline-block;
  
`;

const FieldLabel = styled.label`
  display: block;
  cursor: pointer;

  svg {
    transition: 125ms fill ease-out;
  }

  input[type="checkbox"] {
    display: none;

    &:checked + svg {
      fill: ${({ theme }) => theme.white};
    }
  }
`;

function CreateStylesForm({ onSubmit, onOutput }) {
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [viewport, setViewport] = useState([1300, 900]);

  const handleCheckbox = e => {
    const value = e.target.value;
    if (!["mobile", "tablet", "desktop"].includes(value)) {
      return;
    }

    const options = {
      mobile: [375, 300],
      tablet: [768, 500],
      desktop: [1300, 900]
    };

    setViewport(options[value]);
  };

  return (
    <Form
      onSubmit={async e => {
        e.preventDefault();
        const { data } = await onSubmit({
          variables: {
            input: {
              url,
              viewport
            }
          }
        });

        const {
          createCriticalStyle: { errors, stylesheet }
        } = data;

        if (!errors) {
          onOutput(stylesheet.styles);
        }
      }}
    >
      <FieldGroup>
        <StyledUrlField
          onChange={e => {
            const input = e.target;
            const value = e.target.value;

            setIsValid(input.checkValidity());
            setUrl(value);
          }}
          value={url}
          autoFocus
        />
        <Label>Options</Label>
        <IconField>
          <FieldLabel>
            <input
              type="checkbox"
              name="viewport"
              value="mobile"
              onChange={handleCheckbox}
              checked={viewport.length && viewport[0] === 375}
            />
            <DeviceIcon width={36} height={32} icon="mobile" />
          </FieldLabel>
        </IconField>

        <IconField>
          <FieldLabel>
            <input
              type="checkbox"
              name="viewport"
              value="tablet"
              onChange={handleCheckbox}
              checked={viewport.length && viewport[0] === 768}
            />
            <DeviceIcon width={36} height={32} icon="tablet" />
          </FieldLabel>
        </IconField>
        
        <IconField>
          <FieldLabel>
            <input
              type="checkbox"
              name="viewport"
              value="desktop"
              onChange={handleCheckbox}
              checked={viewport.length && viewport[0] === 1300}
            />
            <DeviceIcon width={38} height={36} icon="desktop" />
          </FieldLabel>
        </IconField>
      </FieldGroup>
      <StyledSubmit isShowing={isValid}>Submit</StyledSubmit>
    </Form>
  );
}

CreateStylesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onOutput: PropTypes.func.isRequired
};

CreateStylesForm.defaultProps = {
  onSubmit: () => null,
  onOutput: () => null
};

export default CreateStylesForm;
