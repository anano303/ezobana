import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import closeImage from "../../assets/icons8-x-50.png";
import toggleImage from "../../assets/icons8-menu-48.png";
import { TEXTS } from "../../Languages.js";
import { LanguageContext } from "../../LanguageContext.js";

const Navbar = ({ allPagesContext }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [clickedLink, setClickedLink] = useState(null);
  const { language } = useContext(LanguageContext);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    closeNavbar();
    if (allPagesContext && allPagesContext.showAllPages) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div>
      <div className={`navbar ${showLinks ? "" : "hidden"}`}>
        {showLinks && (
          <ul className="links">
            <ul>
              <li>
                {allPagesContext && allPagesContext.showAllPages ? (
                  <a
                    href="#home"
                    onClick={(e) => handleNavigation(e, "home")}
                    className={
                      allPagesContext.activePage === "home" ? "active" : ""
                    }
                  >
                    {TEXTS[language].home}
                  </a>
                ) : (
                  <Link
                    to="/"
                    onClick={closeNavbar}
                    className={clickedLink === "/" ? "active" : ""}
                  >
                    {TEXTS[language].home}
                  </Link>
                )}
              </li>

              <li>
                {allPagesContext && allPagesContext.showAllPages ? (
                  <a
                    href="#about"
                    onClick={(e) => handleNavigation(e, "about")}
                    className={
                      allPagesContext.activePage === "about" ? "active" : ""
                    }
                  >
                    {TEXTS[language].about}
                  </a>
                ) : (
                  <Link
                    to="/about"
                    onClick={closeNavbar}
                    className={clickedLink === "/about" ? "active" : ""}
                  >
                    {TEXTS[language].about}
                  </Link>
                )}
              </li>
              <li>
                {allPagesContext && allPagesContext.showAllPages ? (
                  <a
                    href="#services"
                    onClick={(e) => handleNavigation(e, "services")}
                    className={
                      allPagesContext.activePage === "services" ? "active" : ""
                    }
                  >
                    {TEXTS[language].services}
                  </a>
                ) : (
                  <Link
                    to="/services"
                    onClick={closeNavbar}
                    className={clickedLink === "/services" ? "active" : ""}
                  >
                    {TEXTS[language].services}
                  </Link>
                )}
              </li>
              <li>
                {allPagesContext && allPagesContext.showAllPages ? (
                  <a
                    href="#portfolio"
                    onClick={(e) => handleNavigation(e, "portfolio")}
                    className={
                      allPagesContext.activePage === "portfolio" ? "active" : ""
                    }
                  >
                    {TEXTS[language].portfolio}
                  </a>
                ) : (
                  <Link
                    to="/portfolio"
                    onClick={closeNavbar}
                    className={clickedLink === "/portfolio" ? "active" : ""}
                  >
                    {TEXTS[language].portfolio}
                  </Link>
                )}
              </li>
              <li>
                {allPagesContext && allPagesContext.showAllPages ? (
                  <a
                    href="#contact"
                    onClick={(e) => handleNavigation(e, "contact")}
                    className={
                      allPagesContext.activePage === "contact" ? "active" : ""
                    }
                  >
                    {TEXTS[language].contact}
                  </a>
                ) : (
                  <Link
                    to="/contact"
                    onClick={closeNavbar}
                    className={clickedLink === "/contact" ? "active" : ""}
                  >
                    {TEXTS[language].contact}
                  </Link>
                )}
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
