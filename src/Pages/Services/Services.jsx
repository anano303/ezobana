import React, { useContext } from "react";
import "./Services.css";
import { TEXTS } from "../../Languages.js";
import { LanguageContext } from "../../LanguageContext.js";
import blackArrowBUtton from "../Assets/black_arrow_button.png";
import GiftImg from "../Assets/სასაჩუქრე.WebP";
import ProductionImg from "../Assets/პროდაქშენი.WebP";
import SocialNetImg from "../Assets/სოციალური.WebP";
import PolygraphImg from "../Assets/პოლიგრაფია.WebP";

const servicesData = [
  {
    id: "01",
    titleKey: "gift",
    description:
      "Unleash creativity with our curated gift ideas collection. Unique and personalized gift recommendations.",
    imageUrl: GiftImg,
  },
  {
    id: "02",
    titleKey: "production",
    description:
      "Bringing visions to life through production expertise. Creative production solutions.",
    imageUrl: ProductionImg,
  },
  {
    id: "03",
    titleKey: "socNet",
    description:
      "Navigating the digital landscape with effective social media management. Social media strategy and management.",
    imageUrl: SocialNetImg,
  },
  {
    id: "04",
    titleKey: "polygraph",
    description:
      "Crafting brand identities that speak volumes. Unique and impactful brand identity designs.",
    imageUrl: PolygraphImg,
  },
];

const Services = () => {
  const { language } = useContext(LanguageContext);

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
              className={`cut_left_corner img  project${service.id}`}
              style={{ backgroundImage: `url(${service.imageUrl})` }}
            >
              <h1 className="transparentText ForProject">{service.id}</h1>
              <div className="projectOnHover">
                <div className="fullYellow"></div>
                <button type="button">
                  <img id="black_arrow" src={blackArrowBUtton} alt="arrow" />
                </button>
              </div>{" "}
            </div>
            <div className="aboutProject">
              <h3 className="projectCapture">
                {TEXTS[language][service.titleKey]}
              </h3>
              <p className="projectParagraph">{service.description}</p>
              <ul className="projectDotText">
                <a href="mailto:Hello@blueprintstudio.ge">
                  <li>{TEXTS[language].order}</li>
                </a>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
