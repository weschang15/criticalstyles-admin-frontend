import React, { useContext, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import styled from "styled-components";

import { Fields, Modal, Spinner } from "../../Elements";
import { CREATE_SITE } from "../../Mutations";
import { AuthContext } from "../../contexts/AuthContext";

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

const INITIAL_FIELDS = {
  name: "",
  url: ""
};

function AddSiteModal({ on, toggle }) {
  const { accountId } = useContext(AuthContext);
  const [errors, setErrors] = useState([]);
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [createSite, { loading }] = useMutation(CREATE_SITE);

  const handleChange = e =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await createSite({
      variables: {
        input: { ...fields, accountId }
      }
    });

    console.log(data);

    if (data && data.createSite) {
      const {
        createSite: { ok, errors }
      } = data;
      if (!ok) {
        return setErrors(errors);
      }

      setFields(INITIAL_FIELDS);
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

export default AddSiteModal;
