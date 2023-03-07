import React, { useState } from 'react'
import { langues } from "./DataAllLangue";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Langue2 = () => {
  
  
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
        <h1 className="langueTitle">Langues</h1>
      </div>
      <div className="line"></div>
<Carousel responsive={responsive} >
{langues.map((item, index) => (
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
 <div>
 <div className='carte' >
      
      <img
      src="/images/A11.png"
      className="cartepic"
      alt="allemand"
      />
      <h3 className="cartetitre">Apprendre l'allemand</h3>
  
      <Link to="/Allemand">
      
    <button className="btncarte" > Détails &#187;</button>
    
  </Link>
  
    
  </div>
  



 </div>
</Carousel>
<br />
      <Link to="/AllFormation">
        <button className="btnSeeAll">
          Toutes les langues &#187;
        </button>
      </Link>
    </div>
  )
}

export default Langue2