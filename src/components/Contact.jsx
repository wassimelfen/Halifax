import React from 'react'
import NavBar2 from "./NavBar2";
import Contact2 from './Contact2';
import MapAdress from './MapAdress';
import Footer from './Footer';
import SocialMedia from './SocialMedia';
const Contact = () => {
  return (
    <div>
    <div className='AllNav'><NavBar2 /></div>
    <div className='container'>
    <div className='row'>
    <div className='col-md-12'>
    <Contact2/>
    </div>
    </div>

    <SocialMedia/>
    <div className='row map'>

    <div className='col-md-3'></div>
        
    
    <div className='col-md-6' >
    <MapAdress/>
    </div>
    <div className='col-md-3'></div>
    </div>
    </div>
    
    <Footer/>
    </div>
  )
}

export default Contact