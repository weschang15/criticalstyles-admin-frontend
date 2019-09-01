import gql from "graphql-tag";

export const GET_SITES = gql`
  query GetSites($filter: Filter) {
    sites(filter: $filter) {
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
