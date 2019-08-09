import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Fields } from "../../Elements";
import { UserContext } from "../../Components/UserContext";

const Form = styled.form`
  input {
    display: block;
    margin: 1em 0;
    width: 100%;
    &:first-of-type {
      margin-top: 0;
    }
  }

  button {
    background-color: ${({ theme }) => theme.yellow};
    border-radius: 6px;
    font-weight: 600;
    padding: 0.75em 1em;
    margin: 0;
  }
`;

function LoginForm({ onSubmit }) {
  const { setAuthenticated, setUser } = useContext(UserContext);
  const [fields, setFields] = useState({
    email: "",
    password: ""
  });

  const handleChange = e =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    const { data } = await onSubmit({
      variables: {
        input: fields
      }
    });

    if (data && data.login) {
      const { ok, user } = data.login;
      if (!ok) {
        setFields({ email: "", password: "" });
      }

      setUser(user);
      setAuthenticated(ok);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
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

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSuccess: PropTypes.func
};

LoginForm.defaultProps = {
  onSubmit: () => null
};

export default LoginForm;
