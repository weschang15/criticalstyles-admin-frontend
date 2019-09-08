import gql from "graphql-tag";

export default gql`
  mutation CreateUncategorizedStylesheet(
    $input: NewUncategorizedStylesheetInput!
  ) {
    createUncategorizedStylesheet(input: $input) {
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
