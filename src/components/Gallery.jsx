import { useState, useRef, useEffect } from "react";
import "../styles/global.css";

import img1 from "../assets/images/1.svg";
import img3 from "../assets/images/3.svg";
import img4 from "../assets/images/4.svg";
import img5 from "../assets/images/5.svg";
import img6 from "../assets/images/6.svg";
import img7 from "../assets/images/7.svg";
import img8 from "../assets/images/8.svg";
import img9 from "../assets/images/9.svg";
import img10 from "../assets/images/10.svg";
import img11 from "../assets/images/11.svg";
import img12 from "../assets/images/12.svg";
import img14 from "../assets/images/14.svg";
import video2 from "../assets/videos/2.mp4";
import video13 from "../assets/videos/13.mp4";

const images = [
  { src: img1, category: "novias", type: "image" },
  { src: video2, category: "fiesta", type: "video" },
  { src: img3, category: "novias", type: "image" },
  { src: img4, category: "xv", type: "image" },
  { src: img5, category: "fiesta", type: "image" },
  { src: img6, category: "xv", type: "image" },
  { src: img7, category: "novias", type: "image" },
  { src: img8, category: "xv", type: "image" },
  { src: img9, category: "novias", type: "image" },
  { src: img10, category: "fiesta", type: "image" },
  { src: img11, category: "novias", type: "image" },
  { src: img12, category: "xv", type: "image" },
  { src: video13, category: "novias", type: "video" },
  { src: img14, category: "fiesta", type: "image" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoomed, setZoomed] = useState(false);

  const sliderRef = useRef();

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.classList.add("lightbox-open");
    } else {
      document.body.classList.remove("lightbox-open");
    }
    return () => document.body.classList.remove("lightbox-open");
  }, [selectedIndex]);

  const scroll = (offset) => {
    sliderRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  const nextImage = () => {
    setZoomed(false);
    setSelectedIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setZoomed(false);
    setSelectedIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="gallery fade-in-section" id="galeria">
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
        <button className="slider-btn left" onClick={() => scroll(-400)}>‹</button>

        <div className="gallery-slider" ref={sliderRef}>
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedIndex(index)}
            >
              {img.type === "video" ? (
                <video src={img.src} muted loop playsInline autoPlay />
              ) : (
                <img src={img.src} alt="Diseño de alta costura" />
              )}
              <div className="overlay">Ver detalles</div>
            </div>
          ))}
        </div>

        <button className="slider-btn right" onClick={() => scroll(400)}>›</button>
      </div>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div className="lightbox">
          <span className="close" onClick={() => setSelectedIndex(null)}>✕</span>
          <span className="arrow left" onClick={prevImage}>‹</span>

          {filteredImages[selectedIndex].type === "video" ? (
            <video src={filteredImages[selectedIndex].src} controls autoPlay />
          ) : (
            <img
              src={filteredImages[selectedIndex].src}
              className={zoomed ? "zoomed" : ""}
              onClick={() => setZoomed(!zoomed)}
            />
          )}

          <span className="arrow right" onClick={nextImage}>›</span>
        </div>
      )}
    </section>
  );
};

export default Gallery;