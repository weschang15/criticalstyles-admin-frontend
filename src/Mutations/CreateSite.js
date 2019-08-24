import gql from "graphql-tag";

export default gql`
  mutation CreateSite($input: NewSiteInput!) {
    createSite(input: $input) {
      ok
      site {
        name
      }
      errors {
        path
        message
      }
    }
  }
`;
