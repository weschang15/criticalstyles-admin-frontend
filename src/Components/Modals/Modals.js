import styled from "styled-components";

export const ModalHeader = styled.header`
  align-items: flex-start;
  display: flex;
  padding: 1em 1em 0;
  figure {
    margin: 0 1em 0 0;
    flex: 1 0 120px;
    img {
      display: block;
    }
  }
  h5 {
    margin-top: 0;
  }
  p {
    font-size: 16px;
    margin: 0;
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  input[type="text"],
  input[type="email"],
  input[type="url"] {
    background-color: ${({ theme }) => theme.gray};
    box-shadow: none;
    margin: 0 0 1em;
    width: 100%;
  }
`;

export const ModalFormGroup = styled.div`
  padding: 1em;
  &:last-of-type {
    display: flex;
    flex-flow: row-reverse;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.gray};
    margin: 0;
    padding: 0.5em 1em;
    width: 100%;
  }

  button {
    margin-right: 1em;
    &:first-of-type {
      margin-right: 0;
    }
  }
`;
