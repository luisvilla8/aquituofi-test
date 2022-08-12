import styled from "styled-components";

export const InputStyled = styled.input`
  outline: none;
  border: none;
  border: 4px solid var(--shadowGreen);
  border-radius: .5rem;
  background-color: var(--titleColor);
  box-shadow: 0px 4px 30px 5px rgba(47, 180, 60, 0.5);
  position: absolute;
  z-index: 2;
  bottom: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  font-size: 1.2rem;
  width: clamp(5rem, 50vw, 30rem);
`