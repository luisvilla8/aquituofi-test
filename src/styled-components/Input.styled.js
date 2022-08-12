import styled from "styled-components";

export const InputStyled = styled.input`
  outline: none;
  border: none;
  border: 4px solid var(--shadowGreen);
  border-radius: 0.5rem;
  background-color: var(--titleColor);
  box-shadow: 0px 4px 30px 5px rgba(47, 180, 60, 0.5);
  padding: 1rem;
  font-size: clamp(1rem, 1vw, 1.5rem);
  font-weight: 800;
  color: #1E1E1E;
  width: clamp(10rem, 80vw, 30rem);
  ::placeholder {
    font-weight: 500;
  }
`;