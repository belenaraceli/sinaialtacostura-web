import "../styles/navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        <img src="/images/logo.png" alt="Sinai logo" />
      </div>

      {/* MENU */}
      <ul className={`menu ${menuOpen ? "active" : ""}`}>
        <li>Inicio</li>
        <li>Sobre mí</li>
        <li>Servicios</li>
        <li>Transformación</li>
        <li>Galería</li>
        <li>Turnos</li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="social">
          <span>IG</span>
          <span>FB</span>
        </div>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;