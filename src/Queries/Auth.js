import gql from "graphql-tag";

export const AUTH = gql`
  query Auth {
    auth {
      ok
      errors {
        path
        message
      }
      auth {
        account {
          _id
          name
        }
        user {
          _id
          firstName
          lastName
          email
        }
      }
    }
  }
`;
