import gql from "graphql-tag";

export default gql`
  mutation SwitchAccount($input: SwitchAccountInput!) {
    switchAccount(input: $input) {
      ok
      errors {
        path
        message
      }
    }
  }
`;
