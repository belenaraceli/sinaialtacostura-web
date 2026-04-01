import "../styles/hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay">
        <h2 className="brand">SINAI</h2>

        <button className="cta">Reservar cita</button>

        <h1 className="title">Alta Costura</h1>
      </div>
    </section>
  );
};

export default Hero;