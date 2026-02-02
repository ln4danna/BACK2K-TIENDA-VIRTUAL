import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const outfits = [
  { img: "/carrusel/outfit1.png", alt: "Outfit 1" },
  { img: "/carrusel/outfit2.png", alt: "Outfit 2" },
  { img: "/carrusel/outfit3.png", alt: "Outfit 3" },
  { img: "/carrusel/outfit4.png", alt: "Outfit 4" },
  { img: "/carrusel/outfit5.png", alt: "Outfit 5" },
  { img: "/carrusel/outfit6.png", alt: "Outfit 6" },
  { img: "/carrusel/outfit7.png", alt: "Outfit 7" },
  { img: "/carrusel/outfit8.png", alt: "Outfit 8" },
];

export default function Carrusel() {
  const scrollAmount = 430;
  const [position, setPosition] = useState(0);
  const trackRef = useRef(null);

  // Duplicamos el array una sola vez
  const infiniteOutfits = [...outfits, ...outfits];
  const maxScroll = outfits.length * scrollAmount;

  const next = () => {
    setPosition((prev) => prev + scrollAmount);
  };

  const prev = () => {
    setPosition((prev) => prev - scrollAmount);
  };

  const handleTransitionEnd = () => {
    // Si avanzamos más allá del primer set, saltamos al inicio sin transición
    if (position >= maxScroll) {
      trackRef.current.style.transition = "none";
      setPosition(0);
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "transform 0.5s ease-in-out";
        }
      }, 50);
    }

    // Si retrocedemos antes del inicio, saltamos al final del primer set
    if (position < 0) {
      trackRef.current.style.transition = "none";
      setPosition(maxScroll - scrollAmount);
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "transform 0.5s ease-in-out";
        }
      }, 50);
    }
  };

  return (
    <section className="carrusel">
      <div className="carrusel-wrapper">
        <button className="arrow left" onClick={prev}>←</button>

        <div className="carrusel-container">
          <div
            ref={trackRef}
            className="carrusel-track"
            style={{
              transform: `translateX(-${position}px)`,
              transition: "transform 0.5s ease-in-out",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {infiniteOutfits.map((item, i) => (
              <div className="carrusel-item" key={i}>
                <Link to="/bottoms">Try a new style</Link>
                <img src={item.img} alt={item.alt} />
                <Link to="/bottoms">Try a new style</Link>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={next}>→</button>
      </div>
    </section>
  );
}