import React from 'react'
import Navbar from './Navbar';
import Hero from  './Hero';
import SocialMedia from './SocialMedia';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Gallerie from './Gallerie';

const Home = () => {
  return (
    <div>
<Navbar/>
<Hero/>
<SocialMedia/>


<div id="gallerie">
        <Gallerie />
      </div>
      <div id="contact">
      <ContactUs/>
      </div>
<Footer/>
    </div>
  )
}

export default Home