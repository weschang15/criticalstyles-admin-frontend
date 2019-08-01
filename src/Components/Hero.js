import React from "react";
import styled from "styled-components";
import { darken } from "polished";

const Container = styled.section`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

const Title = styled.h1`
  color: ${({ theme }) => darken(0.1, theme.white)};
  font-size: 12em;
  font-weight: 900;
  line-height: 0.8;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  word-break: break-word;
`;

const Part = styled.span``;

function Hero() {
  return (
    <Container>
      <Title>
        <Part>Critical</Part> <Part>Styles</Part>
      </Title>
    </Container>
  );
}

export default Hero;
