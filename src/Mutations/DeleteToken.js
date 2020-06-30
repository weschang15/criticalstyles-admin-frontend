import gql from "graphql-tag";

export default gql`
  mutation DeleteToken($input: DeleteTokenInput!) {
    deleteToken(input: $input) {
      ok
      errors {
        path
        message
      }
    }
  }
`;
