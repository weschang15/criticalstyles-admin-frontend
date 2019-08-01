import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./config/theme";
import { PageSection } from "./Elements";
import CreateStyles from "./Components/CreateStyles";
import Hero from "./Components/Hero";

const Wrapper = styled.main`
  position: relative;
`;

const Container = styled(PageSection)`
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Hero />
        <Container>
          <CreateStyles />
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
