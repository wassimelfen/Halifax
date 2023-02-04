import React from 'react'
import Navbar from './Navbar';
import Hero from  './Hero';
import SocialMedia from './SocialMedia';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Galerie from './Galerie';

const Home = () => {
  return (
    <div>
<Navbar/>
<Hero/>
<SocialMedia/>


<div id="galerie">
        <Galerie />
      </div>
      <div id="contact">
      <ContactUs/>
      </div>
<Footer/>
    </div>
  )
}

export default Home