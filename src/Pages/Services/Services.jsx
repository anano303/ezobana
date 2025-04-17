import React, { useContext, useState, useEffect } from "react";
import "./Services.css";
import { TEXTS } from "../../Languages.js";
import { LanguageContext } from "../../LanguageContext.js";

// Import a single image to use for all services until we have specific ones
import programImage from "../../assets/ეზობანა 2.png";
import programImage2 from "../../assets/ეზობანა 3.png";
import programImage3 from "../../assets/ეზობანა 4.png";
import programImage4 from "../../assets/ეზობანა 5.png";
import additionalServiceImg from "../../assets/ეზობანა 6.png";
import adultsProgram from "../../assets/ეზობანა 5.png";
import schoolsProgram from "../../assets/სკოლებს და ბაღს.png";

const servicesData = [
  {
    id: "01",
    titleKeyGe: 'პროგრამა „ეზოს თამაშები"',
    titleKeyEn: 'Program "Yard Games"',
    imageUrl: programImage,
  },
  {
    id: "02",
    titleKeyGe: 'პროგრამა „ფეხბურთელი"',
    titleKeyEn: 'Program "Football Player" ',
    imageUrl: programImage2,
  },
  {
    id: "03",
    titleKeyGe: 'პროგრამა "მორაგბე"',
    titleKeyEn: '"Rugby Player"',
    imageUrl: programImage3,
  },
  {
    id: "04",
    titleKeyGe: "შეთავაზება სკოლებს და ბაღებს",
    titleKeyEn: "Offers for Schools and Kindergartens",
    imageUrl: schoolsProgram,
  },
];

const additionalServicesData = [
  {
    id: "add-01",
    titleKeyGe: "დამატებითი სერვისები",
    titleKeyEn: "Additional Services",
    imageUrl: additionalServiceImg,
    bgColor: "#FF9AA2", // Soft pink
  },
  {
    id: "add-02",
    titleKeyGe: "ანიმაციური გმირები",
    titleKeyEn: "Animated Characters",
    imageUrl: adultsProgram,
    bgColor: "#B5EAD7", // Soft mint green
  },
  // {
  //   id: "add-03",
  //   titleKeyGe: "შეთავაზება სკოლებსა და ბაღებს",
  //   titleKeyEn: "Offers for Schools and Kindergartens",
  //   imageUrl: schoolsProgram,
  //   bgColor: "#C7CEEA", // Soft lavender
  // },
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

  // Handle additional services card click - modified to open fullscreen directly
  const handleAdditionalServiceClick = (id) => {
    // Find the service and show its image in fullscreen immediately
    const service = additionalServicesData.find((item) => item.id === id);
    if (service) {
      setSelectedImage(service.imageUrl);
    }
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

      {/* New Additional Services Section */}
      <div className="additional-services-section">
        <h2 className="additional-services-title">
          {language === "ge" ? "გასართობი აქტივობები" : "Fun Activities"}
        </h2>
        <div className="additional-services-container">
          {additionalServicesData.map((item) => (
            <div
              key={item.id}
              className="additional-service-card"
              style={{ backgroundColor: item.bgColor }}
              onClick={() => handleAdditionalServiceClick(item.id)}
            >
              <div className="card-content">
                <h3>{language === "ge" ? item.titleKeyGe : item.titleKeyEn}</h3>
                {/* <div className="card-icon">
                  {item.id === "add-01" && <span>🎮</span>}
                  {item.id === "add-02" && <span>👨‍👩‍👧‍👦</span>}
                  {item.id === "add-03" && <span>🏫</span>}
                </div> */}
                <p className="card-instruction">
                  {language === "ge"
                    ? "დააჭირეთ  სანახავად"
                    : "Click to view image"}
                </p>
              </div>
            </div>
          ))}
        </div>
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
