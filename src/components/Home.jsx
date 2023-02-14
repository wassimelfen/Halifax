import React from 'react'
import Navbar from './Navbar';
import Hero from  './Hero';
import SocialMedia from './SocialMedia';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Galerie from './Galerie';
import Formation from './Formation';
import Langue from './Langue';
import NosValeurs from './NosValeurs';

const Home = () => {
  return (
    <div>
<Navbar/>
<div id="hero">
        <Hero />
      </div>
<NosValeurs/>
<div id="langue">
        <Langue />
      </div>

<div id="formation">
        <Formation />
      </div>
<div id="galerie">
        <Galerie />
      </div>
<div id="contact">
      <ContactUs/>
      </div>
<SocialMedia/>
<Footer/>
    </div>
  )
}

export default Home