import "../styles/global.css";
import { useState } from "react";
import logo from "/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        <a href="#inicio">
          <img src={logo} alt="Sinai logo" />
        </a>
      </div>

      {/* MENU */}
      <ul className={`menu ${menuOpen ? "active" : ""}`}>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#transformacion">Transformación</a></li>
        <li><a href="#galeria">Galería</a></li>
        <li><a href="#contacto" className="turnos">Turnos</a></li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="social">
      <a
        href="https://instagram.com/sinaialtacostura"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/ig.svg" alt="Instagram" />
      </a>

      <a
        href="https://www.facebook.com/SinaiAltaCostura"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/fb.svg" alt="Facebook" />
      </a>
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