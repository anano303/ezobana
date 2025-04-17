import React, { useState, useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import logo from "../../assets/ეზობანა (1).png";
import "./Header.css";
import { ThemeContext } from "../../ThemeContext.js";
import { LanguageContext } from "../../LanguageContext.js";
import { Link, useLocation } from "react-router-dom";
import { TEXTS } from "../../Languages.js";

const Header = () => {
  const themeContext = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);
  const location = useLocation();
  const [clickedLink, setClickedLink] = useState(null);

  useEffect(() => {
    setClickedLink(location.pathname);
  }, [location.pathname]);

  const geoOnClick = () => {
    setLanguage("ge");
  };

  const enOnClick = () => {
    setLanguage("en");
  };

  return (
    <div className="headerPage">
      <div className="headerOverlay">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      {/* Desktop Navigation */}
      <div className="desktop-menu">
        <ul className="desktop-links">
          <li>
            <Link to="/" className={clickedLink === "/" ? "active" : ""}>
              {TEXTS[language].home}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={clickedLink === "/about" ? "active" : ""}
            >
              {TEXTS[language].about}
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={clickedLink === "/services" ? "active" : ""}
            >
              {TEXTS[language].services}
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={clickedLink === "/portfolio" ? "active" : ""}
            >
              {TEXTS[language].portfolio}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={clickedLink === "/contact" ? "active" : ""}
            >
              {TEXTS[language].contact}
            </Link>
          </li>
        </ul>

        <div className="desktop-lang-switcher">
          <div
            className={language === "ge" ? "invisible" : ""}
            onClick={geoOnClick}
          >
            <p>ქართული</p>
          </div>
          <div
            className={language === "en" ? "invisible" : ""}
            onClick={enOnClick}
          >
            <p>ENGLISH</p>
          </div>
        </div>
      </div>
      </div>
      {/* Mobile Navigation */}
      <div className="mobile-menu">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
