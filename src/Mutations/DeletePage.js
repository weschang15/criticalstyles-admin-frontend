import gql from "graphql-tag";

export default gql`
  mutation DeletePage($input: DeletePageInput!) {
    deletePage(input: $input) {
      ok
      errors {
        path
        message
      }
    }
  }
`;
