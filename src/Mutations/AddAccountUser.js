import gql from "graphql-tag";

export default gql`
  mutation AddAccountUser($input: NewAccountUserInput!) {
    addUser(input: $input) {
      ok
      errors {
        path
        message
      }
    }
  }
`;
