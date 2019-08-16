import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import PublicRoutes from "./Components/routes/PublicRoutes";
import theme from "./config/theme";
import { useQuery } from "react-apollo";
import { AuthDispatch } from "./contexts/AuthContext";
import { LOGIN_USER } from "./actions";
import { CURRENT_USER } from "./Queries";

function App() {
  const dispatch = useContext(AuthDispatch);
  const { data, loading } = useQuery(CURRENT_USER, {
    onCompleted: () => {
      if (data && data.currentUser) {
        const { user, ok: authenticated } = data.currentUser;
        const payload = authenticated
          ? {
              user,
              authenticated,
              accountId: user.accounts[0]._id
            }
          : {};

        dispatch({ type: LOGIN_USER, payload });
      }
    }
  });

  if (loading) {
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
