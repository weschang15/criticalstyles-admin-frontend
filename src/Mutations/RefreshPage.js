import gql from "graphql-tag";

export default gql`
  mutation RefreshPage($input: RefreshPageInput!) {
    refreshPage(input: $input) {
      ok
      errors {
        path
        message
      }
    }
  }
`;
