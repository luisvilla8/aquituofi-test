import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import { Navbar, Logo, ModalLogin, Footer } from "./components";
import { ButtonWhatsapp, MainContainer } from "./styled-components";
import { Home, Somos } from "./pages";
function App() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const theme = useSelector((state) => state.theme.value);
  document.documentElement.classList = theme;

  return (
    <BrowserRouter>
      <Navbar logo={<Logo />}>
        <NavLink to="/somos">Quienes Somos</NavLink>
        <NavLink to="/mipanel">Mi Panel</NavLink>
      </Navbar>
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/somos" element={<Somos />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </MainContainer>
      <ModalLogin isOpen={isOpen} />
      <Footer>
        <Logo />
      </Footer>
      <ButtonWhatsapp
        type="whatsapp"
        onClick={() =>
          (location.href =
            "https://api.whatsapp.com/message/LW23XVR6ZHUTM1?autoload=1&app_absent=0")
        }
      >
        <BsWhatsapp />
      </ButtonWhatsapp>
    </BrowserRouter>
  );
}

export default App;
