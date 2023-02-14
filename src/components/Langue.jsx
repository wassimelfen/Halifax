import React from 'react'
import {langues} from './DataLangue'
import SingleFormation from './SingleFormation'
import { Link} from "react-router-dom";
import Slider from "react-slick";
const Formations = () => {
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
//let propsData = formation;
return (
  
  <div className="Langue">
<div>
  <h1 className='langueTitle'>Langues</h1>
</div>
<div className='line'></div>
    
    <Slider {...settings}>
    {langues.map(item=>(
    <SingleFormation  data={item}/>
    ))}
    </Slider>

    <div>
    <Link to="/AllLangue">
          <button className='btnSeeAll'>Toutes nos formations </button>
          </Link> 
    </div>
      
  </div>
  
)


/*
return (
  <div className='container'>
    <div className='row'>
    
      <div className='col-md-4'><SingleFormation data={propsData[0]}/></div>
      <div className='col-md-4'><SingleFormation data={propsData[1]}/></div>
      <div className='col-md-4'><SingleFormation data={propsData[2]}/></div>
  
      <Link to="/AllFormation">
          <button className='btnSeeAll'>Toutes nos formations</button>
          </Link>
    </div>
  </div>
  
  )*/
   
}

export default Formations