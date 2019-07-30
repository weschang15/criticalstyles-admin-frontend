import React, { useState } from "react";
import { Mutation } from "react-apollo";
import styled, { ThemeProvider } from "styled-components";
import theme from "./config/theme";
import { CREATE_CRITICAL_STYLE } from "./Mutations";
import { PageSection } from "./Components/Sections";
import { PrimaryCard } from "./Components/Cards";
import { Fields } from "./Components/Fields";

const Container = styled(PageSection)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const Form = styled.form`
  align-items: baseline;
  display: flex;
`;

const StyledUrl = styled(Fields).attrs({
  type: "url",
  placeholder: "https://criticalstyles.com"
})`
  flex-grow: 1;
`;

function App() {
  const [url, setUrl] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Mutation mutation={CREATE_CRITICAL_STYLE}>
          {(createCriticalStyle, { data }) => (
            <PrimaryCard>
              <Form
                onSubmit={e => {
                  e.preventDefault();
                  createCriticalStyle({
                    variables: { url }
                  });
                }}
              >
                <StyledUrl onChange={e => setUrl(e.target.value)} value={url} />
                <Fields type="submit">Submit</Fields>
              </Form>
            </PrimaryCard>
          )}
        </Mutation>
      </Container>
    </ThemeProvider>
  );
}

export default App;
