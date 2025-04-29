import "./Home.css";
import { useContext, useEffect, useState } from "react";
import { TEXTS } from "../../Languages.js";
import { LanguageContext } from "../../LanguageContext.js";
import { Link } from "react-router-dom";
import homeBannerImage from "../../assets/playful-games-birthday-party-nature-background.png";
import { cacheImage, getCachedImage } from "../../Utils/imageCache";
// Import all gallery images
import gallery1 from "../../assets/imagesMain/472336843_122160478232284809_7464877080578904187_n.jpg";
import gallery2 from "../../assets/imagesMain/472719518_122160478688284809_7926994663759402226_n (1).jpg";
import gallery3 from "../../assets/imagesMain/472719518_122160478688284809_7926994663759402226_n.jpg";
import gallery4 from "../../assets/imagesMain/472749414_122160478700284809_3487736465589202652_n.jpg";
import gallery5 from "../../assets/imagesMain/6G8A6596.jpg";
import gallery6 from "../../assets/imagesMain/473388264_122161859876284809_8330218571272847525_n.jpg";
import gallery7 from "../../assets/imagesMain/6G8A6625.jpg";
import gallery8 from "../../assets/imagesMain/6G8A6838 - Copy.jpg";

const Home = () => {
  const { language } = useContext(LanguageContext);
  const [isLoading, setIsLoading] = useState(true);
  const [cachedImages, setCachedImages] = useState({});

  const galleryImages = [
    { src: gallery1, alt: "Ezobana Gallery 1" },
    { src: gallery2, alt: "Ezobana Gallery 2" },
    { src: gallery3, alt: "Ezobana Gallery 3" },
    { src: gallery4, alt: "Ezobana Gallery 4" },
    { src: gallery5, alt: "Ezobana Gallery 5" },
    { src: gallery6, alt: "Ezobana Gallery 6" },
    { src: gallery7, alt: "Ezobana Gallery 7" },
    { src: gallery8, alt: "Ezobana Gallery 8" },
  ];

  useEffect(() => {
    document.body.className = language;
  }, [language]);

  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);
      try {
        // Cache main image
        const mainSrc = await getCachedImage(homeBannerImage);

        // Cache gallery images
        const galleryUrls = {};
        for (const image of galleryImages) {
          galleryUrls[image.src] = await getCachedImage(image.src);
        }

        setCachedImages({
          main: mainSrc,
          ...galleryUrls,
        });
      } catch (error) {
        console.warn("Image loading failed:", error);
      }
      setIsLoading(false);
    };

    loadImages();

    // Cleanup URLs on unmount
    return () => {
      Object.values(cachedImages).forEach((url) => {
        if (url.startsWith("blob:")) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, []);

  return (
    <div className="homePage" id="home">
      <div className="home-content">
        <div className="home-image-container">
          {!isLoading && (
            <img
              src={cachedImages.main || homeBannerImage}
              alt="Ezobana"
              className="home-image"
              loading="eager"
            />
          )}
        </div>
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
        </div>
      </div>

      <div className="home-gallery">
        <h3 className="gallery-title">
          {language === "ge" ? "ჩვენი გალერეა" : "Our Gallery"}
        </h3>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              {!isLoading && (
                <img
                  src={cachedImages[image.src] || image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
          ))}
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
