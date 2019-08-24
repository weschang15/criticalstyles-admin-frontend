import gql from "graphql-tag";

export const GET_ACCOUNT = gql`
  query GetAccount($input: AccountInput!, $sf: Filter) {
    getAccount(input: $input) {
      account {
        sites(sf: $sf) {
          _id
          slug
          name
          url
        }
        name
      }
    }
  }
`;
