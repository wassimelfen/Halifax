import React, { useState } from "react";
import Contact2 from "./Contact2";
import Footer from "./Footer";
import NavBar2 from "./NavBar2";
import { Link } from "react-router-dom";
const AllLangue = () => {
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

        <div className="row ">
          <div className="TitreCertif">
            <h1>
              <span>F</span>rançais
            </h1>{" "}
            <Link to="/certif">
              <button className="btnHero">
                Préparation aux tests de langues &#187;
              </button>
            </Link>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card">
              <img src="images/fr1.png" className="card-img-top" alt="Ima" />
              <div className="card-body">
                <h5 className="card-title">
                  Français de communication <br />
                  <br />
                </h5>
                <p className="card-text"></p>
                <Link to="/details/communication">
                  <button
                    onClick={() => handleClick("communication")}
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
              <img src="images/fr2.png" className="card-img-top" alt="Ima" />
              <div className="card-body">
                <h5 className="card-title">
                  Apprendre le français par niveau
                  <br /> A1 - A2 - B1 - B2 - C1 - C2
                </h5>
                <p className="card-text"></p>
                <Link to="/details/niveau">
                  <button
                    onClick={() => handleClick("niveau")}
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
              <img src="images/fr3.png" className="card-img-top" alt="Ima" />
              <div className="card-body">
                <h5 className="card-title">
                  Cours de français pour les élèves <br />
                  <br />
                </h5>
                <p className="card-text"></p>
                <Link to="/details/eleves">
                  <button
                    onClick={() => handleClick("eleves")}
                    className="btnSeeAll"
                  >
                    Détails &#187;
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="TitreCertif">
            <h1>
              <span>I</span>talien
            </h1>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-3">
          <div className="col">
            <div className="card">
              <img src="images/fr2.png" className="card-img-top" alt="Ima" />
              <div className="card-body">
                <h5 className="card-title">Apprendre l'italien</h5>
                <p className="card-text"></p>
                <Link to="/details/italien">
                  <button
                    onClick={() => handleClick("italien")}
                    className="btnSeeAll"
                  >
                    Détails &#187;
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="TitreCertif">
            <h1>
              <span>A</span>llemand
            </h1>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-3">
          <div className="col">
            <div className="card">
              <img
                src="images/english.png"
                className="card-img-top"
                alt="Ima"
              />
              <div className="card-body">
                <h5 className="card-title">Apprendre l'Allemand</h5>
                <p className="card-text"></p>
                <Link to="/Allemand">
                  <button className="btnSeeAll">Voir plus &#187;</button>
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

export default AllLangue;
