import { useContext } from "react";
import { TEXTS } from "../../Languages.js";
import { LanguageContext } from "../../LanguageContext.js";
import { useNavigate } from "react-router-dom";
import "./Portfolio.css";

const workshops = [
  {
    id: 1,
    titleGe: "ჯინჯერის ნამცხვრების მოხატვა",
    titleEn: "Gingerbread Cookie Decoration",
    emoji: "🍪",
  },
  {
    id: 2,
    titleGe: "ტყლარწის დამზადება",
    titleEn: "Bracelet Making",
    emoji: "🧶",
  },
  {
    id: 3,
    titleGe: 'ვორქშოფი "ნამდვილი შეფისგან"',
    titleEn: 'Workshop "From a Real Chef"',
    emoji: "👨‍🍳",
  },
  {
    id: 4,
    titleGe: "ართ თერაპია",
    titleEn: "Art Therapy",
    emoji: "🎨",
  },
  {
    id: 5,
    titleGe: "ვორქშოფი „პატარა ხელოვანი",
    titleEn: 'Workshop \\"Little Artist\\"',
    emoji: "🖌️",
  },
];

const Portfolio = () => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleBookClick = () => {
    // Navigate to contact page and focus on the form
    navigate("/contact", { state: { scrollToForm: true } });
  };

  return (
    <div className="portfolio" id="portfolio">
      <h1 className="portfolio-title">{TEXTS[language].portfolio}</h1>

      <div className="workshops-container">
        {workshops.map((workshop) => (
          <div className="workshop-item" key={workshop.id}>
            <div className="workshop-emoji">{workshop.emoji}</div>
            <div className="workshop-content">
              <h3>{language === "ge" ? workshop.titleGe : workshop.titleEn}</h3>
              <button className="workshop-button" onClick={handleBookClick}>
                {language === "ge" ? "დაჯავშნა" : "Book Now"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
