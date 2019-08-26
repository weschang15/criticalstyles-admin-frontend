import { darken } from "polished";
import styled from "styled-components";

const MoneyMakerHeader = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  margin: 2em 0;
  padding-bottom: 1em;
  p {
    color: ${({ theme }) => darken(0.25, theme.gray)};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    margin: 0;
    svg {
      display: inline-block;
      vertical-align: text-bottom;
      margin-right: 0.5em;
    }
  }
`;

export default MoneyMakerHeader;
