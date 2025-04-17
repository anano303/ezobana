import "./Home.css";
import { useContext, useEffect } from "react";
import { TEXTS } from "../../Languages.js";
// import { ThemeContext } from "../../ThemeContext.js";
import { LanguageContext } from "../../LanguageContext.js";
import { Link } from "react-router-dom";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Home = () => {
  const { language } = useContext(LanguageContext);

  // const themeContext = useContext(ThemeContext);
  // const langContext = useContext(LanguageContext);

  useEffect(() => {
    document.body.className = language;
  }, [language]);
  return (
    <div className="homePage" id="#home">
      {/* <div className="overlay"></div>
      <div className="homeText">
        <div className="h1Desktop">
          <h1> {TEXTS[language].whatIsYours}</h1>
          <h1 className="textLife"> {TEXTS[language].life} </h1>
        </div>{" "}
        <h1 className="textMtavari">
          {TEXTS[language].main}
          <span>{TEXTS[language].blueprint} </span>
        </h1>
        <h1 className="onlyEnglish">{TEXTS[language].onlyEnglish}</h1>
      </div>
      <div className="pAndBtn">
        <p>
          You plan your vision, you plan your purpose that's we call your life
          blueprint
        </p>
        <Link to="/about">
          <button className="homeButton"> {TEXTS[language].findOut} </button>
        </Link>
      </div> */}
    </div>
  );
};

export default Home;
