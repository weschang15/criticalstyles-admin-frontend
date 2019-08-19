import React from "react";
import styled from "styled-components";

const Section = styled.section`
  grid-area: content;
  grid-row: auto / auto;
`;

const Title = styled.h1`
  font-size: 1.25em;
  margin: 0;
`;

function Dashboard() {
  return (
    <>
      <Section>
        <p>
          Hey, take a look at the earthlings. Goodbye! This thing comes fully
          loaded. AM/FM radio, reclining bucket seats, and... power windows. God
          help us, we're in the hands of engineers. I gave it a cold? I gave it
          a virus. A computer virus. You're a very talented young man, with your
          own clever thoughts and ideas. Do you need a manager? They're using
          our own satellites against us. And the clock is ticking. Do you have
          any idea how long it takes those cups to decompose. Hey, you know how
          I'm, like, always trying to save the planet? Here's my chance. Jaguar
          shark! So tell me - does it really exist? So you two dig up, dig up
          dinosaurs? I gave it a cold? I gave it a virus. A computer virus. Did
          he just throw my cat out of the window? Yeah, but your scientists were
          so preoccupied with whether or not they could, they didn't stop to
          think if they should.
        </p>
      </Section>
      <Section>
        <Title>Me</Title>
        <p>
          Hey, you know how I'm, like, always trying to save the planet? Here's
          my chance. They're using our own satellites against us. And the clock
          is ticking. Must go faster... go, go, go, go, go! Jaguar shark! So
          tell me - does it really exist? Hey, take a look at the earthlings.
          Goodbye! Is this my espresso machine? Wh-what is-h-how did you get my
          espresso machine? I was part of something special. Eventually, you do
          plan to have dinosaurs on your dinosaur tour, right? Checkmate...
          Checkmate... You're a very talented young man, with your own clever
          thoughts and ideas. Do you need a manager?
        </p>
      </Section>
    </>
  );
}

export default Dashboard;
