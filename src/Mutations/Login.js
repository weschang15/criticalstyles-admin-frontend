import { gql } from "apollo-boost";

export default gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ok
      errors {
        path
        message
      }
      user {
        firstName
        lastName
        sites {
          name
          url
        }
        email
      }
    }
  }
`;
