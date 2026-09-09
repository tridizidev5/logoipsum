import React, { useEffect, useRef, useState } from "react";
import "../../appStyles/HomePageStyles/Hero.css";
import imgMedical from "../../assets/hero/Medical.jpg";
import imgMedia from "../../assets/hero/Media.jpeg";
import imgLegalTrans from "../../assets/hero/Legal transcription.jpg";
import imgLegal from "../../assets/hero/Legal.jpg";
import imgFinancial from "../../assets/hero/Financial transcription .png";
import { Button } from "../Button/Button";
import imgLegal1 from "../../assets/hero/Legal1.png";
import imgLegal2 from "../../assets/hero/Legal2.png";
import imgLegal5 from "../../assets/hero/Legal5.png";
  
const images = [  
  imgLegal2,
  imgLegal,
  imgMedical,
  imgLegal5,
  imgMedia,
  imgLegalTrans,
  imgFinancial,
  imgLegal1,
  imgMedical,

    imgLegal2,
  imgLegal,
  imgMedical,
  imgLegal5,
  imgMedia,
  imgLegalTrans,
  imgFinancial,
  imgLegal1,
  imgMedical,

    imgLegal2,
  imgLegal,
  imgMedical,
  imgLegal5,
  imgMedia,
  imgLegalTrans,
  imgFinancial,
  imgLegal1,
  imgMedical,

 ];

const LINE1_TEXT = "Expert Transcription Services";
const LINE2_TEXT = "Accurate. Reliable. Confidential.";
const LINE3_TEXT = "Delivered When You Need It..";

const TYPING_TIME_PER_CHAR = 0.08;
const TYPING_TIME_LINE1 = LINE1_TEXT.length * TYPING_TIME_PER_CHAR;
const TYPING_TIME_LINE2 = LINE2_TEXT.length * TYPING_TIME_PER_CHAR;
const TYPING_TIME_LINE3 = LINE3_TEXT.length * TYPING_TIME_PER_CHAR;
const LINE2_DELAY = TYPING_TIME_LINE1 + 1;
const LINE3_DELAY = LINE2_DELAY + TYPING_TIME_LINE2 + 1;
const CURSOR_START_TIME = LINE3_DELAY + TYPING_TIME_LINE3;

const Typewriter = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);
  return <span className="about-hero__highlight2">{displayText}</span>;
};

const Hero = ({ onOpenContact }) => {
  const handleGetStarted = () => {
    if (typeof onOpenContact === "function") onOpenContact();
  };

  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);  

  const loopImages = [...images, ...images];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const slideWidth = track.clientWidth;

    track.scrollTo({
      left: activeIndex * slideWidth,
      behavior: "smooth",
    });
  }, [activeIndex]);

  const animatedText = "Free Sample Transcript ";
  const typingDelay = 50;

  return (
    <section id="home" className="hero">
      <div className="hero__inner">
              <div className="hero__content">
                            <h1 className="hero__title typewriter-multi-line">
            <span
              className="line-1"
              style={{
                "--line-char-count": LINE1_TEXT.length,
                "--line-time": `${TYPING_TIME_LINE1}s`,
                "--line-delay": `1s`,
              }}
            >
              {LINE1_TEXT}
            </span>
            <span
              className="line-2"
              style={{
                "--line-char-count": LINE2_TEXT.length,
                "--line-time": `${TYPING_TIME_LINE2}s`,
                "--line-delay": `${LINE2_DELAY}s`,
              }}
            >
              {LINE2_TEXT}
            </span>
            <span
              className="line-3"
              style={{
                "--line-char-count": LINE3_TEXT.length,
                "--line-time": `${TYPING_TIME_LINE3}s`,
                "--line-delay": `${LINE3_DELAY}s`,
              }}
            >
              {LINE3_TEXT}
              <span
                className="cursor-visual"
                style={{ "--cursor-start": `${CURSOR_START_TIME}s` }}
              ></span>
            </span>
          </h1>

            <div className="hero__buttons">
              <p className="hero__subtitle">
           IncrediQuo Solutions partners with law firms, arbitral institutions, courts, and dispute resolution providers worldwide to deliver precise legal and arbitration transcripts. From hearings and depositions to mediations and oral submissions, we ensure accuracy, confidentiality, and adherence to jurisdiction-specific standards. Built on globally recognized frameworks, our approach delivers:</p>
            <ul className="hero__points">
           <li> ISO 27001 (Information Security):</li>
           <li> ISO 9001 (Quality Management):</li>
           <li> AAERT-aligned standards: Court-ready transcripts</li>
           </ul>
           <p className="hero__subtitle">
            We extend the same precision and reliability to the financial, media, and research sectors, where accuracy is critical and trust is non-negotiable.
          </p>
          <div className="wipe-reveal">
             <span className="badge">Free Sample Transcript</span>
              <h2 className="badget">
              Get a short sample transcript absolutely free. It is the easiest way
              to see our accuracy and attention to detail before you commit
            </h2>
            </div>  
             <div onClick={handleGetStarted}>
              <Button
                name="Get Started"
                paddingXL="8.6vw"
                paddingXM="24.5vw"
                widthL="10.87vw"
                widthM="30.3vw"
                bacgrounClr="#022447"
                bacgrounArrow="#ffffff"
                colorArrow="#022447"
                colorText="#ffffff"
                colorTextHover="#022447"
              />
            </div>
          </div>
        </div>

        <div className="hero__image">
          <div className="hero__image-wrapper">
            <div className="hero__image-bg"></div>

            <div className="hero__image-track" ref={trackRef}>
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="hero__image-main"
                  alt={`Slide ${i}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
