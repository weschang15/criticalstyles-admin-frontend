import gql from "graphql-tag";

export const GET_SITE_PAGES = gql`
  query GetSitePages($input: GetSiteInput!) {
    getSite(input: $input) {
      ok
      errors {
        path
        message
      }
      site {
        pages {
          _id
          name
          url
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
  }
`;
