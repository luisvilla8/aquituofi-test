import { InputGroup, InputStyled, Label, ModalInput } from "../styled-components"
import { definePlaceholder } from "../util"

export const Input = ({ type, inputType, id, children }) => {

  if (inputType === "modal") {
    return (
    <InputGroup>
      <Label htmlFor={id}>{children} :</Label>
      <ModalInput
        type={type}
        id={id}
        placeholder={definePlaceholder(children)}
        // width={defineInputWidth(icon)}
        // defaultValue={value}
      />
      {/* {icon && <Icon>{icon}</Icon>} */}
    </InputGroup>)
  }

  return (
    <InputStyled placeholder="🗺️ ¿Dónde quieres trabajar?" />
  )
}
