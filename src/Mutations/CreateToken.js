import gql from "graphql-tag";

export default gql`
  mutation CreateToken {
    createToken {
      ok
      token {
        secret
      }
      errors {
        path
        message
      }
    }
  }
`;
