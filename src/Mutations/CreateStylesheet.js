import gql from "graphql-tag";

export default gql`
  mutation CreateStylesheet($input: NewStylesheetInput!) {
    createStylesheet(input: $input) {
      ok
      stylesheet {
        styles
        stats {
          minifiedSize
          originalSize
        }
      }
      errors {
        path
        message
      }
    }
  }
`;
