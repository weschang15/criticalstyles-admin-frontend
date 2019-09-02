import gql from "graphql-tag";

export default gql`
  mutation DeleteSite($input: DeleteSiteInput!) {
    deleteSite(input: $input) {
      ok
      errors {
        path
        message
      }
    }
  }
`;
