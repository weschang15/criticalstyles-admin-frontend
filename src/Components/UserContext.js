import React, { useState, createContext, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export const UserContext = createContext();

export function UserProvider(props = {}) {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  const { data } = useQuery(gql`
    query CurrentUser {
      currentUser {
        ok
        errors {
          path
          message
        }
        user {
          firstName
          lastName
          email
        }
      }
    }
  `);

  useEffect(() => {
    if (data && data.currentUser) {
      const { currentUser } = data;
      setUser(currentUser.user);
      setAuthenticated(currentUser.ok);
    }
  }, [data]);

  const INITIAL_STATE = {
    authenticated: authenticated || false,
    setAuthenticated,
    user: user || null,
    setUser
  };

  return (
    <UserContext.Provider value={INITIAL_STATE}>
      {props.children}
    </UserContext.Provider>
  );
}
