import { darken } from "polished";
import styled from "styled-components";

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.gray};
  color: ${({ theme }) => darken(0.5, theme.gray)};
  font-size: 14px;
  padding: 2.25em 1em;
  text-align: center;
`;

export default Footer;
