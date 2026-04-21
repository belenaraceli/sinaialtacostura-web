import logo from "../assets/images/logo.webp";
import igIcon from "../assets/images/ig.svg";
import fbIcon from "../assets/images/fb.svg";

const Footer = () => {
  return (
    <footer className="footer">

      <img src={logo} alt="logo" className="footer-logo" />

      <p className="footer-title">SINAI</p>
      <p className="footer-subtitle">Alta Costura</p>

      <div className="footer-social">
        <a href="https://instagram.com/sinaialtacostura" target="_blank" rel="noopener noreferrer">
          <img src={igIcon} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/SinaiAltaCostura" target="_blank" rel="noopener noreferrer">
          <img src={fbIcon} alt="Facebook" />
        </a>
      </div>

      <p className="footer-copy">
        © Sinai Alta Costura. Todos los derechos reservados.
        <br />
        Diseño de vestidos a medida en Buenos Aires
      </p>

      <p className="footer-dev">
        Diseño web por <span><a href="https://belenaraceli.com/" target="_blank" rel="noopener noreferrer">Belén Araceli</a></span>
      </p>

    </footer>
  );
};

export default Footer;