import ApolloClient, { InMemoryCache } from "apollo-boost";
const { GRAPHQL_SERVER } = process.env;

export const apolloClient = new ApolloClient({
  uri: GRAPHQL_SERVER,
  cache: new InMemoryCache(),
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  }
});
