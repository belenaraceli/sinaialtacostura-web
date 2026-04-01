import "../styles/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="/images/logo.png" alt="Sinai logo" className="footer-logo" />

        <h3 className="footer-brand">SINAI</h3>
        <p className="footer-subtitle">Alta Costura</p>

        <div className="footer-social">
          <span>Instagram</span>
          <span>Facebook</span>
        </div>

        <p className="footer-copy">
          © Sinai Alta Costura. Todos los derechos reservados.
        </p>

        <p className="footer-credit">
          Diseño web por Belén Araceli
        </p>
      </div>
    </footer>
  );
}

export default Footer;