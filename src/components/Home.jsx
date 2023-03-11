import React from "react";
import NavBar2 from "./NavBar2";
import Hero2 from "./Hero2";
import SocialMedia from "./SocialMedia";
import Contact2 from "./Contact2";
import Footer from "./Footer";
import Gallery from "./Gallery";

import NosValeurs from "./NosValeurs";
import Forma2 from "./Forma2";
import Langue2 from "./Langue2"

const Home = () => {
  return (
    <div>
      <div id="navbar2">
        <NavBar2 />
      </div>
      <div id="hero">
        <Hero2 />
      </div>
      <NosValeurs />
   <div>
    <Forma2 id="formation"/>
   </div>

      <div id="langue">
        <Langue2 />
      </div>

      
      <div id="gallery" className="gallery">
        <Gallery />
      </div>
      <div id="contact2">
        <Contact2 />
      </div>
      <SocialMedia />

      <Footer />
    </div>
  );
};

export default Home;
