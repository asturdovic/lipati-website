import React, { useRef, useState, useEffect } from "react";
import "../styles/featured.css"; // Import af komponentens specifikke CSS

// Midlertidigt produkt-array (bør hentes dynamisk fra database i et produktionsmiljø)
const products = [
  { id: 1, image: "/src/assets/images/varekort1.jpg", name: "LiteRun Tee" },
  { id: 2, image: "/src/assets/images/varekort2.jpg", name: "LiteRun Tee" },
  { id: 3, image: "/src/assets/images/varekort3.jpg", name: "LiteRun Tee" },
  { id: 4, image: "/src/assets/images/varekort1.jpg", name: "LiteRun Tee" },
  { id: 5, image: "/src/assets/images/varekort2.jpg", name: "LiteRun Tee" },
];

// Funktionel komponent, der viser et horisontalt scrollbart udvalg af produkter
const FeaturedProducts = () => {
  const scrollRef = useRef(null); // Ref til den scrollbare wrapper
  const [canScrollLeft, setCanScrollLeft] = useState(false); // State: kan scrolles mod venstre
  const [canScrollRight, setCanScrollRight] = useState(true); // State: kan scrolles mod højre

  // Tjekker om der er mere indhold at scrolle til i hver retning
  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  // Funktion til at håndtere scroll ved klik på pile
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Initialiserer scroll-logik og tilføjer eventlistener ved komponent-mount
  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll); // Oprydning ved unmount
  }, []);

  return (
    <section className="featured-products">
      <div className="scroll-container">
        {/* Venstre scroll-knap vises kun, hvis indholdet kan scrolles tilbage */}
        {canScrollLeft && (
          <button className="scroll-arrow left" onClick={() => scroll("left")}>
            ←
          </button>
        )}

        {/* Scrollbar med produktkort */}
        <div className="scroll-wrapper" ref={scrollRef}>
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="image-wrapper">
                <img src={product.image} alt={product.name} />
                <button className="product-cta">Show More</button>
              </div>
            </div>
          ))}
        </div>

        {/* Højre scroll-knap vises kun, hvis der er mere indhold fremad */}
        {canScrollRight && (
          <button className="scroll-arrow right" onClick={() => scroll("right")}>
            →
          </button>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
