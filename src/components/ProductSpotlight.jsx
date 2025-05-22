import React from "react";
import "../styles/productSpotlight.css"; // Import af komponentens tilhørende styling
import trailShoe from "../assets/images/varekort1.jpg"; // Produktbillede (kan skiftes ved behov)

// Funktionel komponent, der viser et udvalgt produkt i fokus
const ProductSpotlight = () => {
  return (
    <section className="product-spotlight">
      {/* Venstre sektion med tekst og call-to-action */}
      <div className="spotlight-text">
        <h2>HALO TRAIL SNEAKER</h2>
        <p>
          A true signature merge between rugged tactical aesthetics and trail functionalities. Featuring a polyester mesh upper, nylon ripstop TPU film fused detailing alongside trail-inspired laces and rear pull tabs.
        </p>
        <button>Shop now</button>
      </div>

      {/* Højre sektion med produktbillede */}
      <div className="spotlight-image">
        <img src={trailShoe} alt="Halo Trail Sneaker" />
      </div>
    </section>
  );
};

export default ProductSpotlight;
