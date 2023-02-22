import React from 'react'
import Navbar from "./Navbar";
const Certif = () => {
  return (
    
         <div>
    <div className='AllNav'><Navbar /></div>

    <div className="container EnglishCont">
   <h1 className='TitreCertif'><span>A</span>nglais</h1>
   <div className='boutonTestCertif'><a href='https://www.hueber.de/menschen/einstufungstest' target="_blank" rel="noreferrer"><button className='btnTest '>Testez votre niveau GRATUITEMENT !</button></a></div>
  <div className="row row-cols-1 row-cols-md-3 g-3">
    <div className="col">
      <div className="card">
        <img src="images/TOEIC.png" className="card-img-top ImageCertif" alt="Ima"/>
        <div className="card-body">
          <h5 className="card-title">IELTS preparation makes the difference </h5>
          <p className="card-text">Prepare for IELTS (International English Language Testing System) with the world’s English experts and you will:<br/><br/>-learn test taking strategies to help you maximise your result in the world’s most widely recognised English proficiency test<br/><br/>-have an expert teacher who knows all about the IELTS <br/><br/>-receive feedback on your strengths and areas to improve by doing IELTS practice tasks<br/><br/>-work toward your desired result which can help you live, study and work around the world<br/><br/>-feel more confident on the day of your test - as one of the co-creators of IELTS, no one is better positioned than Halifax Formation to help you get your optimal result.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src="images/IELTS.png" className="card-img-top ImageCertif" alt="Ima"/>
        <div className="card-body">
          <h5 className="card-title">TOEIC : Test of English For International Communication</h5>
          <p className="card-text">This course program is for anyone wishing to deepen and review their knowledge of English before passing the TOEIC exam.<br/><br/>-Students in this program have enjoyed attending our classes for the following reasons:<br/><br/>-Program adapted to the needs of individuals<br/><br/>-Custom courses to reach the desired level<br/><br/>-Learning objectives determined between students and their teacher<br/><br/>-Tracking according to the individual rhythm of each<br/><br/>-Courses available for students of all levels<br/><br/>-Frequent assessments to observe progress<br/><br/>-Exercises and homework before the exam</p>
        </div>
      </div>
    </div>
    <div className="col">
    </div>

  </div>

  <div className='boutonTestCertif'><a href='https://docs.google.com/forms/d/e/1FAIpQLSdHgAlOEcRqueFkhs57oNEF_IDtZuzYkfTWfJYUfp0EAHKVrg/viewform' target="_blank" rel="noreferrer"><button className='btnTest '>Testez votre niveau GRATUITEMENT !</button></a></div>
  <h1 className='TitreCertif'><span>F</span>rançais</h1>
  <div className="row row-cols-1 row-cols-md-3 g-3">
    <div className="col">
      <div className="card">
        <img src="images/TEF.png" className="card-img-top ImageCertif" alt="Ima"/>
        <div className="card-body">
          <h5 className="card-title">Avec la bonne préparation, vous pouvez réussir au premier essai. </h5>
          <p className="card-text">Halifax vous permet de vous entraîner en conditions d’examen à tous les types de TEF, où que vous soyez et ainsi à votre propre rythme sur une interface intuitive et facile à prendre en main.<br/><br/>Vous pouvez réviser et vous préparer plus efficacement pour les 5 épreuves du TEF :<br/><br/>-Compréhension orale,<br/><br/>-Compréhension écrite,<br/><br/>-Lexique et structure,<br/><br/>-Expression orale,<br/><br/>-Expression écrite.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src="images/TCF.png" className="card-img-top ImageCertif" alt="Ima"/>
        <div className="card-body">
          <h5 className="card-title">Préparez vous au TCF avec Halifax !</h5>
          <p className="card-text">Pour améliorer vos chances de réussite, Halifax vous propose toute l’année des cours de préparation aux examens du TCF pour des groupes constitués ou dans le cadre de cours individuels.<br/><br/>Cette formation contient tout ce dont vous avez besoin : méthodologie, astuces, tests blancs, entraînements adaptatifs et une multitude de ressources pour progresser en français.<br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
        </div>
      </div>
    </div>
    <div className="col">
    </div>
    


    </div>
  
    </div>
    </div>
  )
}

export default Certif