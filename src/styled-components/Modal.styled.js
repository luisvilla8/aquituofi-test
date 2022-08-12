import styled from "styled-components";

export const BackgroundModal = styled.div`
  background-color: rgba(37, 37, 37, .6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  backdrop-filter: blur(5px);
  display: grid;
  place-items: center;
`

export const ModalStyled = styled.div`
  background-color: var(--bgColor);
  border-radius: 1rem;
  width: clamp(19rem, 80vw,26rem);
  height: auto; 
  padding: 2rem;
  position: relative;
  @media (min-width: 720px) {
    padding: 3rem;
  }
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const Title = styled.h2`
  color: var(--titleModalColor);
  font-weight: 800;
  width: fit-content;
`

export const Icon = styled.span`
  font-size: .8rem;
  font-weight: 600;
  display: inline;
  width: min-content;
  background-color: transparent;
  color: var(--titleModalColor);
`

export const Message = styled.p`
  color: var(--titleModalColor);
  text-align: center;
`

export const CloseButton = styled.button`
  background-color: var(--bgInput);
  padding: .2rem;
  border: none;
  border-radius: .5rem;
  color: var(--titleModalColor);
  text-align: center;
  &:hover {
    transform: scale(1.1);
  }
  svg {
    background-color: transparent;
    font-size: 2.2rem;
  }
`

export const ModalButton = styled.button`
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 2rem;
  float: ${ prop => prop.color === "acept" ? "right" : "left"};
  background-color: var(--shadowGreen);
  color: #FCFCFC;
  border-radius: 0.5rem;
  transition: transform var(--transition), box-shadow var(--transition);
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 30px 5px rgba(47, 180, 60, 0.5);
  }
`;