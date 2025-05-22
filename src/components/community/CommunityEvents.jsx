import React from "react";
import "../../styles/CommunityEvents.css"; // Import af komponentens specifikke CSS-styling

// Liste med kommende events. Hvert objekt indeholder information til visning i UI.
const events = [
  {
    id: 1,
    title: "Sunset Run 🌇",
    description: "Casual 5K run followed by juice at the beach bar.",
    location: "📍 Aarhus Strand",
    date: "🕓 May 24, 18:00",
    isNext: true, // Marker det næste event i rækken
  },
  {
    id: 2,
    title: "Stretch & Sip 🧘‍♀️",
    description: "Morning yoga and matcha in the park.",
    location: "📍 Botanical Garden",
    date: "🕓 May 27, 09:00",
    isNext: false,
  },
  {
    id: 3,
    title: "Urban Hike 🏙️",
    description: "Explore hidden gems in the city with a fun-paced walk.",
    location: "📍 Aarhus C",
    date: "🕓 June 1, 17:00",
    isNext: false,
  },
  {
    id: 4,
    title: "Lazy Sunday Hangout 🍉",
    description: "Blankets, snacks, music – come chill with us.",
    location: "📍 Risskov Forest",
    date: "🕓 June 9, 14:00",
    isNext: false,
  },
];

// Funktionel komponent, der renderer en liste af community events
const CommunityEvents = () => {
  return (
    <section className="community-events">
      <h2>Upcoming Events</h2>

      <div className="events-grid">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            {/* Viser badge, hvis eventet er markeret som det næste i rækken */}
            {event.isNext && <span className="badge">Next up</span>}

            <h3>{event.title}</h3>
            <p>{event.description}</p>

            {/* Meta-information: sted og tidspunkt for eventet */}
            <div className="event-meta">
              <span>{event.location}</span>
              <span>{event.date}</span>
            </div>

            {/* CTA-knap til at tilmelde sig eventet */}
            <button className="event-btn">Join</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityEvents;
