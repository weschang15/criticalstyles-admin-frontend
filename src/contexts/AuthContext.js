import React, { createContext } from "react";

export const AuthContext = createContext({});
export const AuthDispatch = createContext({});

export function AuthContextProvider({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function AuthDispatchProvider({ children, value }) {
  return (
    <AuthDispatch.Provider value={value}>{children}</AuthDispatch.Provider>
  );
}
