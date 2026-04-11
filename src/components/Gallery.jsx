import { useState } from "react";
import "../styles/global.css";

const images = [
  { src: "/src/assets/images/1.svg", category: "novias" },
  { src: "/src/assets/images/2.svg", category: "fiesta" },
  { src: "/src/assets/images/3.svg", category: "novias" },
  { src: "/src/assets/images/4.svg", category: "xv" },
  { src: "/src/assets/images/5.svg", category: "fiesta" },
  { src: "/src/assets/images/6.svg", category: "xv" },
  { src: "/src/assets/images/7.svg", category: "novias" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <section className="gallery" id="galeria">
      <h2 className="gallery-title">Galería</h2>

      {/* FILTROS */}
      <div className="gallery-filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          TODO
        </button>
        <button
          className={filter === "novias" ? "active" : ""}
          onClick={() => setFilter("novias")}
        >
          NOVIAS
        </button>
        <button
          className={filter === "xv" ? "active" : ""}
          onClick={() => setFilter("xv")}
        >
          XV
        </button>
        <button
          className={filter === "fiesta" ? "active" : ""}
          onClick={() => setFilter("fiesta")}
        >
          FIESTA
        </button>
      </div>

      {/* GRID */}
      <div className="gallery-grid">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedImg(img.src)}
          >
            <img src={img.src} alt="Vestido" />
            <div className="overlay">Ver detalles</div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="Vista ampliada" />
        </div>
      )}
    </section>
  );
};

export default Gallery;