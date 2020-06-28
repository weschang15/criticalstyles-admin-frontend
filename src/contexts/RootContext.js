import React from "react";
import { AuthProvider } from "./AuthContext";

export function RootContext({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
