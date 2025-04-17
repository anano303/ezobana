import React, { useContext, useState, useEffect } from "react";
import "./Services.css";
import { TEXTS } from "../../Languages.js";
import { LanguageContext } from "../../LanguageContext.js";

// Import a single image to use for all services until we have specific ones
import programImage from "../../assets/ეზობანა 2.png";

const servicesData = [
  {
    id: "01",
    titleKeyGe: 'პროგრამა „ეზოს თამაშები"',
    titleKeyEn: 'Program "Yard Games"',
    imageUrl: programImage,
  },
  {
    id: "02",
    titleKeyGe: 'პროგრამა „ფეხბურთელი" / „მორაგბე"',
    titleKeyEn: 'Program "Football Player" / "Rugby Player"',
    imageUrl: programImage,
  },
  {
    id: "03",
    titleKeyGe: 'პროგრამა „დიდები"',
    titleKeyEn: 'Program "Grown-ups"',
    imageUrl: programImage,
  },
  {
    id: "04",
    titleKeyGe: "შეთავაზება სკოლებს და ბაღებს",
    titleKeyEn: "Offers for Schools and Kindergartens",
    imageUrl: programImage,
  },
];

const Services = () => {
  const { language } = useContext(LanguageContext);
  const [selectedImage, setSelectedImage] = useState(null);

  // Add escape key handler for the fullscreen image
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleEscKey);

    // Prevent body scrolling when modal is open
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeFullscreenImage = (e) => {
    // Prevent the click from propagating to parent elements
    e.stopPropagation();
    setSelectedImage(null);
  };

  return (
    <div className="servicesPage" id="services">
      <h1>
        {TEXTS[language].studio} <br />
        <span>{TEXTS[language].services}</span>
      </h1>
      <div className="gridItems">
        {servicesData.map((service) => (
          <div className="grid-item" key={service.id}>
            <div
              className="full-card-image"
              onClick={() => handleImageClick(service.imageUrl)}
            >
              <img
                src={service.imageUrl}
                alt={
                  language === "ge" ? service.titleKeyGe : service.titleKeyEn
                }
                className="service-image"
              />
              <div className="title-overlay">
                <h3 className="projectCapture">
                  {language === "ge" ? service.titleKeyGe : service.titleKeyEn}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className="fullscreen-image-modal" onClick={closeFullscreenImage}>
          <div
            className="fullscreen-image-container"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Program" />
            <button className="close-button" onClick={closeFullscreenImage}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
