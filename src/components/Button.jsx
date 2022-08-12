import { ButtonStyled } from "../styled-components"

export const Button = ({ children, handleClick, type }) => {
  return (
    <ButtonStyled onClick={ handleClick } type={type}>
      { children }
    </ButtonStyled>
  )
}
