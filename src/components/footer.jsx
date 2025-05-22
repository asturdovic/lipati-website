import React, { useState } from "react";
import "../styles/footer.css"; // Import af komponentens tilhørende styling
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa"; // Social media ikoner
import logo from "../assets/images/Logo-lipati.png"; // Lipati logo

// Funktionel komponent, der renderer website-footeren med både desktop og mobil layout
const Footer = () => {
  const [openSection, setOpenSection] = useState(null); // State til at styre åbne accordion-sektioner på mobil

  // Funktion til at åbne/lukke mobil-sektioner
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="footer">
      <div className="footer-wrapper">

        {/* === DESKTOP LAYOUT === */}
        <div className="footer-columns desktop">
          {/* Kolonne: logo, adresse og sociale medier */}
          <div className="footer-col">
            <img src={logo} alt="Lipati Logo" className="footer-logo" />
            <p>© 2025 Lipati</p>
            <p>Hadstenvej 27</p>
            <p>8370 Hadsten</p>
            <p>Denmark</p>
            <div className="footer-socials">
              <a href="/not-found"><FaFacebookF /></a>
              <a href="/not-found"><FaInstagram /></a>
            </div>
          </div>

          {/* Kolonne: informationslinks om brandet */}
          <div className="footer-col">
            <h4>01 / LIPATI</h4>
            <ul>
              <li><a href="/not-found">About Us</a></li>
              <li><a href="/not-found">Contact</a></li>
              <li><a href="/not-found">Events</a></li>
            </ul>
          </div>

          {/* Kolonne: shop-relaterede links */}
          <div className="footer-col">
            <h4>02 / SHOP</h4>
            <ul>
            <li><Link to="/faq">FAQ</Link></li>
              <li><a href="/not-found">Shipping & Returns</a></li>
              <li><a href="/not-found">Size Guide</a></li>
              <li><a href="/not-found">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Kolonne: community-relaterede links */}
          <div className="footer-col">
            <h4>03 / COMMUNITY</h4>
            <ul>
              <li><a href="/not-found">Ambassadors</a></li>
              <li><a href="/not-found">Events</a></li>
              <li><a href="/not-found">Social Feed</a></li>
            </ul>
          </div>

          {/* Kolonne: nyhedsbrevstilmelding */}
          <div className="footer-col newsletter-inline">
            <h4>Join the Movement</h4>
            <form className="footer-form">
              <input type="email" placeholder="Email address" />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>

        {/* === MOBIL LAYOUT MED ACCORDIONS === */}
        <div className="footer-accordion mobile">
          {[
            {
              label: "01 / LIPATI",
              content: ["About Us", "Contact", "Events"],
            },
            {
              label: "02 / SHOP",
              content: ["FAQ", "Shipping & Returns", "Size Guide", "Privacy Policy"],
            },
            {
              label: "03 / COMMUNITY",
              content: ["Ambassadors", "Events", "Social Feed"],
            },
            {
              label: "JOIN THE MOVEMENT",
              content: [
                <form className="footer-form" key="form">
                  <input type="email" placeholder="Email address" />
                  <button type="submit">Sign Up</button>
                </form>
              ],
            },
          ].map((section, index) => (
            <div key={index} className="accordion-section">
              <button
                onClick={() => toggleSection(index)}
                className="accordion-toggle"
              >
                {section.label} <span>{openSection === index ? "−" : "+"}</span>
              </button>
              {openSection === index && (
                  <div className="accordion-content">
                   {section.content.map((item, idx) =>
                  typeof item === "string" ? (
                  <li key={idx}><Link to="/faq">{item}</Link></li>
                   ) : (
                   <div key={idx}>{item}</div>
                  )
                 )}

                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footerens bundsektion med CVR og sprogvalg */}
      <div className="footer-bottom">
        <p>CVR: 432417032 / All rights reserved</p>
        <div className="footer-lang">
          <span>🌍 Denmark</span>
          <span>DK</span>
          <span>EN</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
