import React from "react";
import NavBar2 from "./NavBar2";
import Hero2 from "./Hero2";
import SocialMedia from "./SocialMedia";
import Contact2 from "./Contact2";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Formation from "./Formation";
import Langue from "./Langue";
import NosValeurs from "./NosValeurs";

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
      <div id="langue">
        <Langue />
      </div>

      <div id="formation">
        <Formation />
      </div>
      <div id="gallery">
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
