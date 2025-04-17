import React, { useState, useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import logo from "../../assets/ეზობანა (1).png";
import "./Header.css";
import { ThemeContext } from "../../ThemeContext.js";
import { LanguageContext } from "../../LanguageContext.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TEXTS } from "../../Languages.js";

const Header = ({ allPagesContext }) => {
  const themeContext = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);
  const location = useLocation();
  const navigate = useNavigate();
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
                <a
                  onClick={() => handleNavigation("home")}
                  className={
                    allPagesContext.activePage === "home" ? "active" : ""
                  }
                >
                  {TEXTS[language].home}
                </a>
              ) : (
                <Link to="/" className={clickedLink === "/" ? "active" : ""}>
                  {TEXTS[language].home}
                </Link>
              )}
            </li>
            <li>
              {allPagesContext && allPagesContext.showAllPages ? (
                <a
                  onClick={() => handleNavigation("about")}
                  className={
                    allPagesContext.activePage === "about" ? "active" : ""
                  }
                >
                  {TEXTS[language].about}
                </a>
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
                <a
                  onClick={() => handleNavigation("services")}
                  className={
                    allPagesContext.activePage === "services" ? "active" : ""
                  }
                >
                  {TEXTS[language].services}
                </a>
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
                <a
                  onClick={() => handleNavigation("portfolio")}
                  className={
                    allPagesContext.activePage === "portfolio" ? "active" : ""
                  }
                >
                  {TEXTS[language].portfolio}
                </a>
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
                <a
                  onClick={() => handleNavigation("contact")}
                  className={
                    allPagesContext.activePage === "contact" ? "active" : ""
                  }
                >
                  {TEXTS[language].contact}
                </a>
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
        <Navbar allPagesContext={allPagesContext} />
      </div>
    </div>
  );
};

export default Header;
