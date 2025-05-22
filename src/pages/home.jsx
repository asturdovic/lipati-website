import React from "react";
import Hero from "../components/hero";
import FeaturedProducts from "../components/FeaturedProducts";
import ScrollBanner from "../components/ScrollBanner";
import ProductSpotlight from "../components/ProductSpotlight";
import AmbassadorHighlight from "../components/AmbassadorHighlight";

// Funktionel komponent, der definerer forsiden og samler relevante sektioner i visuel rækkefølge
const Home = () => {
  return (
    <>
      <div className="main-content">
        {/* Hero-sektion: visuel intro med branding og stemning */}
        <Hero />

        {/* Ambassadør-feature: klikbar komponent med influencers og udvalgte styles */}
        <AmbassadorHighlight />

        {/* Første sektion med fremhævede produkter i scrollbart layout */}
        <FeaturedProducts />

        {/* Scrollende kampagnebanner med tilbud eller budskaber */}
        <ScrollBanner />

        {/* Spotlight-komponent: fokuseret præsentation af ét produkt */}
        <ProductSpotlight />

        {/* Ekstra scrollbanner for rytme og visuel variation */}
        <ScrollBanner />

        {/* Ny sektion med fremhævede produkter (genbrug af komponent for kontinuitet) */}
        <FeaturedProducts />
      </div>

      {/* Midt-på-siden: visuel sektion til evt. bannerbillede eller kampagne */}
      <section className="full-width-banner" />

      {/* Yderligere gentagelse af produktfokus for at understøtte brugsmønstre */}
      <FeaturedProducts />
    </>
  );
};

export default Home;
