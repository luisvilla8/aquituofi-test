import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { Home } from "./pages";
import { Navbar, Logo, ModalLogin } from "./components";
import { useSelector } from "react-redux";
import { BsWhatsapp } from "react-icons/bs";
import { ButtonWhatsapp } from "./styled-components";
function App() {
  const isOpen = useSelector( state => state.modal.isOpen)
  const theme = useSelector((state) => state.theme.value);
  document.documentElement.classList = theme

  return (
    <BrowserRouter>
      <Navbar logo={<Logo />}>
        <NavLink to="/somos">Quienes Somos</NavLink>
        <NavLink to="/mipanel">Mi Panel</NavLink>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ModalLogin 
        isOpen={isOpen}
      />
      <ButtonWhatsapp 
        type="whatsapp"
        onClick={ () => location.href = "https://api.whatsapp.com/message/LW23XVR6ZHUTM1?autoload=1&app_absent=0" }
      >
        <BsWhatsapp />
      </ButtonWhatsapp>
    </BrowserRouter>
  );
}

export default App
