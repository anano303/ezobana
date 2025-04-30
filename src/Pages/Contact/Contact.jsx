import Footer from "../../Components/Footer/Footer";
import "./Contact.css";
import { useContext, useEffect, useRef } from "react";
import { LanguageContext } from "../../LanguageContext";
import { TEXTS } from "../../Languages";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const formRef = useRef(null);
  const location = useLocation();

  // When component mounts, check if we should scroll to the form
  useEffect(() => {
    if (location.state && location.state.scrollToForm && formRef.current) {
      // Scroll to the form with a slight delay to ensure rendering is complete
      setTimeout(() => {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

        // Focus on the first input after scrolling
        const firstInput = formRef.current.querySelector("input");
        if (firstInput) {
          firstInput.focus();
        }
      }, 500);
    }
  }, [location.state]);

  return (
    <div className="contactPage" id="contact">
      <div className="contact-container">
        <h1 className="contact-title">{TEXTS[language].contact}</h1>

        <div className="contact-info">
          <div className="contact-details">
            <h2>ეზობანა</h2>
            <p>
              <strong>{TEXTS[language].address}:</strong>{" "}
              {language === "ge" ? "თბილისი, ილია შეყლაშვილის ქ. 15 ( ტოიოტას ცენტრის უკან)" : "Tbilisi, Ilia Sheklashvili St. 15 (behind Toyota Center) "}
            </p>
            <p>
              <strong>{TEXTS[language].phone}:</strong> +995 558 248 414
            </p>
            <p>
              <strong>{TEXTS[language].email}:</strong> hello@ezobana.ge
            </p>

            <div className="contact-hours">
              <h3>{TEXTS[language].workingHours}:</h3>
              <p>{TEXTS[language].monday}: 10:00 - 22:00</p>
             
            </div>
          </div>

          <div className="contact-form" ref={formRef}>
            <h3>{TEXTS[language].getInTouch}</h3>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  placeholder={TEXTS[language].name}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder={TEXTS[language].email}
                  required
                />
              </div>
              <div className="form-group">
                <input type="tel" placeholder={TEXTS[language].phone} />
              </div>
              <div className="form-group">
                <textarea
                  placeholder={TEXTS[language].message}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                {TEXTS[language].send}
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="map-section">
          <h2>{language === "ge" ? "ჩვენი მდებარეობა" : "Our Location"}</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.3635129102536!2d44.757218976079486!3d41.77737887125304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446df0f7dbe3e5%3A0xb61de211cd3afcd5!2zMTUg4YOY4YOa4YOY4YOQIOGDqOGDlOGDp-GDmuGDkOGDqOGDleGDmOGDmuGDmOGDoSDhg6Xhg6Phg6nhg5AsIFQnYmlsaXNp!5e0!3m2!1sen!2sge!4v1744915609435!5m2!1sen!2sge"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ezobana Location"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
