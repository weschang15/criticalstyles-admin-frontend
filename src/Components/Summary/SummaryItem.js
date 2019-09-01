import { darken } from "polished";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.gray};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding: 1em;
  text-align: center;
  > h1 {
    margin: 0 0 0.25em;
  }
  > p {
    color: ${({ theme }) => darken(0.25, theme.gray)};
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.025em;
    margin: 0;
    text-transform: uppercase;
  }
`;

function SummaryItem({ count, subject }) {
  return (
    <Card>
      <h1>{count}</h1>
      <p>{subject}</p>
    </Card>
  );
}

export default SummaryItem;
