import React, { useState } from "react";
import "../../styles/CommunitySignup.css"; // Import af komponentens tilknyttede CSS
import EnvelopeIcon from "../../assets/ikoner/1.svg"; // Ikon anvendt i overskriften

// Funktionel komponent med simpelt signup-flow til nyhedsbrev
const CommunitySignup = () => {
  const [submitted, setSubmitted] = useState(false); // State til at håndtere form-feedback

  // Simuleret form-submission (uden backend)
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Midlertidig bekræftelse – resetter efter 3 sekunder
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="community-signup">
      {/* Sektionstitel med ikon */}
      <h2>
        Stay in the loop{" "}
        <img src={EnvelopeIcon} alt="envelope icon" className="inline-icon" />
      </h2>

      {/* Introduktionstekst med fokus på tone-of-voice og transparens */}
      <p>
        Sign up to get news, drops and everyday encouragements. We only send what we’d open ourselves.
      </p>

      {/* Form-element med inputfelt og submit-knap */}
      <form className="signup-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Your email" required />
        <button type="submit" disabled={submitted}>
          {submitted ? "Thanks!" : "Join"}
        </button>
      </form>

      {/* Ekstra brugerinteraktion og note om nyhedsbrevet */}
      <div className="signup-extra">
        <label>
          <input type="checkbox" />
          <span>💫 I love email surprises</span>
        </label>
        <p className="disclaimer">No spam. Just vibes.</p>
      </div>
    </section>
  );
};

export default CommunitySignup;
