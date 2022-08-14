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
  color: #1e1e1e;
  width: clamp(10rem, 80vw, 30rem);
  ::placeholder {
    font-weight: 500;
  }
`;

export const ModalInput = styled.input`
  border: none;
  width: 100%;
  font-size: 0.75rem;
  color: var(--textColor);
  background-color: var(--bgInput);
  border-radius: 0.5rem;
  padding: 0.7rem 0.8rem;
  position: relative;
  margin-top: 0.25rem;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: 2px solid var(--shadowGreen);
    box-shadow: 0px 0px 15px -5px #2c27ff;
    font-size: 0.75rem;
  }
  & + span {
    position: relative;
    right: 1.2rem;
  }
`;

export const Label = styled.label`
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--textColor);
  background-color: transparent;
`;

export const InputGroup = styled.div`
  display: block;
  margin: 1rem 0 0 0;
  background-color: transparent;
`;
