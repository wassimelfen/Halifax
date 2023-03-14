import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="container footersection">
      <div className="row">
        <div className="col-md-4 footerDiv">
          <img className="footerlogo" src="/images/logo3.png" alt="logo" />
        </div>
        {/* <FontAwesomeIcon icon="fa-solid fa-location-dot" /> */}
        <div className="col-md-4 footerDiv">
          <p>Structure de formation professionnelle</p>
          <p>Agréée par l'état tunisien sous le n°-21-288-21</p>
        </div>

        <div className="col-md-4 footerDiv FooterContact">
          <div className="contactDetails">
            <FontAwesomeIcon className="footerIcons" icon={faLocationDot} />
            02 rue Ibn Badis - 8000 - Nabeul Tunisie
          </div>
          <div className="contactDetails">
            <FontAwesomeIcon className="footerIcons" icon={faPhone} />
            (+216) 53-171-443
          </div>
          <div className="contactDetails">
            <FontAwesomeIcon className="footerIcons" icon={faEnvelope} />
            emcnabeul@yahoo.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
