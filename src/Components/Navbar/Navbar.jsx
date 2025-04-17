import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import closeImage from "../../assets/icons8-x-50.png";
import toggleImage from "../../assets/icons8-menu-48.png";
import { TEXTS } from "../../Languages.js";
import { LanguageContext } from "../../LanguageContext.js";

const Navbar = ({ setShowAllPages }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [clickedLink, setClickedLink] = useState(null);
  const { language } = useContext(LanguageContext);
  const location = useLocation();

  const langContext = useContext(LanguageContext);

  useEffect(() => {
    document.body.className = language;
  }, [language]);

  useEffect(() => {
    setClickedLink(location.pathname);
  }, [location.pathname]);

  const geoOnClick = () => {
    langContext.setLanguage("ge");
  };
  const enOnClick = () => {
    langContext.setLanguage("en");
  };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const closeNavbar = () => {
    setShowLinks(false);
  };

  return (
    <div>
      <div className={`navbar ${showLinks ? "" : "hidden"}`}>
        {showLinks && (
          <ul className="links">
            <ul>
              <li>
                <Link
                  to="/"
                  onClick={closeNavbar}
                  className={clickedLink === "/" ? "active" : ""}
                >
                  {TEXTS[language].home}
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  onClick={closeNavbar}
                  className={clickedLink === "/about" ? "active" : ""}
                >
                  {TEXTS[language].about}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={closeNavbar}
                  className={clickedLink === "/services" ? "active" : ""}
                >
                  {TEXTS[language].services}
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={closeNavbar}
                  className={clickedLink === "/portfolio" ? "active" : ""}
                >
                  {TEXTS[language].portfolio}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={closeNavbar}
                  className={clickedLink === "/contact" ? "active" : ""}
                >
                  {TEXTS[language].contact}
                </Link>
              </li>
            </ul>
            <div className="contIcons">
              <div className="mainLangDiv">
                <div
                  className={
                    "GeoFlag " +
                    (langContext.language === "ge" ? "invisible" : "")
                  }
                  onClick={geoOnClick}
                >
                  <div className="darkLightStyles">
                    {" "}
                    <p>ქართული</p>
                  </div>
                </div>

                <div
                  className={
                    "EnFlag " +
                    (langContext.language === "en" ? "invisible" : "")
                  }
                  onClick={enOnClick}
                >
                  <div className="darkLightStyles">
                    <p> ENGLISH </p>
                  </div>{" "}
                </div>
              </div>
            </div>
          </ul>
        )}
      </div>

      <div className="toggle-button">
        <img
          src={showLinks ? closeImage : toggleImage}
          onClick={toggleLinks}
          alt="Toggle"
        />
      </div>
    </div>
  );
};

export default Navbar;
