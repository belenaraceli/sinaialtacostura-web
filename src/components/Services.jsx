import "../styles/global.css";
import noviasImg from "../assets/images/novias.svg";
import quinceImg from "../assets/images/15.svg";
import madrinasImg from "../assets/images/madrinas.svg";
import transformacionImg from "../assets/images/transformacion-services.svg";

const Services = () => {
  return (
    <section className="services fade-in-section" id="servicios">
      
      <h2 className="services-title">Mis Servicios</h2>

      <div className="services-grid">

        <div className="service-card">
          <div className="service-img">
            <img src={noviasImg} alt="Vestidos de novia a medida en Buenos Aires" />
            <span>Novias</span>
          </div>
          <p>
            Vestidos de novia diseñados para reflejar tu esencia.
            Románticos, modernos o clásicos, el vestido perfecto para tu "sí, quiero".
          </p>
        </div>

        <div className="service-card">
          <div className="service-img">
            <img src={quinceImg} alt="Vestidos de 15 años diseñados a medida" />
            <span>15 Años</span>
          </div>
          <p>
            Diseños de ensueño para una noche mágica. Colores vibrantes,
            faldas voluminosas o estilos sutiles, adaptados a tu personalidad.
          </p>
        </div>

        <div className="service-card">
          <div className="service-img">
            <img src={madrinasImg} alt="Vestidos de madrina y gala de alta costura" />
            <span>Madrinas</span>
          </div>
          <p>
            Alta costura para invitadas, madrinas y eventos de gala.
            Destaca con un vestido hecho a medida que realce tu figura.
          </p>
        </div>

        <div className="service-card">
          <div className="service-img">
            <img src={transformacionImg} alt="Rediseño y transformación de vestidos a medida" />
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