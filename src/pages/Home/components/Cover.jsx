import { CoverStyled } from "../styled-components"

export const Cover = ({ children }) => {
  return (
    <CoverStyled>
      <img src="https://aquituofi.com/static/media/portada_oficina.8c274265596f6ce513a2.jpg" alt="oficina" width="100%"/>
      { children }
    </CoverStyled>
  )
}
