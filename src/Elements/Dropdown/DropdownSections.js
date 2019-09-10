import { darken, transparentize } from "polished";
import styled from "styled-components";

export const Section = styled.section`
  padding: 10px;
  p {
    color: ${({ theme }) => darken(0.25, theme.gray)};
    font-size: 14px;
    font-weight: 600;
    margin: 0;
  }
`;

export const ProfileSection = styled(Section)`
  background-color: ${({ theme }) => transparentize(0.75, theme.gray)};
  padding-bottom: 0.5em;
  padding-top: 0.5em;
  p {
    color: ${({ theme }) => darken(0.5, theme.gray)};
  }
`;
