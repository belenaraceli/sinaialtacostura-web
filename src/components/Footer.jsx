const Footer = () => {
  return (
    <footer className="footer">

      <img src="/images/logo.png" alt="logo" className="footer-logo" />

      <p className="footer-title">SINAI</p>
      <p className="footer-subtitle">Alta Costura</p>

      <div className="footer-social">
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

      <p className="footer-copy">
        © Sinai Alta Costura. Todos los derechos reservados.
      </p>

      <p className="footer-dev">
        Diseño web por <span>Belén Araceli</span>
      </p>

    </footer>
  );
};

export default Footer;