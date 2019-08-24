import gql from "graphql-tag";

export default gql`
  mutation CreatePage($input: NewPageInput!) {
    createPage(input: $input) {
      ok
      errors {
        path
        message
      }
      page {
        _id
        name
        url
        stylesheet {
          styles
          stats {
            minifiedSize
            originalSize
          }
        }
      }
    }
  }
`;
