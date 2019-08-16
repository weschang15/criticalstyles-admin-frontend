import React, { useReducer } from "react";
import { AuthContextProvider, AuthDispatchProvider } from "./AuthContext";
import { authReducer, INITIAL_STATE } from "../reducers";

export function RootContext({ children }) {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);
  return (
    <AuthDispatchProvider value={dispatch}>
      <AuthContextProvider value={state}>{children}</AuthContextProvider>
    </AuthDispatchProvider>
  );
}
