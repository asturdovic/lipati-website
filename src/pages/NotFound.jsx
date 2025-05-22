import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css"; // Import af tilknyttet styling

// Funktionel komponent, der håndterer fejlsider (404) ved ugyldige URL’er
const NotFound = () => {
  return (
    <div className="notfound-wrapper">
      {/* Stor visuel markering af fejlkoden */}
      <h1 className="outline-404">404</h1>

      {/* Brand-typisk humoristisk besked som underoverskrift */}
      <p className="notfound-sub">You move fast. Our dev didn’t.</p>

      {/* CTA tilbage til forsiden */}
      <Link to="/" className="return-link">
        Return to movement →
      </Link>
    </div>
  );
};

export default NotFound;
