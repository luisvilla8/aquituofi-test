import { ButtonStyled } from "../styled-components"

export const Button = ({ children, handleClick, isMenu }) => {
  return (
    <ButtonStyled onClick={ handleClick } isMenu={isMenu}>
      { children }
    </ButtonStyled>
  )
}
