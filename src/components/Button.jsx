import { ButtonStyled } from "../styled-components"
import { useDispatch } from "react-redux"
import { toggleTheme } from "../redux/states/themeSlice"

export const Button = ({ children }) => {

  const dispatch = useDispatch()

  return (
    <ButtonStyled onClick={ () => dispatch(toggleTheme())}>
      { children }
    </ButtonStyled>
  )
}
