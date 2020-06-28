import React, { createContext, useReducer } from "react";
import { INITIAL_PAGE_STATE, pageReducer } from "../reducers";

export const PageContext = createContext({});
export const PageDispatch = createContext({});

export function PageProvider({ children }) {
  const [state, dispatch] = useReducer(pageReducer, INITIAL_PAGE_STATE);

  return (
    <PageContext.Provider value={state}>
      <PageDispatch.Provider value={dispatch}>{children}</PageDispatch.Provider>
    </PageContext.Provider>
  );
}
