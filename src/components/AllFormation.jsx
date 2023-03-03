import React , { useState }from 'react'
import Contact2 from "./Contact2";
import Footer from './Footer';
import NavBar2 from "./NavBar2";
import { Link } from "react-router-dom";


const AllFormation = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleClick = (language) => {
    setSelectedLanguage(language);
  };
  return (
    <div>
 <div className='AllNav'><NavBar2 /></div>

 <div className="container">

 <div className='row '>
        <div className='TitreCertif'><h1 ><span>M</span>anagement</h1></div>
        
        </div>
        

        <div className="row row-cols-1 row-cols-md-3 g-3">

<div className="col">
<div className="card">
<img src="images/compta.png" className="card-img-top" alt="Ima"/>
<div className="card-body">
<h5 className="card-title">Comptabilité et management</h5>
<p className="card-text"></p>
<Link to="/details/compta">
<button onClick={() => handleClick('compta')} className="btnSeeAll">Détails &#187;</button>
</Link>
</div>
</div>
</div>

<div className="col">
<div className="card">
<img src="images/PME.png" className="card-img-top" alt="Ima"/>
<div className="card-body">
  <h5 className="card-title">Management des PME</h5>
  <p className="card-text"></p>
  <Link to="/details/management">
  <button onClick={() => handleClick('management')} className="btnSeeAll">Détails &#187;</button>
  </Link>
</div>
</div>
</div>

<div className="col">
<div className="card">
<img src="images/qualité.png" className="card-img-top" alt="Ima"/>
<div className="card-body">
  <h5 className="card-title">Responsable qualité</h5>
  <p className="card-text"></p>
  <Link to="/details/qualité">
  <button onClick={() => handleClick('qualité')} className="btnSeeAll">Détails &#187;</button>
  </Link>
</div>
</div>
</div>
</div>

        <div className='row '>
        <div className='TitreCertif'><h1 ><span>I</span>nformatique</h1></div>
        
        </div>
        
        <div className="row row-cols-1 row-cols-md-3 g-3">

<div className="col">
<div className="card">
<img src="images/digital.png" className="card-img-top" alt="Ima"/>
<div className="card-body">
<h5 className="card-title">Marketing digital</h5>
<p className="card-text"></p>
<Link to="/details/marketing">
<button onClick={() => handleClick('marketing')} className="btnSeeAll">Détails &#187;</button>
</Link>
</div>
</div>
</div>

<div className="col">
<div className="card">
<img src="images/bureau.png" className="card-img-top" alt="Ima"/>
<div className="card-body">
  <h5 className="card-title">Informatique bureatique</h5>
  <p className="card-text"></p>
  <Link to="/details/bureautique">
  <button onClick={() => handleClick('bureautique')} className="btnSeeAll">Détails &#187;</button>
  </Link>
</div>
</div>
</div>


</div>
    







</div>
<Contact2/>
<Footer/>
</div>
  )
}

export default AllFormation