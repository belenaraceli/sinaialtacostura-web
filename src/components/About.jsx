import "../styles/global.css";
import { useState, useEffect } from "react";
import aboutImage from "../assets/images/about.svg";
import aboutVideo from "../assets/videos/about.mp4";

const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="about fade-in-section" id="sobre-mi">
      <div className="about-container">

        {/* TEXTO */}
        <div className="about-text">
          <p className="about-subtitle">
            Creando la prenda de tus sueños
          </p>
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

        {/* IMAGEN + VIDEO */}
        <div className={`about-image ${showVideo ? "show-video" : ""}`}>
          <img
            src={aboutImage}
            alt="Diseñadora de alta costura a medida en Buenos Aires"
          />
          <video
            src={aboutVideo}
            autoPlay
            muted
            loop
            playsInline
            aria-label="Proceso de diseño de vestidos de alta costura"
          />
        </div>

        {/* TITULO */}
        <h2 className="about-title">Sobre Mí</h2>

      </div>
    </section>
  );
};

export default About;