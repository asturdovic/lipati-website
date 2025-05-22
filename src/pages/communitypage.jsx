import React from "react";

// Import af individuelle komponenter til community-siden
import CommunityHero from "../components/community/CommunityHero";
import CommunityIntro from "../components/community/CommunityIntro";
import CommunityEvents from "../components/community/CommunityEvents";
import CommunitySocialFeed from "../components/community/CommunitySocialFeed";
import CommunityManifest from "../components/community/CommunityManifest";
import CommunitySignup from "../components/community/CommunitySignup";
import CommunityQuoteSection from "../components/community/CommunityQuoteSection";
import CommunityStatsComponent from "../components/community/CommunityStatsComponent";

// Samlet sidekomponent, der renderer alle community-relaterede sektioner i rækkefølge
const CommunityPage = () => {
  return (
    <div className="community-page">
      {/* Visuel introsektion (hero) med baggrundsbillede */}
      <CommunityHero />

      {/* Kommende events i Lipatis fællesskab */}
      <CommunityEvents />

      {/* Introduktion til Lipatis community-filosofi */}
      <CommunityIntro />

      {/* Statements, der forstærker brandværdier og identitet */}
      <CommunityQuoteSection />

      {/* Billeder og brugergenereret indhold fra sociale medier */}
      <CommunitySocialFeed />

      {/* Statistisk visning af engagement og aktivitet */}
      <CommunityStatsComponent />

      {/* Manifest-sektion med værdier og interaktiv quiz */}
      <CommunityManifest />

      {/* Sektion med nyhedsbrevstilmelding og brugerengagement */}
      <CommunitySignup />
    </div>
  );
};

export default CommunityPage;
