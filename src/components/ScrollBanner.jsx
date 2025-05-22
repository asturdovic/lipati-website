import React from "react";
import "../styles/scrollBanner.css"; // Import af tilknyttet CSS for animation og layout

// Funktionel komponent, der viser en kontinuerlig scrollende banner med kampagnetekst
const ScrollBanner = () => {
  return (
    <div className="scroll-banner">
      <div className="scroll-track">
        {/* Dobbelt content-element sikrer kontinuerlig looping-effekt i CSS */}
        <div className="scroll-content">
          SUMMER SALE // SUMMERSTYLES • LIPATI • 50% OFF • SUMMER SALE // SUMMERSTYLES • LIPATI • 50% OFF • SUMMER SALE // SUMMERSTYLES • LIPATI • 50% OFF • SUMMER SALE // SUMMERSTYLES • LIPATI • 50% OFF • SUMMER SALE // SUMMERSTYLES • LIPATI • 50% OFF • SUMMER SALE // SUMMERSTYLES • LIPATI • 50% OFF • SUMMER SALE // SUMMERSTYLES • LIPATI • 50% OFF • SUMMER SALE // SUMMERSTYLES • LIPATI • 50% OFF • 
        </div>
        <div className="scroll-content">
          SUMMER SALE // SUMMERSTYLES • LIPATI • 50% OFF • SUMMER SALE // SUMMERSTYLES • LIPATI • 50% OFF • SUMMER SALE // SUMMERSTYLES • LIPATI • 50% OFF • SUMMER SALE // SUMMERSTYLES • LIPATI • 50% OFF • SUMMER SALE // SUMMERSTYLES • LIPATI • 50% OFF • SUMMER SALE // SUMMERSTYLES • LIPATI • 50% OFF • SUMMER SALE // SUMMERSTYLES • LIPATI • 50% OFF • SUMMER SALE // SUMMERSTYLES • LIPATI • 50% OFF • SUMMER SALE 
        </div>
      </div>
    </div>
  );
};

export default ScrollBanner;
