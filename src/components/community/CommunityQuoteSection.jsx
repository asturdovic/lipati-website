import React from "react";
import "../../styles/CommunityQuoteSection.css"; // Import af komponentens tilhørende CSS-styling

// Array med korte citater, som formidler Lipatis brandværdier og filosofi
const quotes = [
  "Movement is more than miles.",
  "My pace, my power.",
  "Stillness is also motion.",
];

// Funktionel komponent, der viser et udpluk af statements i en visuel quote-sektion
const QuoteSection = () => {
  return (
    <section className="quote-section">
      <div className="quotes-wrapper">
        {/* Itererer gennem citater og viser hver linje som et separat tekstafsnit */}
        {quotes.map((quote, index) => (
          <p key={index} className="quote-line">
            {quote}
          </p>
        ))}
      </div>
    </section>
  );
};

export default QuoteSection;
