import gql from "graphql-tag";

export const GET_PAGES = gql`
  query GetPages($input: GetPagesInput!) {
    pages(input: $input) {
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
        name
        url
        createdAt
        stylesheet {
          styles
          stats {
            originalSize
            minifiedSize
          }
        }
      }
    }
  }
`;
