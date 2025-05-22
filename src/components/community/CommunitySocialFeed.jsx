import React from "react";
import "../../styles/CommunitySocialFeed.css"; // Import af komponentens tilknyttede CSS
import insta1 from "../../assets/images/1.jpg";
import insta2 from "../../assets/images/2.jpg";
import insta3 from "../../assets/images/3.jpg";
import insta4 from "../../assets/images/4.jpg";
import insta5 from "../../assets/images/5.jpg";

// Array med billeder og tilhørende brugernavne fra Lipatis community
const images = [
  { src: insta1, user: "@frejamoves" },
  { src: insta2, user: "@runwithjonas" },
  { src: insta3, user: "@everyday.pace" },
  { src: insta4, user: "@lipatilover" },
  { src: insta5, user: "@slowandsteady" },
];

// Breakpoints til evt. grid-styring (bruges ikke i denne komponent, men kan aktiveres med fx react-masonry)
const breakpointColumnsObj = {
  default: 3,
  900: 2,
  600: 1,
};

// Funktionel komponent, der viser et udsnit af community-indhold med call-to-action
const CommunitySocialFeed = () => {
  return (
    <section className="social-feed">
      {/* Overskrift og CTA-tekst med hashtag */}
      <h2>From our community 💛</h2>
      <p className="cta-text">
        Use <strong>#LipatiEveryday</strong> to get featured
      </p>

      {/* Visuel grid med billeder og overlay-tekst */}
      <div className="social-grid">
        {images.map((img, index) => (
          <div className="social-tile" key={index}>
            <img src={img.src} alt={img.user} />
            <div className="overlay">{img.user}</div>
          </div>
        ))}
      </div>

      {/* Link til Lipatis Instagram-profil */}
      <a
        href="https://www.instagram.com/lipati"
        target="_blank"
        rel="noopener noreferrer"
        className="insta-link"
      >
        → See more on Instagram
      </a>
    </section>
  );
};

export default CommunitySocialFeed;
