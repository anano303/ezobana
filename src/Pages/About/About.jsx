import "./About.css";
import { useContext, useEffect } from "react";
import { TEXTS } from "../../Languages.js";
import { ThemeContext } from "../../ThemeContext.js";
import { LanguageContext } from "../../LanguageContext.js";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";

const About = () => {
  const { language } = useContext(LanguageContext);

  // const themeContext = useContext(ThemeContext);
  // const langContext = useContext(LanguageContext);

  useEffect(() => {
    document.body.className = language;
  }, [language]);

  return (
    <Element name="about" className="aboutPage" id="#about">
      {language === "ge" ? (
        <div className="about-content">
          <h3>
            ჩვენ ვართ დები - ია და ანა, პროფესიით - მარკეტერები, რომლებსაც
            ყველაზე მეტად ბავშვები და მათთან ურთიერთობა უყვართ.
          </h3>
          <p>
            ყველაფერი დაიწყო ჩვენი პატარა შთაგონებით — ნიკოთი. ის სამი წლისაა და
            დინოზავრების სიყვარულითაა მოცული. ნიკომ ჩვენი სამყაროსეული აღქმა
            სრულიად შეცვალა და დაგვაბრუნა ბავშვებობაში. გავიხსენეთ რა გვიყვარდა,
            რომელი თამაშები გვაბედნიერებდა. აღმოჩნდა, რომ ჩვენი საყვარელი ადგილი
            იყო ეზო! ეზო, რომელიც უამრავ ჯადოსნურობასთან და მხიარულებასთან იყო
            დაკავშირებული.
          </p>
          <p>
            ეზო —რომელიც ჩვენი დიდი შრომით, დიდი სიყვარულითაა გაშენებული. ყველა
            ბუჩქი, ბილიკი და კუთხე ჩვენივე ხელით შექმნილი, მოვლილი. გადავყწვიტეთ
            ეს საოცარი ეზო გაგვეზიარებინა ყველაზე პატარა ადამიანებისთვის და მათი
            მშობლებისთვის!
          </p>
          <p>
            გავაერთიანეთ ჩვენი რესურსები, ცოდნა, გამოცდილება, სიყვარული
            ბავშვებისადმი და შევქმენით -
            <span className="highlight"> „ეზობანა"</span>
          </p>
          <p>
            სივრცე, სადაც ყველა ბავშვი ლაღია, შემოქმედია, უპირობოდ მიღებულია.
            ყოველი პატარის სტუმრობა — მათი დასამახსოვრებელი თავგადასავალია!
          </p>
        </div>
      ) : (
        <div className="about-content">
          <h3>
            We are sisters - Ia and Ana, marketers by profession, who love
            children and interacting with them more than anything.
          </h3>
          <p>
            Everything started with our little inspiration — Niko. He is three
            years old and filled with love for dinosaurs. Niko completely
            changed our perception of the world and took us back to childhood.
            We remembered what we loved, which games made us happy. It turned
            out that our favorite place was the yard! A yard that was associated
            with lots of magic and joy.
          </p>
          <p>
            A yard that was established with our hard work and great love. Every
            bush, path, and corner was created and cared for by our own hands.
            We decided to share this amazing yard with the smallest people and
            their parents!
          </p>
          <p>
            We combined our resources, knowledge, experience, love for children
            and created -<span className="highlight"> "Ezobana"</span>
          </p>
          <p>
            A space where every child is free, creative, and unconditionally
            accepted. Every little one's visit is their memorable adventure!
          </p>
        </div>
      )}
      <Link to="/services">
        <button className="aboutBtn">{TEXTS[language].more}</button>
      </Link>
    </Element>
  );
};
export default About;
