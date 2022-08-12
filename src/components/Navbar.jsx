import { useDispatch, useSelector } from "react-redux";
import { BsFillMoonFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import {
  NavbarStyled,
  NavGroup,
  NavMenu,
  NavRight,
} from "../styled-components";
import { Button } from "../components";
import { toggleIsOpen } from "../redux/states/menuSlice";
import { toggleTheme } from "../redux/states/themeSlice";
import { openModal } from "../redux/states";

export const Navbar = ({ logo, children }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen);
  return (
    <NavbarStyled>
      {logo}
      <NavRight>
        <NavGroup>
          {children}
          <Button handleClick={() => dispatch(openModal())}>
            Pruebame gratis
          </Button>
        </NavGroup>
        <Button handleClick={() => dispatch(toggleTheme())}>
          <BsFillMoonFill size="1.2rem" />
        </Button>
        <Button handleClick={() => dispatch(toggleIsOpen())} type="menu">
          <BiMenu size="2rem" />
        </Button>
      </NavRight>
      <NavMenu isOpen={isOpen}>
        {children}
        <Button handleClick={() => dispatch(openModal())}>
          Pruebame gratis
        </Button>
      </NavMenu>
    </NavbarStyled>
  );
};
