import "../styles/contact.scss";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-box">
        <h2 className="contact-title">¡Agenda tu cita!</h2>

        <p className="contact-text">
          Trabajamos exclusivamente con turnos para poder dedicarte el tiempo y la atención que mereces.
          Cada consulta es el primer paso para hacer realidad el vestido de tus sueños.
        </p>

        <button className="contact-btn">
          Contactar por Whatsapp
        </button>

        <div className="contact-info">
          <p>📍 Buenos Aires, Argentina (Atelier Privado)</p>
          <p>✉️ hola@sinai.com</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;