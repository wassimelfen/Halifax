
// Component B
import React from 'react';
import {formation} from './Data';
import { useParams } from 'react-router-dom';
import NavBar2 from "./NavBar2";
import Footer from './Footer';
import Contact2 from "./Contact2";

const Details = () => {
  const { language } = useParams();
  const filteredData = formation.filter((item) => item.language === language);

  return (
    <div>
      <div className='AllNav'>
        <NavBar2 />
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            {filteredData.map((item) => (
              <div key={item.id} className='card'>
                <img src={item.image} alt={item.title} className='card-img-top' />
                <div className='card-body'>
                  <h3 className='card-title'>{item.title}</h3>
                  <p className='card-text' dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
              </div>
            ))}
          </div>
          <div className='col-md-3'></div>
        </div>
      </div>

      <Contact2/>

      <Footer/>
    </div>
  );
};

export default Details