import React, { useContext } from "react";
import ToggleBar from "../Toggles/ToggleBar";
import styled from "styled-components";
import { AuthContext } from "../../contexts/AuthContext";

const Container = styled.div`
  align-items: center;
  display: flex;
  grid-area: header;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 1em;
  margin: 0;
  span {
    color: ${({ theme }) => theme.gray};
  }
`;

function normalize(str) {
  const paths = str.split("/").filter(el => Boolean(el));
  const last = paths.length - 1;

  const name = paths.length
    ? paths[last].charAt(0).toUpperCase() + paths[last].slice(1)
    : "";
  return name;
}

function TopNavBar({ currentPath }) {
  const { accountName } = useContext(AuthContext);
  return (
    <Container>
      <Title>
        {normalize(currentPath)} - <span>{accountName}</span>
      </Title>
      <ToggleBar />
    </Container>
  );
}

export default TopNavBar;
