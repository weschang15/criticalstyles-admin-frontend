import gql from "graphql-tag";

export default gql`
  mutation CreateAccount($input: NewAccountInput!) {
    createAccount(input: $input) {
      ok
      errors {
        path
        message
      }
      account {
        _id
        name
        owner {
          firstName
          lastName
          email
        }
      }
    }
  }
`;
