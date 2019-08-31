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
          summary {
            sites
            users
          }
        }
        user {
          _id
          firstName
          lastName
          email
          accounts {
            _id
            name
          }
        }
      }
    }
  }
`;
