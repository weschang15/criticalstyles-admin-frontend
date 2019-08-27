import { ApolloProvider } from "@apollo/react-hooks";
import "normalize.css";
import React from "react";
import { render } from "react-dom";
import App from "./App";
import { apolloClient } from "./config/apolloClient";
import { RootContext } from "./contexts/RootContext";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

render(
  <ApolloProvider client={apolloClient}>
    <RootContext>
      <App />
    </RootContext>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
