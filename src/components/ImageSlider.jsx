import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css"; // Swiper core styles
import "swiper/css/free-mode"; // Free mode module styles
import "../styles/imageSlider.css"; // Komponentens specifikke styling

// Import af billeder anvendt i slideren
import womenImg from "../assets/images/women1.jpg";
import menImg from "../assets/images/men2.jpg";
import newsImg from "../assets/images/news1.jpg";

// Funktionel komponent, der viser en horisontal billedslider med SwiperJS
const ImageSlider = () => {
  return (
    <div className="image-slider-wrapper">
      <Swiper
        slidesPerView="auto"         // Viser så mange slides som der er plads til
        spaceBetween={0}            // Ingen afstand mellem slides
        freeMode={true}             // Mulighed for fri scroll uden snap
        grabCursor={true}           // Ændrer cursoren ved hover
        modules={[FreeMode]}        // Aktiverer FreeMode-funktionalitet
        className="image-slider"
      >
        {/* Hver SwiperSlide repræsenterer en kategori med billede og tekst */}
        <SwiperSlide className="custom-slide">
          <img src={womenImg} alt="Women" />
          <div className="slide-text">WOMEN</div>
        </SwiperSlide>

        <SwiperSlide className="custom-slide">
          <img src={menImg} alt="Men" />
          <div className="slide-text">MEN</div>
        </SwiperSlide>

        <SwiperSlide className="custom-slide">
          <img src={newsImg} alt="News" />
          <div className="slide-text">NEWS</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
