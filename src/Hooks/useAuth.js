import React from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthContext provider");
  }
  return context;
}
