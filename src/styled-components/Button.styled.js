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
    display: ${ prop => prop.isMenu ? 'none' : 'inline'};
  }
`