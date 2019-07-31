import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Fields } from "../Elements";

const Form = styled.form`
  align-items: baseline;
  display: flex;
`;

const StyledUrlField = styled(Fields).attrs({
  type: "url",
  placeholder: "https://criticalstyles.com"
})`
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  flex-grow: 1;
`;

const StyledSubmit = styled(Fields).attrs({
  type: "submit"
})`
  color: ${({ theme }) => theme.white};
  font-weight: 600;
  flex: 1;
`;

function CreateStylesForm({ onSubmit, handleUpdate }) {
  const [url, setUrl] = useState("");

  return (
    <Form
      onSubmit={async e => {
        e.preventDefault();

        const { data } = await onSubmit({
          variables: {
            input: {
              url
            }
          }
        });

        const {
          createCriticalStyle: { errors, stylesheet }
        } = data;

        if (!errors) {
          handleUpdate(stylesheet.styles);
        }
      }}
    >
      <StyledUrlField
        onChange={e => setUrl(e.target.value)}
        value={url}
        autoFocus
      />
      <StyledSubmit>Submit</StyledSubmit>
    </Form>
  );
}

CreateStylesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired
};

CreateStylesForm.defaultProps = {
  onSubmit: () => null,
  handleUpdate: () => null
};

export default CreateStylesForm;
