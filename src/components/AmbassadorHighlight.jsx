import React, { useState, useEffect } from "react";
import "../styles/Ambassador.css"; // Import af komponentens specifikke CSS

// Import af billeder brugt i både profil og stylesektion
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";

// Array med ambassadørdata, herunder billede, biografi, Instagram-link og styles
const ambassadors = [
  {
    name: "Maja Elvik",
    image: img1,
    bio: "Løber, kreativ og café-elsker bosat i København. Maja bevæger sig i sit eget tempo – altid.",
    instagram: "https://www.instagram.com/majaelvik",
    styles: [
      {
        name: "Everyday Flow Leggings",
        description: "Til både små ærinder og spontane intervalpas.",
        image: img1,
      },
      {
        name: "LiteRun Longsleeve",
        description: "Minimalistisk, åndbart og altid i rotation.",
        image: img2,
      },
    ],
  },
  {
    name: "Noah Lin",
    image: img3,
    bio: "Aarhus-baseret yogalærer og weekend-sprinter. Noah skifter mellem langsomme flows og hurtige temposkift.",
    instagram: "https://www.instagram.com/noahlin",
    styles: [
      {
        name: "MotionFlex Shorts",
        description: "Til varme flows og alt derimellem.",
        image: img3,
      },
      {
        name: "ZipUp Windbreaker",
        description: "Let, funktionel og perfekt til cooldowns og gåture ved vandet.",
        image: img4,
      },
    ],
  },
  {
    name: "Sofia Reyes",
    image: img5,
    bio: "Odense-baseret slow jogger og urban explorer. Selma lever i Lipati – fra kaffe til cooldown.",
    instagram: "https://www.instagram.com/sofiareyes",
    styles: [
      {
        name: "Core Crop Top",
        description: "Blød men støttende. Perfekt til lag-på-lag.",
        image: img5,
      },
      {
        name: "Everyday Wide Pants",
        description: "Afslappet luksus – hun har dem på overalt.",
        image: img2,
      },
    ],
  },
];

// Funktionel komponent, der viser et ambassadør-galleri med mulighed for at åbne detaljeret visning
const AmbassadorHighlight = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Holder styr på hvilken ambassadør er aktiv

  // Toggler visning af dropdown ved klik
  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Lukker dropdown hvis der klikkes udenfor komponenten
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".ambassador-dropdown-wide") &&
        !e.target.closest(".ambassador-button")
      ) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="ambassador-section">
      {/* Sektionstitel */}
      <h2 className="ambassador-title">Meet Our Ambassadors</h2>

      {/* Galleri med ambassadør-knapper (billede + navn) */}
      <div className="ambassador-grid">
        {ambassadors.map((amb, index) => (
          <div key={index} className="ambassador-card">
            <button
              onClick={() => toggleDropdown(index)}
              className="ambassador-button"
              aria-expanded={activeIndex === index}
            >
              <img src={amb.image} alt={amb.name} className="ambassador-image" />
              <p className="ambassador-name">{amb.name}</p>
            </button>
          </div>
        ))}
      </div>

      {/* Udvidet dropdown med detaljer om aktiv ambassadør */}
      {activeIndex !== null && (
        <div className="ambassador-dropdown-wide">
          <div className="ambassador-dropdown-content">
            {/* Venstre kolonne: bio, intro og Instagram-link */}
            <div className="ambassador-left">
              <p className="ambassador-bio">{ambassadors[activeIndex].bio}</p>
              <p className="ambassador-intro">
                Her er deres go-to styles til hverdagsbevægelse – udvalgt til at matche deres personlighed og pace.
              </p>
              <a
                href={ambassadors[activeIndex].instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="ambassador-link"
              >
                → Følg på Instagram
              </a>
            </div>

            {/* Højre kolonne: styles med billede, beskrivelse og CTA-knap */}
            <div className="ambassador-right">
              {ambassadors[activeIndex].styles.map((style, i) => (
                <div className="style-card" key={i}>
                  <img src={style.image} alt={style.name} className="style-image" />
                  <div className="style-info">
                    <p className="style-name">{style.name}</p>
                    <p className="style-description">{style.description}</p>
                  </div>
                  <button className="style-cta">Shop style</button>
                </div>
              ))}
            </div>
          </div>

          {/* Knap til at se alle ambassadører (kan senere linkes til separat side) */}
          <div className="view-all-container">
            <button className="view-all-btn">View all ambassadors</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AmbassadorHighlight;
