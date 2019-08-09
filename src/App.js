import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import theme from "./config/theme";
import PublicRoutes from "./Components/routes/PublicRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
