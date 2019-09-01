import styled from "styled-components";

export const PageSection = styled.section`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};
  position: relative;
`;

export const GridSection = styled.section`
  margin-bottom: 4em;
`;
