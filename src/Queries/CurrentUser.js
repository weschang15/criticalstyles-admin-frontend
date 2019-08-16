import gql from "graphql-tag";

export const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      ok
      errors {
        path
        message
      }
      user {
        _id
        firstName
        lastName
        email
        accounts {
          _id
        }
      }
    }
  }
`;
