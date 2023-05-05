import React from "react";
import { useState } from "react";
import Nav from "../assets/nav.png";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="slider">
      {slides.length > 1 && (
        <div className="slider-nav">
          <img
            src={Nav}
            alt="prev-slide"
            className="nav-left"
            onClick={goToPreviousSlide}
          />
          <img
            src={Nav}
            alt="next-slide"
            className="nav-right"
            onClick={goToNextSlide}
          />
        </div>
      )}
      {slides.length > 1 && (
        <div className="counter">
          {currentSlide + 1}/{slides.length}
        </div>
      )}
      <div className="slider-content">
        <img
          className="slider-img"
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide}`}
        />
      </div>
    </div>
  );
};

export default Carousel;
