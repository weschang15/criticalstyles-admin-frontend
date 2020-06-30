import gql from "graphql-tag";

export const GET_TOKENS = gql`
  query GetTokens($input: GetTokensInput!) {
    tokens(input: $input) {
      ok
      errors {
        path
        message
      }
      queryInfo {
        total
        totalPages
        hasNextPage
      }
      documents {
        _id
        secret
        createdAt
      }
    }
  }
`;
