import React from "react";
import styled from "styled-components";
import { PageSection } from "../../Elements";

const HeroSection = styled(PageSection)`
  background-color: ${({ theme }) => theme.purple};
  padding: 1.5em;
  text-align: center;
  color: ${({ theme }) => theme.white};
  z-index: 1;
`;

const Headline = styled.h1`
  @media only screen and (min-width: 25em) {
    margin-bottom: 0.25em;
  }
`;

const Screenshot = styled.figure`
  display: inline-block;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  img {
    display: block;
  }

  @media only screen and (min-width: 25em) {
    margin-bottom: -15vh;
  }
`;

const ProductSection = styled(PageSection)`
  padding: 1.5em;
  text-align: center;

  h2 {
    font-weight: 600;
    span {
      font-size: 0.25em;
    }
  }

  @media only screen and (min-width: 25em) {
    padding-top: 15vh;
  }

  @media only screen and (min-width: 64em) {
    padding-top: 18vh;
  }
`;

function Home() {
  return (
    <>
      <HeroSection>
        <Headline>Critical CSS in 1 Click</Headline>
        <p>Faster page loads, increased conversions, and improved SEO.</p>
        <Screenshot>
          <img
            src="https://via.placeholder.com/860x620.png"
            alt="placeholder"
          />
        </Screenshot>
      </HeroSection>
      <ProductSection>
        <h2>
          Better Performance, Better Experience{" "}
          <span role="img" aria-label="don't take it the wrong way">
            😉
          </span>
        </h2>
        <p>
          Don't let poor page performance impact your SEO scores, or user
          experience. Critical Styles can improve initial page render, allowing
          your users to consume content quicker.
        </p>
      </ProductSection>
    </>
  );
}

export default Home;
