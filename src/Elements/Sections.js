import { darken } from "polished";
import styled from "styled-components";

export const PageSection = styled.section`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};
  position: relative;
`;

export const GridSection = styled.section`
  margin-bottom: 4em;
`;

export const Section = styled.section``;

export const SectionTitle = styled.h1`
  color: ${({ theme }) => darken(0.2, theme.gray)};
  font-size: 1.777em;
  font-weight: 900;
`;
