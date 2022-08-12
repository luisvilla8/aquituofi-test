import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { Home } from "./pages";
import { Navbar, Logo, ModalLogin } from "./components";
import { useSelector } from "react-redux";
function App() {
  const isOpen = useSelector( state => state.modal.isOpen)
  const theme = useSelector((state) => state.theme.value);
  document.documentElement.classList = theme

  return (
    <BrowserRouter>
      <Navbar logo={<Logo />}>
        <NavLink 
          to="https://aquituofi.com/about"
        >Quienes Somos</NavLink>
        <NavLink to="/mipanel">Mi Panel</NavLink>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ModalLogin 
        isOpen={isOpen}
      />
    </BrowserRouter>
  );
}

export default App
