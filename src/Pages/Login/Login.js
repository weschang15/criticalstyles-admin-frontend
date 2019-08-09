import React, { useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { darken } from "polished";

import { LOGIN } from "../../Mutations";
import LoginForm from "./LoginForm";
import { PageSection, Spinner, PrimaryCard } from "../../Elements";
import { UserContext } from "../../Components/UserContext";

const LoginSection = styled(PageSection)`
  padding: 1.5em;
`;

const FormContainer = styled.div`
  margin: 0 auto;
  max-width: 640px;
`;

const FormWrapper = styled(PrimaryCard)`
  background-color: #fff;
  border: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  @media only screen and (min-width: 22.75em) {
    border-top-right-radius: 6px;
  }
`;

const FormTabs = styled.ul`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  display: inline-flex;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
  z-index: 3;
`;

const FormTab = styled.li`
  background-color: #fff;
  color: ${({ theme }) => darken(0.15, theme.gray)};
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  padding: 0.75rem 1rem;
  text-transform: uppercase;
`;

function Login() {
  const { authenticated } = useContext(UserContext);
  const [login, { loading }] = useMutation(LOGIN);

  return authenticated ? (
    <Redirect to="/dashboard" />
  ) : (
    <LoginSection bgColor="rgba(59, 53, 97, 1)">
      {loading ? (
        <Spinner />
      ) : (
        <FormContainer>
          <FormTabs>
            <FormTab>My account</FormTab>
            <FormTab>Register a new account</FormTab>
          </FormTabs>
          <FormWrapper>
            <LoginForm onSubmit={login} />
          </FormWrapper>
        </FormContainer>
      )}
    </LoginSection>
  );
}

export default Login;
