import React, { useContext, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import styled from "styled-components";

import { Fields, Spinner } from "../../Elements";
import { CREATE_ACCOUNT } from "../../Mutations";
import { AuthDispatch } from "../../contexts/AuthContext";
import { REGISTER_USER } from "../../actions";

const Form = styled.form`
  label {
    color: ${({ theme }) => theme.darkGray};
    font-size: 14px;
    font-weight: 600;
  }

  input {
    display: block;
    margin: 0 0 1em;
    width: 100%;
  }

  button {
    background-color: ${({ theme }) => theme.yellow};
    border-radius: 6px;
    font-weight: 600;
    padding: 0.75em 1em;
    margin: 0;
  }
`;

const INITIAL_FIELDS = {
  name: "",
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

function RegisterForm() {
  const dispatch = useContext(AuthDispatch);
  const [errors, setErrors] = useState([]);
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT);

  const handleChange = e =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    const { name, ...rest } = fields;

    const { data } = await createAccount({
      variables: {
        input: {
          name,
          user: rest
        }
      }
    });

    if (data && data.createAccount) {
      const { ok, account, owner, errors } = data.createAccount;
      if (!ok) {
        return setErrors(errors);
      }

      setFields(INITIAL_FIELDS);
      dispatch({
        type: REGISTER_USER,
        payload: {
          accountId: account._id,
          accountName: account.name,
          authenticated: ok,
          user: owner
        }
      });
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <Form onSubmit={handleSubmit}>
      {errors.map((error, i) => (
        <strong key={i}>{error.message}</strong>
      ))}
      <label>Organization name</label>
      <Fields
        type="text"
        placeholder="WallyDoe"
        name="name"
        value={fields.name}
        onChange={handleChange}
        autoFocus
        required
      />
      <label>First name</label>
      <Fields
        type="text"
        placeholder="Jane"
        name="firstName"
        value={fields.firstName}
        onChange={handleChange}
        required
      />
      <label>Last name</label>
      <Fields
        type="text"
        placeholder="Doe"
        name="lastName"
        value={fields.lastName}
        onChange={handleChange}
        required
      />
      <label>Email</label>
      <Fields
        type="email"
        placeholder="jane@doe.com"
        name="email"
        value={fields.email}
        onChange={handleChange}
        autoComplete="username"
        required
      />
      <label>Password</label>
      <Fields
        type="password"
        placeholder="password"
        name="password"
        value={fields.password}
        onChange={handleChange}
        autoComplete="current-password"
        required
      />
      <Fields type="submit">Sign Up</Fields>
    </Form>
  );
}

export default RegisterForm;
