import "./Home.css";
import { useContext, useEffect } from "react";
import { TEXTS } from "../../Languages.js";
import { LanguageContext } from "../../LanguageContext.js";
import { Link } from "react-router-dom";
import homeBannerImage from "../../assets/playful-games-birthday-party-nature-background.png";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";

const Home = () => {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    document.body.className = language;
  }, [language]);

  return (
    <div className="homePage" id="home">
      <div className="home-content">
        <div className="home-text-container">
          <div className="text-content">
            <h1 className="home-title">
              {language === "ge" ? "ეზობანა" : "Ezobana"}
            </h1>
            <h2 className="home-subtitle">
              {language === "ge"
                ? "თქვენი პატარას ჯადოსნური სამყარო"
                : "A magical world for your little ones"}
            </h2>
            <p className="home-description">
              {language === "ge"
                ? "სივრცე, სადაც ყველა ბავშვი ლაღია, შემოქმედია, უპირობოდ მიღებულია"
                : "A space where every child is free, creative, and unconditionally accepted"}
            </p>
            <div className="home-buttons">
              <Link to="/services">
                <button className="home-button primary-button">
                  {language === "ge" ? "პროგრამები" : "Programs"}
                </button>
              </Link>
              <Link to="/portfolio">
                <button className="home-button secondary-button">
                  {language === "ge" ? "ვორქშოფები" : "Workshops"}
                </button>
              </Link>
            </div>
          </div>
          <div className="video-wrapper-container">
            <VideoPlayer videoType="youtube" videoId="igBjxL5iwUc" />
          </div>
        </div>
        <div className="home-image-container">
          <img src={homeBannerImage} alt="Ezobana" className="home-image" />
        </div>
      </div>

      <div className="home-decorations">
        <div className="decoration-item decoration-1">🎈</div>
        <div className="decoration-item decoration-2">🎪</div>
        <div className="decoration-item decoration-3">🧸</div>
        <div className="decoration-item decoration-4">🎨</div>
      </div>
    </div>
  );
};

export default Home;
