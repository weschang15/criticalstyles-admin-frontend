import React, { createContext, useReducer } from "react";
import { authReducer, INITIAL_AUTH_STATE } from "../reducers";

export const AuthContext = createContext({});
export const AuthDispatch = createContext({});

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, INITIAL_AUTH_STATE);

  return (
    <AuthContext.Provider value={state}>
      <AuthDispatch.Provider value={dispatch}>{children}</AuthDispatch.Provider>
    </AuthContext.Provider>
  );
}
