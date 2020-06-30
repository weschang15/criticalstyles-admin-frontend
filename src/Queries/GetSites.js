import gql from "graphql-tag";

export const GET_SITES = gql`
  query GetSites($input: Filter!) {
    sites(input: $input) {
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
        slug
        name
        createdAt
      }
    }
  }
`;
