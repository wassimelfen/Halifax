import React, { useState } from 'react'
import { formation } from "./DataAllFormation";
import { Link } from "react-router-dom";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SingleFormation from './SingleFormation';
const Forma2 = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleClick = (language) => {
    setSelectedLanguage(language);
  };
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1024, min: 800},
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='forma2'>
        <div>
        <h1 className="langueTitle">Formations</h1>
      </div>
      <div className="line"></div>
<Carousel responsive={responsive}>
{formation.map((item, index) => (
    <div className='carte' key={index}>
    <img
    src={item.image}
    className="cartepic"
    alt={item.title}
    />
    <h3 className="cartetitre">{item.title}</h3>
    <Link to={`/details/${item.language}`}>
                  <button
                    onClick={() => handleClick(item.language)}
                    className="btnSeeAll"
                  >
                    Détails &#187;
                  </button>
    </Link>
  </div>
  ))}
 
</Carousel>
<br />
      <Link to="/AllFormation">
        <button className="btnSeeAll">
          Toutes les formations &#187;
        </button>
      </Link>
    </div>
  )
}

export default Forma2