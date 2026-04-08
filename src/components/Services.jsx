import "../styles/global.css";

const Services = () => {
  return (
    <section className="services" id="servicios">
      
      <h2 className="services-title">Mis Servicios</h2>

      <div className="services-grid">

        {/* CARD */}
        <div className="service-card">
          <div className="service-img">
            <img src="/src/assets/images/novia.jpg" alt="Novias" />
            <span>Novias</span>
          </div>
          <p>
            Vestidos de novia diseñados para reflejar tu esencia.
            Románticos, modernos o clásicos, creamos el vestido perfecto para tu "sí, quiero".
          </p>
        </div>

        <div className="service-card">
          <div className="service-img">
            <img src="/src/assets/images/15.jpg" alt="15 años" />
            <span>15 Años</span>
          </div>
          <p>
            Diseños de ensueño para una noche mágica. Colores vibrantes,
            faldas voluminosas o estilos sutiles, adaptados a tu personalidad.
          </p>
        </div>

        <div className="service-card">
          <div className="service-img">
            <img src="/src/assets/images/madrinas.jpg" alt="Madrinas" />
            <span>Madrinas</span>
          </div>
          <p>
            Alta costura para invitadas, madrinas y eventos de gala.
            Destaca con un vestido hecho a medida que realce tu figura.
          </p>
        </div>

        <div className="service-card">
          <div className="service-img">
            <img src="/src/assets/images/transformacion.jpg" alt="Transformación" />
            <span>Rediseño & Transformación</span>
          </div>
          <p>
            Dale una nueva vida a tu vestido. Adapto cada prenda a tu estilo y necesidad.
            También recreo diseños inspirados en referencias.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;