import React from "react";
import "../styles/announcementbar.css"; // Import af tilknyttet CSS-styling

// Funktionel komponent, der viser en fast besked øverst på siden (f.eks. kampagne- eller fragtinfo)
const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      Free shipping on all orders over 499 DKK – YAY 🐣
    </div>
  );
};

export default AnnouncementBar;
