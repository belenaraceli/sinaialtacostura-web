import "../styles/gallery.scss";

const Gallery = () => {
  return (
    <section className="gallery">

      <h2 className="gallery__title">Galería</h2>

      <div className="gallery__filters">
        <button>Todos</button>
        <button>Novias</button>
        <button>XV</button>
        <button>Madrinas</button>
      </div>

      <div className="gallery__grid">

        <img src="/images/g1.jpg" alt="" />
        <img src="/images/g2.jpg" alt="" />
        <img src="/images/g3.jpg" alt="" />
        <img src="/images/g4.jpg" alt="" />
        <img src="/images/g5.jpg" alt="" />
        <img src="/images/g6.jpg" alt="" />

      </div>

    </section>
  );
};

export default Gallery;