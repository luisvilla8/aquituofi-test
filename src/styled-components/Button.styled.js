import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: .5rem;
  cursor: pointer;
  color: var(--textColor);
  transition: color var(--transition);
  @media (min-width: 720px) {
    display: ${ prop => prop.type === "menu" ? 'none' : 'inline'};
  }
`

export const ButtonWhatsapp = styled(ButtonStyled)`
  background-color: var(--shadowGreen);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`