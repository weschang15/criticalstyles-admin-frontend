import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import PublicRoutes from "./Components/routes/PublicRoutes";
import theme from "./config/theme";
import { useQuery } from "react-apollo";
import { AuthDispatch } from "./contexts/AuthContext";
import { LOGIN_USER, IS_FETCHING } from "./actions";
import { AUTH } from "./Queries";

function App() {
  const dispatch = useContext(AuthDispatch);
  const { data, loading } = useQuery(AUTH, {
    onCompleted: () => {
      if (data && data.auth) {
        const { auth, ok } = data.auth;
        if (ok) {
          const payload = {
            user: auth.user,
            authenticated: ok,
            accountId: auth.account._id,
            accountName: auth.account.name
          };

          dispatch({ type: LOGIN_USER, payload });
        }
        dispatch({ type: IS_FETCHING, payload: false });
      }
    }
  });

  if (loading) {
    dispatch({ type: IS_FETCHING, payload: true });
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
