import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./config/theme";
import { PageSection } from "./Elements";
import CreateStyles from "./Components/CreateStyles";

const Container = styled(PageSection)`
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CreateStyles />
      </Container>
    </ThemeProvider>
  );
}

export default App;
