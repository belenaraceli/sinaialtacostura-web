import "../styles/global.css";

const Hero = () => {
  return (
    <section className="hero fade-in-section" id="inicio">
      <div className="hero-overlay">
    
        <div className="hero-top">
          <img 
              src="../src/assets/images/sinai-title.png" 
              alt="Sinai" 
              className="hero-logo"
          />

          <a href="#contacto" className="hero-btn">
            Reservar mi cita
          </a>
        </div>

        <h2 className="hero-title">Alta Costura</h2>

      </div>
    </section>
  );
};

export default Hero;