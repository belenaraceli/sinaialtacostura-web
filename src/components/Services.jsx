import "../styles/global.css";

const Services = () => {
  return (
    <section className="services" id="servicios">

      <h2 className="services__title">Servicios</h2>

      <div className="services__grid">

        <div className="service">
          <img src="/images/novia.jpg" alt="Novias" />
          <h3>Novias</h3>
          <p>Diseños únicos para uno de los días más importantes de tu vida.</p>
        </div>

        <div className="service">
          <img src="/images/madrinas.jpg" alt="Madrinas" />
          <h3>Madrinas</h3>
          <p>Elegancia y estilo para acompañar momentos especiales.</p>
        </div>

        <div className="service">
          <img src="/images/quince.jpg" alt="Quinceañeras" />
          <h3>Quinceañeras</h3>
          <p>Vestidos soñados para una noche inolvidable.</p>
        </div>

      </div>

    </section>
  );
};

export default Services;