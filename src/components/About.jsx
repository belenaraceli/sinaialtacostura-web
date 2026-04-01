import "../styles/about.scss";

const About = () => {
  return (
    <section className="about">
      <div className="about__container">

        <div className="about__text">
          <p className="about__subtitle">Creando la prenda de tus sueños</p>

          <h2 className="about__title">Sobre Mi</h2>

          <p>
            Bienvenidas a Sinai Alta Costura. Soy Leo, diseñadora apasionada por crear vestidos únicos y personalizados para momentos especiales.
          </p>

          <p>
            Cada prenda está hecha a medida, cuidando cada detalle con dedicación y amor, desde el diseño inicial hasta la entrega final.
          </p>

          <p>
            Creo profundamente en el valor de hacer sentir especial a cada mujer en su día, acompañando con un diseño pensado exclusivamente para ella.
          </p>

          <p>
            Soy una mujer soñadora, romántica y de fe. Creo en Dios, quien guía cada paso que doy, y en la importancia de trabajar con amor, compromiso y propósito.
          </p>
        </div>

        <div className="about__image">
          <img src="/images/about.jpg" alt="Diseñadora trabajando" />
        </div>

      </div>
    </section>
  );
};

export default About;