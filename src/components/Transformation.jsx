import "../styles/global.css";

const Transformation = () => {
  return (
    <section className="transformation" id="transformacion">

      <div className="transformation__container">

        <div className="transformation__image">
          <img src="/images/transformacion.jpg" alt="Transformación de vestido" />
        </div>

        <div className="transformation__text">
          <h2>Transformación de vestidos</h2>

          <p>
            ¿Tenés un vestido que te gusta pero no te convence del todo?
          </p>

          <p>
            Realizamos modificaciones, ajustes o creamos una versión inspirada
            en el diseño que soñás, adaptado a tu estilo y medida.
          </p>

          <p>
            Cada prenda es trabajada con dedicación para lograr un resultado
            único y personalizado.
          </p>

          <button>Consultar</button>
        </div>

      </div>

    </section>
  );
};

export default Transformation;