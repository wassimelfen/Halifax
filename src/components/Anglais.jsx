import React, { useState } from "react";
import Contact2 from "./Contact2";
import Footer from "./Footer";
import NavBar2 from "./NavBar2";
import { Link } from "react-router-dom";
const Anglais = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleClick = (language) => {
    setSelectedLanguage(language);
  };
  return (
    <div>
      <div className="AllNav">
        <NavBar2 />
      </div>

      <div className="container">
        <div className="row ">
          <div className="TitreCertif">
            <h1>
              <span>A</span>nglais
            </h1>{" "}
            <Link to="/certif">
              <button className="btnHero">
                Préparation aux tests de langues &#187;{" "}
              </button>
            </Link>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card">
              <img
                src="images/english.png"
                className="card-img-top"
                alt="Ima"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Anglais des affaires-Business English
                </h5>
                <p className="card-text"></p>
                <Link to="/details/englishbusiness">
                  <button
                    onClick={() => handleClick("englishbusiness")}
                    className="btnSeeAll"
                  >
                    Détails &#187;
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src="images/eng2.png" className="card-img-top" alt="Ima" />
              <div className="card-body">
                <h5 className="card-title">
                  Anglais pour les adultes - débutants
                </h5>
                <p className="card-text"></p>
                <Link to="/details/englishbeginner">
                  <button
                    onClick={() => handleClick("englishbeginner")}
                    className="btnSeeAll"
                  >
                    Détails &#187;
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src="images/kids.png" className="card-img-top" alt="Ima" />
              <div className="card-body">
                <h5 className="card-title">
                  Cours d'anglais pour les enfants <br />
                </h5>
                <p className="card-text"></p>
                <Link to="/details/englishkids">
                  <button
                    onClick={() => handleClick("englishkids")}
                    className="btnSeeAll"
                  >
                    Détails &#187;
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src="images/camp.png" className="card-img-top" alt="Ima" />
              <div className="card-body">
                <h5 className="card-title">
                  Ecole d'été: Anglais pour enfants et adolescents
                </h5>
                <p className="card-text"></p>
                <Link to="/details/englishcamp">
                  <button
                    onClick={() => handleClick("englishcamp")}
                    className="btnSeeAll"
                  >
                    Détails &#187;
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact2 />
      <Footer />
    </div>
  );
};

export default Anglais;
