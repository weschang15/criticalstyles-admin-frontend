import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import styled from "styled-components";

import { Fields, Modal, Spinner } from "../../Elements";
import { CREATE_SITE } from "../../Mutations";

const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  input[type="text"],
  input[type="url"] {
    flex: 1;
  }

  button {
    margin: 0;
  }
`;

function AddSite({ on, toggle }) {
  const [fields, setFields] = useState({
    name: "",
    url: ""
  });

  const [errors, setErrors] = useState([]);
  const [createSite, { loading }] = useMutation(CREATE_SITE);

  const handleChange = e =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await createSite({
      variables: {
        input: fields
      }
    });

    if (data && data.createSite) {
      const {
        createSite: { ok, errors }
      } = data;
      if (!ok) {
        setErrors(errors);
      }

      setFields({ name: "", url: "" });
    }
  };

  return (
    <Modal toggle={toggle} on={on}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ul>
            {errors.map(({ message }, i) => (
              <li key={i}>{message}</li>
            ))}
          </ul>
          <Form onSubmit={handleSubmit}>
            <Fields
              type="text"
              placeholder="Corporate website"
              onChange={handleChange}
              value={fields.name}
              name="name"
              required
            />
            <Fields
              type="url"
              placeholder="https://criticalstyles.com"
              onChange={handleChange}
              value={fields.url}
              name="url"
              required
            />
            <Fields type="submit">Submit</Fields>
          </Form>
        </>
      )}
    </Modal>
  );
}

export default AddSite;
