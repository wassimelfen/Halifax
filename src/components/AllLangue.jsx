import React from "react";
import Contact2 from "./Contact2";

import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const AllLangue = () => {
  return (
    <div>
      <div className="AllNav">
        <Navbar />
      </div>

      <div className="container">
        <div className="row ">
          <div className="TitreCertif">
            <h1>
              <span>A</span>nglais
            </h1>{" "}
            <Link to="/certif">
              <button className="hbtn hb-fill-right">
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
                <button className="btnSeeAll">Voir plus &#187;</button>
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
                <button className="btnSeeAll">Voir plus &#187;</button>
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
                <button className="btnSeeAll">Voir plus &#187;</button>
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
                <button className="btnSeeAll">Voir plus &#187;</button>
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
              <button className="hbtn hb-fill-right">
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
                <button className="btnSeeAll">Voir plus &#187;</button>
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
                <button className="btnSeeAll">Voir plus &#187;</button>
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
                <button className="btnSeeAll">Voir plus &#187;</button>
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
                <button className="btnSeeAll">Voir plus &#187;</button>
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

        <div className="row ">
          <div className="TitreCertif">
            <h1>
              <span>M</span>anagement
            </h1>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-3">
          <div className="col">
            <div className="card">
              <img src="images/compta.png" className="card-img-top" alt="Ima" />
              <div className="card-body">
                <h5 className="card-title">Comptabilité et management</h5>
                <p className="card-text"></p>
                <button className="btnSeeAll">Voir plus &#187;</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src="images/PME.png" className="card-img-top" alt="Ima" />
              <div className="card-body">
                <h5 className="card-title">Management des PME</h5>
                <p className="card-text"></p>
                <button className="btnSeeAll">Voir plus &#187;</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src="images/qualité.png"
                className="card-img-top"
                alt="Ima"
              />
              <div className="card-body">
                <h5 className="card-title">Responsable qualité</h5>
                <p className="card-text"></p>
                <button className="btnSeeAll">Voir plus &#187;</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="TitreCertif">
            <h1>
              <span>I</span>nformatique
            </h1>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-3">
          <div className="col">
            <div className="card">
              <img
                src="images/digital.png"
                className="card-img-top"
                alt="Ima"
              />
              <div className="card-body">
                <h5 className="card-title">Marketing digital</h5>
                <p className="card-text"></p>
                <button className="btnSeeAll">Voir plus &#187;</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src="images/bureau.png" className="card-img-top" alt="Ima" />
              <div className="card-body">
                <h5 className="card-title">Informatique bureatique</h5>
                <p className="card-text"></p>
                <button className="btnSeeAll">Voir plus &#187;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact2 />
    </div>
  );
};

export default AllLangue;
