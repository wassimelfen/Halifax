import React from 'react'

const Hero2 = () => {
  return (
    <div className='hero2-container'>
    <div className="hero-slide" style={{backgroundImage: "url(slide1.jpg) linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"}}>
    <div className="hero-text">
      <h1>Halifax !</h1>
      <p>Rejoignez nos programmes de formation complets pour atteindre votre plein potentiel</p>
      <button className="btnHero">Découvrez Nos Formations &#187;</button>
    </div>
  </div>

  <div className="hero-slide" style={{backgroundImage: "url(slide2.jpg)"}}>
    <div className="hero-text">
      <h1>Halifax !</h1>
      <p>Accélérez votre carrière avec nos solutions de formation innovantes</p>
      <button className="btnHero">Découvrez Nos Formations &#187; </button>
    </div>
  </div>

  <div className="hero-slide" style={{backgroundImage: "url(slide1.jpg)"}}>
    <div className="hero-text">
      <h1>Halifax !</h1>
      <p>Donnez un coup de pouce à vos compétences grâce à nos formations expert</p>
      <button className="btnHero ">Découvrez Nos Formations &#187;</button>
    </div>
  </div>
  </div>
  )
}

export default Hero2