import styled from "styled-components";
import { transparentize, lighten } from "polished";

export const PrimaryCard = styled.div`
  background-color: ${({ theme }) => theme.black};
  border: 1px solid ${({ theme }) => lighten(0.13, theme.black)};
  border-radius: 12px;
  box-shadow: 0 6px 26px -2px ${({ theme }) => transparentize(0.3, theme.black)};
  min-width: 22em;
  padding: 1.25em;
  overflow: hidden;
  position: relative;
`;
