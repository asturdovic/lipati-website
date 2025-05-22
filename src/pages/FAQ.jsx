import React, { useState } from "react";
import "../styles/FAQ.css"; // Import af komponentens tilknyttede styling

// Array med spørgsmål og svar, brugt til at generere FAQ-sektionen dynamisk
const faqData = [
  {
    question: "How long does delivery take with Lipati?",
    answer: "Delivery within Denmark typically takes 1–3 business days. For Greenland and the Faroe Islands, it may take 4–10 business days depending on your location and local carrier schedules.",
  },
  {
    question: "Which countries does Lipati ship to?",
    answer: "We currently ship to Denmark, Greenland, and the Faroe Islands. Want Lipati in your country? Let us know – we’re always exploring new territories.",
  },
  {
    question: "How much is shipping for Lipati orders?",
    answer: "Shipping within Denmark costs DKK 35–49, depending on delivery method. Orders over DKK 1,000 get free parcel shop delivery. Greenland & Faroe Islands: DKK 125–200 via PostNord tracked service.",
  },
  {
    question: "Can I track my Lipati order?",
    answer: "Yes – as soon as your order is on the move, you’ll receive a tracking number via email or SMS. We’ll keep you in the loop from warehouse to doorstep.",
  },
  {
    question: "What is Lipati’s return policy?",
    answer: "You have 30 days to return your order – no questions asked. Items must be unused and in original condition. Refunds are processed within 3–5 business days after we receive your return.",
  },
  {
    question: "How do I exchange a product from Lipati?",
    answer: "To make an exchange, simply return your item and place a new order with your desired size or color. We currently don’t offer direct exchanges through the system.",
  },
  {
    question: "Are Lipati sizes true to fit?",
    answer: "Most of our styles fit true to size, but we always recommend checking our size guide for exact measurements. Prefer a looser or tighter fit? Size up or down depending on your vibe.",
  },
  {
    question: "Is Lipati clothing unisex?",
    answer: "Yes! Many of our styles are designed to be worn by anyone – movement doesn’t come in one shape or gender. Just find what feels right on your body.",
  },
  {
    question: "How do I wash and care for my Lipati clothes?",
    answer: "Wash cold at 30°C, skip the fabric softener, and let your pieces air dry. It’s better for the planet – and your clothes.",
  },
  {
    question: "What are Lipati clothes made of?",
    answer: "We use a mix of high-performance fabrics with a soft feel. Wherever possible, we choose materials that are durable, breathable, and lower impact.",
  },
  {
    question: "Are Lipati products sustainable?",
    answer: "We're not perfect, but we’re progressing. From better materials and smaller batch production to more conscious packaging – sustainability is a constant journey, not a checkbox.",
  },
  {
    question: "Where is Lipati sportswear produced?",
    answer: "Our styles are developed in Denmark and produced in Europe, with a strong focus on responsible partnerships and transparent supply chains.",
  },
  {
    question: "How can I contact Lipati customer service?",
    answer: "You can email us at hello@lipati.com or reach out via Instagram DMs. We're here Monday–Friday and always happy to help.",
  },
  {
    question: "What does 'For the Everyday Pace' mean?",
    answer: "It’s our way of saying: movement isn’t one-size-fits-all. Whether you’re running, stretching, walking, or just resting – Lipati is for your rhythm, not the race.",
  },
  {
    question: "Can I become a Lipati ambassador?",
    answer: "We love working with people who share our movement mindset. Keep an eye on our Community page or reach out via DM if you’re interested – we’d love to hear your story.",
  }
];

// Funktionel komponent, der viser en FAQ-sektion med togglende spørgsmål og svar
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // State til at styre åbent spørgsmål

  // Funktion til at åbne/lukke en specifik FAQ-post
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      {/* Introduktionstekst til FAQ-sektionen */}
      <div className="faq-header">
        <p className="faq-subtitle">Need help?</p>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-description">
          We've got answers to your most common questions. If you still wonder about something, hit us up anytime.
        </p>
      </div>

      {/* Dynamisk rendering af alle spørgsmål og svar som accordion */}
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
