import React, { useState } from "react";
import "../../styles/CommunityManifest.css"; // Import af komponentens tilknyttede CSS
import DanceIcon from "../../assets/ikoner/2.svg";
import HeadphonesIcon from "../../assets/ikoner/3.svg";
import TurtleIcon from "../../assets/ikoner/4.svg";
import LockIcon from "../../assets/ikoner/5.svg";

// Data til quizsektionen – hver valgmulighed repræsenterer en type bevægelse med tilhørende ikon
const quizOptions = [
  { label: "I walk with podcasts", icon: HeadphonesIcon, isImage: true },
  { label: "I dance in my living room", icon: DanceIcon, isImage: true },
  { label: "I run slow, and that’s fine", icon: TurtleIcon, isImage: true },
];

// Data til manifest-sektionen – tre kerneværdier med titel og beskrivende tekst
const manifestValues = [
  {
    title: "Movement is personal",
    content:
      "Movement isn't a race. It’s rhythm, a whisper, a choice to show up — again and again.",
  },
  {
    title: "Rest is productive",
    content:
      "At Lipati, we believe in redefining performance. In resting without guilt. In slow jogs, side stitches and belly laughs.",
  },
  {
    title: "Community is powerful",
    content:
      "You don’t have to move fast to be going somewhere. You just have to move like you.",
  },
];

// Funktionel komponent, der kombinerer quiz-baseret interaktion med visning af brandets værdier
const CommunityManifest = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null); // Gemmer valgt quiz-option
  const [unlocked, setUnlocked] = useState([]); // Holder styr på hvilke manifest-værdier der er “låst op”

  // Tilføjer et manifestkort til listen over "unlocked" kort ved klik
  const handleUnlock = (index) => {
    if (!unlocked.includes(index)) {
      setUnlocked((prev) => [...prev, index]);
    }
  };

  return (
    <section className="manifest-section">
      {/* Quizsektion med valg af bevægelsestype */}
      <div className="quiz-wrapper">
        <h2>Discover your pace</h2>
        <p className="quiz-question">Which kind of movement fits you best?</p>
        <div className="quiz-options">
          {quizOptions.map((option, index) => (
            <button
              key={index}
              className={`quiz-option ${
                selectedQuiz === index ? "selected" : ""
              }`}
              onClick={() => setSelectedQuiz(index)}
            >
              {option.isImage ? (
                <img src={option.icon} alt="icon" className="icon-img" />
              ) : (
                <span className="emoji">{option.icon}</span>
              )}
              {option.label}
            </button>
          ))}
        </div>

        {/* Feedbacktekst, der vises efter valg */}
        {selectedQuiz !== null && (
          <p className="quiz-response">
            You move in your own rhythm. That’s the Lipati way.
          </p>
        )}
      </div>

      {/* Manifest-sektion med klikbare kort, der låses op ét ad gangen */}
      <div className="manifest-unlock">
        <h3>Our Manifest</h3>
        <div className="manifest-values">
          {manifestValues.map((value, index) => (
            <div
              key={index}
              className={`manifest-card ${
                unlocked.includes(index) ? "unlocked" : ""
              }`}
              onClick={() => handleUnlock(index)}
            >
              {/* Titel med ikon, der ændrer stil ved oplåsning */}
              <div className="card-title">
                <img
                  src={LockIcon}
                  alt="Lock Icon"
                  className={`lock-icon ${
                    unlocked.includes(index) ? "unlocked" : ""
                  }`}
                />
                {value.title}
              </div>

              {/* Indhold vises kun, hvis kortet er oplåst */}
              {unlocked.includes(index) && (
                <p className="card-content">{value.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityManifest;
