import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { from, split } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

const { REACT_APP_GRAPHQL_SERVER, REACT_APP_WEBSOCKET_SERVER } = process.env;

const wsLink = new WebSocketLink({
  uri: REACT_APP_WEBSOCKET_SERVER,
  options: {
    reconnect: true
  }
});

const httpLink = new HttpLink({
  uri: REACT_APP_GRAPHQL_SERVER,
  credentials: "include"
});

const transportLinks = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const apolloClient = new ApolloClient({
  link: from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message ${message}, Location: ${JSON.stringify(
              locations,
              null,
              2
            )}, Path: ${path}`
          )
        );
      }

      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
      }
    }),
    transportLinks
  ]),
  cache: new InMemoryCache()
});
