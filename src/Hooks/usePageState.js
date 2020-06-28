import React from "react";
import { PageContext, PageDispatch } from "../contexts/PageContext";

export function usePageState() {
  const context = React.useContext(PageContext);
  if (context === undefined) {
    throw new Error("usePageState must be used within a PageContext provider");
  }
  return context;
}

export function usePageDispatch() {
  const context = React.useContext(PageDispatch);
  if (context === undefined) {
    throw new Error(
      "usePageDispatch must be used within a PageContext provider"
    );
  }
  return context;
}
