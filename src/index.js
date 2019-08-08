import React from "react";
import { hydrate, render } from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { apolloClient } from "./config/apolloClient";
import { UserProvider } from "./Components/UserContext";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

import "normalize.css";
import "./index.css";

const root = document.getElementById("root");
if (root.hasChildNodes()) {
  hydrate(
    <ApolloProvider client={apolloClient}>
      <UserProvider>
        <App />
      </UserProvider>
    </ApolloProvider>,
    root
  );
} else {
  render(
    <ApolloProvider client={apolloClient}>
      <UserProvider>
        <App />
      </UserProvider>
    </ApolloProvider>,
    root
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
