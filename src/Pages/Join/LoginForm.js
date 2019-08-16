import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";

import { LOGIN } from "../../Mutations";
import { Fields, Spinner } from "../../Elements";
import { UserContext } from "../../Components/UserContext";
import { darken } from "polished";

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

function LoginForm() {
  const { setAuthenticated, setUser } = useContext(UserContext);
  const [errors, setErrors] = useState([]);
  const [fields, setFields] = useState({ email: "", password: "" });

  const [login, { loading }] = useMutation(LOGIN);

  const handleChange = e =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    const { data } = await login({
      variables: {
        input: fields
      }
    });

    if (data && data.login) {
      const { ok, user, errors } = data.login;
      if (!ok) {
        return setErrors(errors);
      }

      setFields({ email: "", password: "" });
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
      <label>Email</label>
      <Fields
        type="email"
        placeholder="jane@doe.com"
        name="email"
        value={fields.email}
        onChange={handleChange}
        autoComplete="username"
        autoFocus
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
      <Fields type="submit">Login</Fields>
    </Form>
  );
}

export default LoginForm;