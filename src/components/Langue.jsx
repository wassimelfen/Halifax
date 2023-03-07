import React from "react";
import { langues } from "./DataLangue";
import SingleFormation from "./SingleFormation";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

const Formations = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="Langue">
      <div>
        <h1 className="langueTitle">Langues</h1>
      </div>
      <div className="line"></div>

      <div className="langueContainer">
        <Slider {...settings} >
          {langues.map((item, index) => (
            <SingleFormation key={index} data={item} />
          ))}
        </Slider>
      </div>
      <br></br>
      <div>
        <Link to="/AllLangue">
          <button className="hbtn hb-fill-right">
            Toutes Nos Langues &#187;
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Formations;
