import React, { useEffect, useState } from "react";
import "../../styles/CommunityStatsComponent.css"; // Import af komponentens tilhørende CSS
import ChatIcon from "../../assets/ikoner/6.svg";   // Ikon: tale-boble
import CameraIcon from "../../assets/ikoner/7.svg"; // Ikon: kamera
import FootIcon from "../../assets/ikoner/8.svg";   // Ikon: fodspor

// Statistiske data, der visualiserer fællesskabets omfang og engagement
const stats = [
  { icon: ChatIcon, number: 432, label: "members in our community" },
  { icon: CameraIcon, number: 289, label: "posts under #LipatiEveryday" },
  { icon: FootIcon, number: 4381, label: "steps run with us in April" },
];

// Komponent til visning af én statistik med tælleanimation
const StatCard = ({ icon, emoji, number, label }) => {
  const [count, setCount] = useState(0);

  // useEffect hook anvendes til at animere tallet fra 0 til det angivne antal
  useEffect(() => {
    let start = 0;
    const end = number;
    const duration = 1000; // samlet varighed i millisekunder
    const stepTime = Math.max(Math.floor(duration / end), 10); // beregner intervallet mellem opdateringer

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer); // stop når målet er nået
    }, stepTime);

    return () => clearInterval(timer); // oprydning ved unmount
  }, [number]);

  return (
    <div className="stat-card">
      {/* Viser ikon eller emoji */}
      {icon ? (
        <img src={icon} alt="icon" className="stat-icon" />
      ) : (
        <span className="emoji">{emoji}</span>
      )}
      {/* Animeret tal og beskrivende tekst */}
      <p className="stat-number">{count.toLocaleString()}</p>
      <p className="stat-label">{label}</p>
    </div>
  );
};

// Wrapper-komponent, der renderer alle statistik-kort
const StatsComponent = () => {
  return (
    <section className="stats-section">
      <div className="stats-wrapper">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            emoji={stat.emoji}
            number={stat.number}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsComponent;
