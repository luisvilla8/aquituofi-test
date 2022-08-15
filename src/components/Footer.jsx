import { FooterStyled, LinkGroup, LinkStyled } from "../styled-components"
import { Button } from "../components"
import { openModal } from "../redux/states";
import { useDispatch } from "react-redux";

export const Footer = ({ children }) => {

  const dispatch = useDispatch();

  return (
    <FooterStyled>
      <LinkGroup>
        { children }
        <h2>Aquí Tu Ofi</h2>
        <p>Todos los espacios a un click</p>
      </LinkGroup>
      <LinkGroup>
        <li><LinkStyled to="/somos">Quienes Somos</LinkStyled></li>
        <li><LinkStyled to="/mipanel">Mi Panel</LinkStyled></li>
        <li><Button handleClick={() => dispatch(openModal())}>Pruebame Gratis</Button></li>
      </LinkGroup>
      <LinkGroup>
        <li><LinkStyled to="/vision">Visión</LinkStyled></li>
        <li><LinkStyled to="/mision">Misión</LinkStyled></li>
        <li><LinkStyled to="/equipo">Equipo</LinkStyled></li>
      </LinkGroup>
      <LinkGroup>
        <li><LinkStyled to="/soporte">Soporte</LinkStyled></li>
        <li><LinkStyled to="/terminos">Términos y condiciones</LinkStyled></li>
        <li><LinkStyled to="/politica">Política de Privacidad</LinkStyled></li>
      </LinkGroup>
    </FooterStyled>
  )
}
