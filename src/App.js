import React, { useContext } from "react";
import { useQuery } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { IS_FETCHING, LOGIN_USER } from "./actions";
import Routes from "./Components/routes/Routes";
import theme from "./config/theme";
import { AuthDispatch } from "./contexts/AuthContext";
import { AUTH } from "./Queries";

function App() {
  const dispatch = useContext(AuthDispatch);
  const { data, loading } = useQuery(AUTH);

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

  if (loading) {
    dispatch({ type: IS_FETCHING, payload: true });
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
