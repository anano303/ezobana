import React, { useState, useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import logo from "../../assets/ეზობანა (1).png";
import "./Header.css";
import { LanguageContext } from "../../LanguageContext.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TEXTS } from "../../Languages.js";

const Header = ({ allPagesContext }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [clickedLink, setClickedLink] = useState(null);

  useEffect(() => {
    setClickedLink(location.pathname);
  }, [location.pathname]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  // Handle navigation differently based on if we're in all-pages mode
  const handleNavigation = (sectionId) => {
    if (allPagesContext && allPagesContext.showAllPages) {
      // Smooth scroll in all-pages mode
      allPagesContext.scrollToSection(sectionId);
    } else {
      // Regular navigation with react-router
      const path = sectionId === "home" ? "/" : `/${sectionId}`;
      navigate(path);
    }
  };

  return (
    <div className="headerPage">
      <div className="headerOverlay">
        {/* Logo always navigates to home page */}
        {allPagesContext && allPagesContext.showAllPages ? (
          <div
            onClick={() => handleNavigation("home")}
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="logo" className="logo" />
          </div>
        ) : (
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        )}

        {/* Desktop Navigation */}
        <div className="desktop-menu">
          <ul className="desktop-links">
            <li>
              {allPagesContext && allPagesContext.showAllPages ? (
                <button
                  onClick={() => handleNavigation("home")}
                  className={
                    allPagesContext.activePage === "home" ? "active" : ""
                  }
                >
                  {TEXTS[language].home}
                </button>
              ) : (
                <Link to="/" className={clickedLink === "/" ? "active" : ""}>
                  {TEXTS[language].home}
                </Link>
              )}
            </li>
            <li>
              {allPagesContext && allPagesContext.showAllPages ? (
                <button
                  onClick={() => handleNavigation("about")}
                  className={
                    allPagesContext.activePage === "about" ? "active" : ""
                  }
                >
                  {TEXTS[language].about}
                </button>
              ) : (
                <Link
                  to="/about"
                  className={clickedLink === "/about" ? "active" : ""}
                >
                  {TEXTS[language].about}
                </Link>
              )}
            </li>
            <li>
              {allPagesContext && allPagesContext.showAllPages ? (
                <button
                  onClick={() => handleNavigation("services")}
                  className={
                    allPagesContext.activePage === "services" ? "active" : ""
                  }
                >
                  {TEXTS[language].services}
                </button>
              ) : (
                <Link
                  to="/services"
                  className={clickedLink === "/services" ? "active" : ""}
                >
                  {TEXTS[language].services}
                </Link>
              )}
            </li>
            <li>
              {allPagesContext && allPagesContext.showAllPages ? (
                <button
                  onClick={() => handleNavigation("portfolio")}
                  className={
                    allPagesContext.activePage === "portfolio" ? "active" : ""
                  }
                >
                  {TEXTS[language].portfolio}
                </button>
              ) : (
                <Link
                  to="/portfolio"
                  className={clickedLink === "/portfolio" ? "active" : ""}
                >
                  {TEXTS[language].portfolio}
                </Link>
              )}
            </li>
            <li>
              {allPagesContext && allPagesContext.showAllPages ? (
                <button
                  onClick={() => handleNavigation("contact")}
                  className={
                    allPagesContext.activePage === "contact" ? "active" : ""
                  }
                >
                  {TEXTS[language].contact}
                </button>
              ) : (
                <Link
                  to="/contact"
                  className={clickedLink === "/contact" ? "active" : ""}
                >
                  {TEXTS[language].contact}
                </Link>
              )}
            </li>
          </ul>

          <div className="desktop-lang-switcher">
            <div className="lang-selector">
              <button
                className={`lang-button ${language === "ge" ? "active" : ""}`}
                onClick={() => handleLanguageChange("ge")}
              >
                <svg className="lang-icon" viewBox="0 0 300 200">
                  <rect width="300" height="200" fill="#fff" />
                  {/* Main center cross */}
                  <path
                    d="M125,0 h50 v75 h125 v50 h-125 v75 h-50 v-75 h-125 v-50 h125 z"
                    fill="#ff0000"
                  />
                  {/* Four smaller crosses in corners */}
                  <path
                    d="M20,20 h25 v-20 h20 v20 h25 v20 h-25 v25 h-20 v-25 h-25 z"
                    fill="#ff0000"
                  />
                  <path
                    d="M210,20 h25 v-20 h20 v20 h25 v20 h-25 v25 h-20 v-25 h-25 z"
                    fill="#ff0000"
                  />
                  <path
                    d="M20,135 h25 v-20 h20 v20 h25 v20 h-25 v25 h-20 v-25 h-25 z"
                    fill="#ff0000"
                  />
                  <path
                    d="M210,135 h25 v-20 h20 v20 h25 v20 h-25 v25 h-20 v-25 h-25 z"
                    fill="#ff0000"
                  />
                </svg>
              </button>

              <button
                className={`lang-button ${language === "en" ? "active" : ""}`}
                onClick={() => handleLanguageChange("en")}
              >
                <svg className="lang-icon" viewBox="0 0 60 30">
                  <clipPath id="s">
                    <path d="M0,0 v30 h60 v-30 z" />
                  </clipPath>
                  <rect width="60" height="30" fill="#012169" />
                  <path
                    d="M0,0 L60,30 M60,0 L0,30"
                    stroke="#fff"
                    strokeWidth="6"
                  />
                  <path
                    d="M0,0 L60,30 M60,0 L0,30"
                    clipPath="url(#s)"
                    stroke="#C8102E"
                    strokeWidth="4"
                  />
                  <path
                    d="M30,0 v30 M0,15 h60"
                    stroke="#fff"
                    strokeWidth="10"
                  />
                  <path
                    d="M30,0 v30 M0,15 h60"
                    stroke="#C8102E"
                    strokeWidth="6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className="mobile-menu">
        <Navbar allPagesContext={allPagesContext} />
      </div>
    </div>
  );
};

export default Header;
