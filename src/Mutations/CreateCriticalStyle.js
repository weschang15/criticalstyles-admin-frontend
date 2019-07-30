import gql from "graphql-tag";

export default gql`
  mutation CreateCriticalStyle($input: CriticalStyleInput!) {
    createCriticalStyle(input: $input) {
      stylesheet {
        styles
      }
      errors {
        path
        message
      }
    }
  }
`;
