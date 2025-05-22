import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Import af styling til navbar
import logo from "../assets/images/Logo-lipati.png"; // Logo billede
import promoImage from "../assets/images/women1.jpg"; // Billede brugt i dropdown
import { FiShoppingCart } from "react-icons/fi"; // Ikon: indkøbskurv
import { GiHamburgerMenu } from "react-icons/gi"; // Ikon: mobilmenu

// Funktionel komponent, der viser en responsiv navigation med dropdown-menuer på desktop
const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Aktiv dropdown-menu (kun desktop)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Tilstand for mobilmenu
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Skærmbredde tjek

  // Opdaterer skærmtilstand ved resizing af browser
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Håndterer mouseenter for dropdowns på desktop
  const handleMouseEnter = (menu) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <nav className="navbar" onMouseLeave={handleMouseLeave}>
      <div className="nav-container">
        {/* Logo med link til forsiden */}
        <div className="nav-left">
          <Link to="/">
            <img src={logo} alt="Lipati Logo" className="logo-img" />
          </Link>
        </div>

        {/* Navigation links – vises som liste eller burger afhængigt af viewport */}
        <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          {"MEN WOMEN ACCESSORIES COMMUNITY".split(" ").map((item) => (
            <li
              key={item}
              onMouseEnter={() => !isMobile && handleMouseEnter(item)}
              onClick={() => isMobile && setMobileMenuOpen(false)}
              className={activeDropdown === item ? "active" : ""}
            >
              <Link to={item === "COMMUNITY" ? "/community" : "/not-found"}>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Højre side: søgefelt og indkøbskurv på desktop, burger-menu på mobil */}
        <div className="nav-right">
          {!isMobile && (
            <>
              <input
                type="text"
                placeholder="Search..."
                className="nav-search"
              />
              <FiShoppingCart className="cart-icon" size={22} />
            </>
          )}
          {isMobile && (
            <GiHamburgerMenu
              size={24}
              className="hamburger-icon"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            />
          )}
        </div>
      </div>

      {/* Mega-menu dropdown – vises kun på desktop og kun for specifikke links */}
      {!isMobile && activeDropdown && activeDropdown !== "COMMUNITY" && (
        <div
          className={`mega-menu ${activeDropdown ? "active" : ""}`}
          onMouseEnter={() => handleMouseEnter(activeDropdown)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mega-menu-inner">
            {/* Kolonne 1: fremhævede produkter */}
            <div className="mega-column">
              <h4>{activeDropdown} Highlights</h4>
              <Link to="/not-found">T-Shirts</Link>
              <Link to="/not-found">Shorts</Link>
              <Link to="/not-found">Jackets</Link>
            </div>

            {/* Kolonne 2: andre kategorier */}
            <div className="mega-column">
              <h4>Shop by Category</h4>
              <Link to="/not-found">Accessories</Link>
              <Link to="/not-found">Footwear</Link>
              <Link to="/not-found">Outdoor</Link>
            </div>

            {/* Kolonne 3: ny kollektion med billede */}
            <div className="mega-column">
              <h4>New Collection</h4>
              <img src={promoImage} alt="Promo" className="dropdown-img" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
