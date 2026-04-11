import "../styles/global.css";

const Contact = () => {
  return (
    <section className="contact fade-in-section" id="contacto">

      <div className="contact-box">
        <h2>¡Agenda tu cita!</h2>

        <p>
          Trabajamos exclusivamente con turnos para poder dedicarte el tiempo y la atención que mereces.
          Cada consulta es el primer paso para hacer realidad el vestido de tus sueños.
        </p>

        <a
          href="https://wa.me/5491139044175?text=Hola%20quiero%20consultar%20por%20un%20vestido"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          <img src="/images/wpp.svg" alt="WhatsApp" className="wpp-icon" /> Contactar por Whatsapp
        </a>

        <div className="contact-info">
          <p><img src="/images/location.svg" alt="Ubicación" className="contact-icon" /> Villa Ballester, Buenos Aires, Argentina <br /> (Atelier Privado) </p>
          <p><img src="/images/mail.svg" alt="Email" className="contact-icon" /> leonardaugartemendoza@gmail.com</p>
        </div>
      </div>

      {/* MAPA */}
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1643.0244401112311!2d-58.56428066415169!3d-34.55231775478519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9f9aa9b2f07%3A0x14990013f1578180!2sArist%C3%B3bulo%20del%20Valle%205160%2C%20B1653%20Villa%20Ballester%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1775921393824!5m2!1ses-419!2sar"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* CINTA */}
      <div className="contact-ticker">
        <div className="ticker-track">
          <span>
            Cupos limitados por mes · Cupos limitados por mes · Cupos limitados por mes ·
          </span>
          <span>
            Cupos limitados por mes · Cupos limitados por mes · Cupos limitados por mes ·
          </span>
        </div>
      </div>

    </section>
  );
};

export default Contact;