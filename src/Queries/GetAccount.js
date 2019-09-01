import gql from "graphql-tag";

export const GET_ACCOUNT = gql`
  query GetAccount {
    getAccount {
      account {
        summary {
          sites
          users
        }
      }
    }
  }
`;
