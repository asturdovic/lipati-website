import React from "react";
import "../../styles/CommunityIntro.css"; // Import af komponentens specifikke CSS-styling
import introImg from "../../assets/images/men2.jpg"; // Import af billede brugt i højre sektion

// Funktionel komponent, der introducerer Lipatis community og dets kerneværdier
const CommunityIntro = () => {
  return (
    <section className="community-intro">
      <div className="community-content">

        {/* Tekstsektion med overskrift, brødtekst og statement quote */}
        <div className="text-section">
          <h2>Movement means more</h2>
          <p>
            At Lipati, we believe movement isn’t just something you do – it’s a part of who you are. 
            Whether you're stretching, strolling, sprinting or resting – your pace is valid.
          </p>
          <p>
            Our community celebrates motion in all its forms. Because the way you move through the world matters.
          </p>
          <p className="quote">“It’s about how you move, not how fast.”</p>
        </div>

        {/* Visuel sektion med illustrativt billede relateret til community og bevægelse */}
        <div className="image-section">
          <img src={introImg} alt="Lipati community in motion" />
        </div>
        
      </div>
    </section>
  );
};

export default CommunityIntro;
