import React, { useState } from "react";
import { useMutation } from "react-apollo";
import styled from "styled-components";
import { FieldLabel, Fields, Icons, Spinner } from "../../Elements";
import { CREATE_STYLESHEET } from "../../Mutations";
import MoneyMakerHeader from "./MoneyMakerHeader";
import MoneyMakerResults from "./MoneyMakerResults";

const INITIAL_FIELDS = {
  url: ""
};

const Form = styled.form`
  input[type="url"] {
    background-color: ${({ theme }) => theme.gray};
    box-shadow: none;
    margin: 0 0 1em;
    width: 100%;
  }
`;

function MoneyMaker() {
  const [errors, setErrors] = useState([]);
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [stylesheet, setStylesheet] = useState(null);
  const [createStylesheet, { loading }] = useMutation(CREATE_STYLESHEET);

  const handleChange = e =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await createStylesheet({
      variables: {
        input: { ...fields }
      }
    });

    if (data && data.createStylesheet) {
      const {
        createStylesheet: { ok, errors, stylesheet }
      } = data;
      if (!ok) {
        return setErrors(errors);
      }

      setFields(INITIAL_FIELDS);
      setStylesheet(stylesheet);
    }
  };

  return (
    <div>
      <MoneyMakerHeader>
        <h3>Generate CCSS</h3>
        <p>
          <Icons icon="information" width="17px" fill="currentColor" />
          We'll only save your results for 30 seconds!
        </p>
      </MoneyMakerHeader>
      {errors.length > 0 && (
        <ul>
          {errors.map(({ message }, i) => (
            <li key={i}>{message}</li>
          ))}
        </ul>
      )}
      <Form onSubmit={handleSubmit}>
        <FieldLabel htmlFor="url">Site Name</FieldLabel>
        <Fields
          type="url"
          id="url"
          placeholder="https://criticalstyles.com"
          onChange={handleChange}
          value={fields.url}
          name="url"
          required
        />
        <Fields type="submit">{loading ? <Spinner /> : "Generate CCSS"}</Fields>
      </Form>
      {stylesheet && (
        <>
          <MoneyMakerHeader>
            <h4>Results</h4>
          </MoneyMakerHeader>
          <MoneyMakerResults ccss={stylesheet} />
        </>
      )}
    </div>
  );
}

export default MoneyMaker;
