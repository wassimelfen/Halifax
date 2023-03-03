import React from "react";
import { Carousel } from "react-bootstrap";
import mobileSlide1 from "../mobile10.png";
import mobileSlide2 from "../mobile11.png";
import desktopSlide1 from "../slide1010.png";
import desktopSlide2 from "../slide1111.png";
import "../App.css";

const Hero2 = () => {
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
          <h3 className="hero-carousel-title">Halifax</h3>
          <p className="hero-carousel-text">
            Rejoignez nos programmes de formation complets pour atteindre votre
            plein potentiel
          </p>
          <button className="hero-carousel-button">Voir Nos Langues</button>
          <button className="hero-carousel-button">Voir Nos Formations</button>
        </Carousel.Caption>
        <Carousel.Caption className="carouselCaptionMobile">
          <h3 className="hero-carousel-title">Halifax</h3>
          <p className="hero-carousel-text2">
            Rejoignez nos programmes de formation complets pour atteindre votre
            plein potentiel
          </p>
          <button className="hero-carousel-button2">Voir Nos Langues</button>
          <button className="hero-carousel-button2">Voir Nos Formations</button>
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
          <h3 className="hero-carousel-title">Halifax</h3>
          <p className="hero-carousel-text2">
            Rejoignez nos programmes de formation complets pour atteindre votre
            plein potentiel
          </p>
          <button className="hero-carousel-button2">Voir Nos Langues</button>
          <button className="hero-carousel-button2">Voir Nos Formations</button>
        </Carousel.Caption>
        <Carousel.Caption className="carouselCaptionMobile2">
          <h3 className="hero-carousel-title">Halifax</h3>
          <p className="hero-carousel-text2">
            Rejoignez nos programmes de formation complets pour atteindre votre
            plein potentiel
          </p>
          <button className="hero-carousel-button2">Voir Nos Langues</button>
          <button className="hero-carousel-button2">Voir Nos Formations</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero2;
