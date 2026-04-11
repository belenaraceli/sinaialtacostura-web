import { useState, useRef } from "react";
import "../styles/global.css";

const images = [
  { src: "/src/assets/images/1.svg", category: "novias" },
  { src: "/src/assets/images/2.svg", category: "fiesta" },
  { src: "/src/assets/images/3.svg", category: "novias" },
  { src: "/src/assets/images/4.svg", category: "xv" },
  { src: "/src/assets/images/5.svg", category: "fiesta" },
  { src: "/src/assets/images/6.svg", category: "xv" },
  { src: "/src/assets/images/7.svg", category: "novias" },
  { src: "/src/assets/images/8.svg", category: "xv" },
  { src: "/src/assets/images/9.svg", category: "novias" },
  { src: "/src/assets/images/10.svg", category: "fiesta" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const sliderRef = useRef();

  const scroll = (offset) => {
    sliderRef.current.scrollBy({
      left: offset,
      behavior: "smooth",
    });
  };

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="gallery" id="galeria">
      <h2 className="gallery-title">Galería</h2>

      {/* FILTROS */}
      <div className="gallery-filters">
        <button onClick={() => setFilter("all")}>TODO</button>
        <button onClick={() => setFilter("novias")}>NOVIAS</button>
        <button onClick={() => setFilter("xv")}>XV</button>
        <button onClick={() => setFilter("fiesta")}>FIESTA</button>
      </div>

      {/* SLIDER */}
      <div className="gallery-wrapper">
        <button className="slider-btn left" onClick={() => scroll(-400)}>
          ‹
        </button>

        <div className="gallery-slider" ref={sliderRef}>
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedIndex(index)}
            >
              <img src={img.src} alt="" />
              <div className="overlay">Ver detalles</div>
            </div>
          ))}
        </div>

        <button className="slider-btn right" onClick={() => scroll(400)}>
          ›
        </button>
      </div>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div className="lightbox">
          <span className="close" onClick={() => setSelectedIndex(null)}>
            ✕
          </span>

          <span className="arrow left" onClick={prevImage}>
            ‹
          </span>

          <img
            src={filteredImages[selectedIndex].src}
            alt="Vista ampliada"
          />

          <span className="arrow right" onClick={nextImage}>
            ›
          </span>
        </div>
      )}
    </section>
  );
};

export default Gallery;