import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
  background-color: var(--bgColor);
  transition: background-color var(--transition);
`

export const NavGroup = styled.div`
  display: none;
  margin: 0 1rem;
  @media (min-width: 720px) {
    display: block;
  }
  a, button {
    margin: 0 1rem;
    font-size: .9rem;
  }
`

export const NavRight = styled.div`
  display: flex;
  align-items: center;
`

export const NavMenu = styled.div`
  background-color: var(--green);
  display: ${ prop => prop.isOpen ? "flex" : "none"};
  flex-direction: column;
  position: absolute;
  z-index: 2;
  right: 2rem;
  top: 4rem;
  padding: 1rem .5rem;
  border-radius: .5rem;
  @media (min-width: 720px) {
    display: none;
  }
  a, button {
    margin: .25rem 1rem;
    padding: 0;
    font-size: .9rem;
  }
  a:hover , button:hover {
    font-weight: 800;
  }
`