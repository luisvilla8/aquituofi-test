import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom"
import { Home } from './pages'
import { Navbar, Logo } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar logo={<Logo />}>
        <NavLink to="/somos">Quienes Somos</NavLink>
        <NavLink to="/mipanel">Mi Panel</NavLink>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App