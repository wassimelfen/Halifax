import React from "react";
import { Carousel } from "react-bootstrap";
import mobileSlide1 from "../caro1.jpg";
import mobileSlide2 from "../woman.png";
import desktopSlide1 from "../caro3.jpg";
import desktopSlide2 from "../caro2.jpg";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Hero2 = () => {
  const navigate = useNavigate();

  function handleLangueButtonClick() {
    navigate("/AllLangue");
  }

  function handleFormationButtonClick() {
    navigate("/AllFormation");
  }

  return (
    <Carousel interval={3000} fade={true} className="hero-carousel">
      <Carousel.Item className="hero-carousel-item">
        <img
          className="hero-carousel-img d-block d-md-none w-100"
          src={mobileSlide1}
          alt="First mobile slide"
        />
        <img
          className="hero-carousel-img d-none d-md-block w-100"
          src={desktopSlide1}
          alt="First desktop slide"
        />
        <Carousel.Caption className="carouselCaption">
          <p className="hero-carousel-text">
            Donnez un coup de pouce à vos compétences grâce à nos formations
            expert
          </p>
          <button
            className="hero-carousel-button"
            onClick={handleLangueButtonClick}
          >
            Langues
          </button>
          <button
            className="hero-carousel-button"
            onClick={handleFormationButtonClick}
          >
            Formations
          </button>
        </Carousel.Caption>
        <Carousel.Caption className="carouselCaptionMobile">
          <p className="hero-carousel-text2-0">
            Rejoignez nos programmes de formation complets pour atteindre votre
            plein potentiel
          </p>
          <button
            className="hero-carousel-button2"
            onClick={handleLangueButtonClick}
          >
            Langues
          </button>
          <button
            className="hero-carousel-button2"
            onClick={handleFormationButtonClick}
          >
            Formations
          </button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="hero-carousel-item">
        <img
          className="hero-carousel-img d-block d-md-none w-100"
          src={mobileSlide2}
          alt="First mobile slide"
        />
        <img
          className="hero-carousel-img d-none d-md-block w-100"
          src={desktopSlide2}
          alt="First desktop slide"
        />
        <Carousel.Caption className="carouselCaption2">
          <p className="hero-carousel-text3">
            Rejoignez nos programmes de formation complets pour atteindre votre
            plein potentiel
          </p>
          <button
            className="hero-carousel-button2"
            onClick={handleLangueButtonClick}
          >
            Langues
          </button>
          <button
            className="hero-carousel-button2"
            onClick={handleFormationButtonClick}
          >
            Formations
          </button>
        </Carousel.Caption>
        <Carousel.Caption className="carouselCaptionMobile2">
          <p className="hero-carousel-text2">
            Donnez un coup de pouce à vos compétences grâce à nos formations
            expert
          </p>
          <button
            className="hero-carousel-button2"
            onClick={handleLangueButtonClick}
          >
            Langues
          </button>
          <button
            className="hero-carousel-button2"
            onClick={handleFormationButtonClick}
          >
            Formations
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero2;
