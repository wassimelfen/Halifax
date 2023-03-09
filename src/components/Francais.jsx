import React, { useState } from "react";
import Contact2 from "./Contact2";
import Footer from "./Footer";
import NavBar2 from "./NavBar2";
import { Link } from "react-router-dom";
const Francais = () => {
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
      </div>
      <Contact2 />
      <Footer />
    </div>
  );
};

export default Francais;
