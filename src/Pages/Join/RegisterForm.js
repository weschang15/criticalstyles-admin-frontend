import React, { useContext, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import styled from "styled-components";
import { darken } from "polished";

import { Fields, Spinner } from "../../Elements";
import { UserContext } from "../../Components/UserContext";
import { CREATE_USER } from "../../Mutations";

const Form = styled.form`
  label {
    color: ${({ theme }) => darken(0.5, theme.gray)};
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

function RegisterForm() {
  const { setAuthenticated, setUser } = useContext(UserContext);
  const [errors, setErrors] = useState([]);

  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [createUser, { loading }] = useMutation(CREATE_USER);

  const handleChange = e =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    const { data } = await createUser({
      variables: {
        input: fields
      }
    });

    if (data && data.createUser) {
      const { ok, user, errors } = data.createUser;
      if (!ok) {
        return setErrors(errors);
      }

      setFields({ firstName: "", lastName: "", email: "", password: "" });
      setUser(user);
      setAuthenticated(ok);
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <Form onSubmit={handleSubmit}>
      {errors.map((error, i) => (
        <strong key={i}>{error.message}</strong>
      ))}
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
