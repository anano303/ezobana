import "./About.css";
import { useContext, useEffect } from "react";
import { TEXTS } from "../../Languages.js";
import { LanguageContext } from "../../LanguageContext.js";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import nikoImage from "../../assets/niko.jpg"; // Updated Niko's image

const About = () => {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    document.body.className = language;
  }, [language]);

  return (
    <Element name="about" className="aboutPage" id="#about">
      <div className="about-content">
        <h3>
          {language === "ge"
            ? "ჩვენ ვართ დები - ია და ანა, პროფესიით - მარკეტერები, რომლებსაც ყველაზე მეტად ბავშვები და მათთან ურთიერთობა უყვართ."
            : "We are sisters - Ia and Ana, marketers by profession, who love children and interacting with them more than anything."}
        </h3>

        <div className="about-story-section">
          <div className="story-image-container">
            <img src={nikoImage} alt="Niko" className="niko-image" />
            <div className="image-caption">
              {language === "ge"
                ? "ნიკო - ჩვენი შთაგონება"
                : "Niko - Our Inspiration"}
            </div>
          </div>
          <div className="story-text">
            <p>
              {language === "ge"
                ? "ყველაფერი დაიწყო ჩვენი პატარა შთაგონებით — ნიკოთი. ის სამი წლისაა და დინოზავრების სიყვარულითაა მოცული. ნიკომ ჩვენი სამყაროსეული აღქმა სრულიად შეცვალა და დაგვაბრუნა ბავშვებობაში."
                : "Everything started with our little inspiration — Niko. He is three years old and filled with love for dinosaurs. Niko completely changed our perception of the world and took us back to childhood."}
            </p>
          </div>
        </div>

        <p>
          {language === "ge"
            ? "გავიხსენეთ რა გვიყვარდა, რომელი თამაშები გვაბედნიერებდა. აღმოჩნდა, რომ ჩვენი საყვარელი ადგილი იყო ეზო! ეზო, რომელიც უამრავ ჯადოსნურობასთან და მხიარულებასთან იყო დაკავშირებული."
            : "We remembered what we loved, which games made us happy. It turned out that our favorite place was the yard! A yard that was associated with lots of magic and joy."}
        </p>
        <p>
          {language === "ge"
            ? "ეზო —რომელიც ჩვენი დიდი შრომით, დიდი სიყვარულითაა გაშენებული. ყველა ბუჩქი, ბილიკი და კუთხე ჩვენივე ხელით შექმნილი, მოვლილი. გადავყწვიტეთ ეს საოცარი ეზო გაგვეზიარებინა ყველაზე პატარა ადამიანებისთვის და მათი მშობლებისთვის!"
            : "A yard that was established with our hard work and great love. Every bush, path, and corner was created and cared for by our own hands. We decided to share this amazing yard with the smallest people and their parents!"}
        </p>
        <p>
          {language === "ge"
            ? "გავაერთიანეთ ჩვენი რესურსები, ცოდნა, გამოცდილება, სიყვარული ბავშვებისადმი და შევქმენით -"
            : "We combined our resources, knowledge, experience, love for children and created -"}
          <span className="highlight">
            {language === "ge" ? ' „ეზობანა"' : ' "Ezobana"'}
          </span>
        </p>
        <p>
          {language === "ge"
            ? "სივრცე, სადაც ყველა ბავშვი ლაღია, შემოქმედია, უპირობოდ მიღებულია. ყოველი პატარის სტუმრობა — მათი დასამახსოვრებელი თავგადასავალია!"
            : "A space where every child is free, creative, and unconditionally accepted. Every little one's visit is their memorable adventure!"}
        </p>
      </div>
      <Link to="/services">
        <button className="aboutBtn">{TEXTS[language].more}</button>
      </Link>
    </Element>
  );
};
export default About;
