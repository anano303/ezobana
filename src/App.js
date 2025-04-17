import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Portfolio from "./Pages/Portfolio/Portfolio";
import { LanguageContext } from "./LanguageContext";
import { ThemeContext } from "./ThemeContext";
import React, { useState, useEffect, useRef } from "react";
import arrowHome from "./assets/icons8-down-arrow-50.png";
import ScrollObserver from "./Utils/ScrollObserver";

function App() {
  const [language, setLanguage] = useState("ge");
  const [theme, setTheme] = useState("light");
  const [showAllPages, setShowAllPages] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const arrowRef = useRef(null);

  useEffect(() => {
    document.body.className = language;
  }, [language]);

  const toggleShowAllPages = () => {
    setShowAllPages((prev) => !prev);
    setActivePage("home");
    // When enabling all pages mode, scroll to top first
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Effect to handle arrow visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!showAllPages && arrowRef.current) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;

        // Show arrow when scrolled near the bottom (within 150px of bottom)
        if (scrollPosition + windowHeight >= documentHeight - 150) {
          arrowRef.current.classList.add("visible");
        } else {
          arrowRef.current.classList.remove("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showAllPages]);

  // Provides both the all pages state and navigation helper to child components
  const allPagesContext = {
    showAllPages,
    activePage,
    setActivePage,
    scrollToSection: (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        setActivePage(sectionId);
      }
    },
  };

  return (
    <div className="App">
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Router>
            {showAllPages ? (
              <Layout allPagesContext={allPagesContext}>
                <div className="all-pages-container">
                  <section className="page-section" id="home">
                    <Home />
                  </section>
                  <section className="page-section" id="about">
                    <About />
                  </section>
                  <section className="page-section" id="services">
                    <Services />
                  </section>
                  <section className="page-section" id="portfolio">
                    <Portfolio />
                  </section>
                  <section className="page-section" id="contact">
                    <Contact />
                  </section>

                  {/* Add the ScrollObserver to track current section */}
                  <ScrollObserver
                    onSectionChange={(sectionId) => setActivePage(sectionId)}
                  />
                </div>
              </Layout>
            ) : (
              <Routes>
                <Route
                  path="/"
                  element={
                    <Layout>
                      <Home />
                      <button
                        ref={arrowRef}
                        className="homeArrow"
                        onClick={toggleShowAllPages}
                        aria-label="Show all pages"
                      >
                        <img
                          className="homeArrowImg"
                          src={arrowHome}
                          alt="arrow"
                        />
                      </button>
                    </Layout>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <Layout>
                      <Contact />
                    </Layout>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <Layout>
                      <About />
                    </Layout>
                  }
                />
                <Route
                  path="/services"
                  element={
                    <Layout>
                      <Services />
                    </Layout>
                  }
                />
                <Route
                  path="/portfolio"
                  element={
                    <Layout>
                      <Portfolio />
                    </Layout>
                  }
                />
              </Routes>
            )}
          </Router>
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
