import { BsFillMoonFill } from 'react-icons/bs'
import { BiMenu } from 'react-icons/bi'
import { NavbarStyled, NavRight } from "../styled-components";
import { Button } from '../components';

export const Navbar = ({ logo, children }) => {
  return (
    <NavbarStyled>
      { logo }
      <NavRight>
        {/* { children }
        <Button>Pruebame gratis</Button> */}
        <Button><BsFillMoonFill size="1.2rem"/></Button> 
        <Button><BiMenu size="2rem"/></Button> 
      </NavRight>
    </NavbarStyled>
  )
}
