import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
// import Header from "./Components/Header";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Portfolio from "./Pages/Portfolio/Portfolio";
import { LanguageContext } from "./LanguageContext";
import { ThemeContext } from "./ThemeContext";
import React, { useState, useEffect } from "react";
import arrowHome from "./arrow_button.png";

function App() {
  const [language, setLanguage] = useState("ge");
  const [theme, setTheme] = useState("light");
  const [showAllPages, setShowAllPages] = useState(false);

  useEffect(() => {
    document.body.className = language;
  }, [language]);

  const toggleShowAllPages = () => {
    setShowAllPages((prev) => !prev);
  };

  return (
    <div className="App">
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Router>
            {showAllPages ? (
              <Layout>
                <Home />
                <About />
                <Services />
                <Portfolio />
                <Contact />
              </Layout>
            ) : (
              <Routes>
                <Route
                  path="/"
                  element={
                    <Layout>
                      <Home />
                      <button
                        className="homeArrow"
                        onClick={toggleShowAllPages}
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
