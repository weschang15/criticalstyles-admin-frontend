import gql from "graphql-tag";

export default gql`
  mutation CreateUser($input: NewUserInput!) {
    createUser(input: $input) {
      ok
      errors {
        path
        message
      }
      user {
        firstName
        lastName
        email
      }
    }
  }
`;
