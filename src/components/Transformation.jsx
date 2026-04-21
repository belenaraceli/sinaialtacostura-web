import "../styles/global.css";
import transformacionImg from "../assets/images/transformacion.svg";

const Transformation = () => {
  return (
    <section className="transformation fade-in-section" id="transformacion">
      <div className="transformation-container">

        {/* IMAGEN */}
        <div className="transformation-image">
          <img src={transformacionImg} alt="Antes y después vestido" />
        </div>

        {/* TEXTO */}
        <div className="transformation-text">
          <h2 className="transformation-title">
            ¿Tenés un vestido que querés transformar?
          </h2>

          <p>¿Tenés un vestido que no termina de convencerte?</p>
          <p>¿Viste un diseño que te encanta pero no se adapta a vos?</p>
          <p>
            Podemos ayudarte a renovarlo, ajustarlo o crear una versión
            inspirada especialmente para vos.
          </p>

          <a
            href="https://wa.me/5491139044175"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Consultar por transformación
          </a>

          <div className="divider"></div>
        </div>

      </div>
    </section>
  );
};

export default Transformation;