import React from 'react'
import { Link } from "react-router-dom";
const Hero2 = () => {
  return (
    <div className='hero2-container'>
    <div className="hero-slide" style={{backgroundImage: "url(slide1.jpg) linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"}}>
    <div className="hero-text">
      <h1>Halifax !</h1>
      <p>Rejoignez nos programmes de formation complets pour atteindre votre plein potentiel</p>
      <Link to="/AllLangue">
        <button className="btnHero">Découvrez nos formations &#187;</button>
      </Link>
    </div>
  </div>

  <div className="hero-slide" style={{backgroundImage: "url(slide2.jpg)"}}>
    <div className="hero-text">
      <h1>Halifax !</h1>
      <p>Accélérez votre carrière avec nos solutions de formation innovantes</p>
      <Link to="/AllLangue">
        <button className="btnHero">Découvrez nos formations &#187;</button>
      </Link>
    </div>
  </div>

  <div className="hero-slide" style={{backgroundImage: "url(slide1.jpg)"}}>
    <div className="hero-text">
      <h1>Halifax !</h1>
      <p>Donnez un coup de pouce à vos compétences grâce à nos formations expert</p>
      <Link to="/AllLangue">
        <button className="btnHero">Découvrez nos formations &#187;</button>
      </Link>
    </div>
  </div>
  </div>
  )
}

export default Hero2