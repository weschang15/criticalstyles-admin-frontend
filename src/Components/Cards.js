import styled from "styled-components";
import { transparentize, lighten } from "polished";

export const PrimaryCard = styled.div`
  border: 1px solid ${({ theme }) => lighten(0.13, theme.gray)};
  border-radius: 12px;
  box-shadow: 2px 6px 28px -2px ${({ theme }) => transparentize(0.3, theme.gray)};
  padding: 1.25em;
  max-width: 480px;
  width: 100%;
`;
