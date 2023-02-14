
import React from "react";
import Slider from "react-slick";
import {formation} from './DataFormation'
import { Link} from "react-router-dom";

const Langues = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    
    <div className="Langue">

      <Slider {...settings}>
      {formation.map(item=>(
      <div className="langCard">
      <div className="langCardTop">
      <img src={item.image} className="langpic" alt={item.title}/>
      <h3>{item.title}</h3>
      </div>
      <div className="langCardBottom">
      <p>{item.description}</p>
      </div>
      </div> 
      ))}
      </Slider>
      <Link to="/AllFormation">
          <button className='btnSeeAll'>Toutes nos formations</button>
          </Link>    
    </div>
  )
}

export default Langues