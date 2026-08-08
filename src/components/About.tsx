import { useEffect, useState } from "react";
import "./styles/About.css";

const ROTATING_PHRASES = [
  "building meaningful software.",
  "Android engineering.",
  "AI-powered systems.",
  "full-stack development.",
];

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentText = ROTATING_PHRASES[index] ?? ROTATING_PHRASES[0];

  return (
    <div className="about-section" id="about">
      <div className="about-container section-container">
        <div className="section-tag">About Me</div>
        
        <h2 className="about-heading">
          <span className="about-title-prefix">Driven by passion for</span>
          <span className="about-title-rotating-wrapper">
            <span key={index} className="text-highlight about-title-rotating">
              {currentText}
            </span>
          </span>
        </h2>

        <div className="about-grid">
          <div className="about-card glass-card">
            <p className="about-para">
              I am a <strong>Computer Science Engineer</strong> and <strong>Software Developer</strong> who focuses on turning complex concepts into robust, scalable, production-ready applications. My work spans native <strong>Android Development</strong>, modern <strong>Full-Stack Web Systems</strong>, and intelligent <strong>Machine Learning / AI integrations</strong>.
            </p>
            <p className="about-para">
              Whether building intuitive Android interfaces with Jetpack Compose, designing backend APIs, or developing machine learning forecasting models, I prioritize performance, maintainable code, and real user impact.
            </p>
            <p className="about-para">
              Active participant in national-level hackathons (including ET AI Hackathon & SEBI Hackathon), constantly pushing the boundaries of what software can achieve under pressure.
            </p>
          </div>

          <div className="about-highlights-grid">
            <div className="highlight-item glass-card">
              <span className="highlight-num">01</span>
              <h4>Android Engineering</h4>
              <p>Jetpack Compose, MVVM, Clean Architecture, Room & Hilt</p>
            </div>
            <div className="highlight-item glass-card">
              <span className="highlight-num">02</span>
              <h4>Full-Stack Development</h4>
              <p>FastAPI, Flask, React, TypeScript, Node.js & RESTful Systems</p>
            </div>
            <div className="highlight-item glass-card">
              <span className="highlight-num">03</span>
              <h4>Machine Learning & AI</h4>
              <p>TensorFlow, Scikit-learn, XGBoost, Predictive Forecasting</p>
            </div>
            <div className="highlight-item glass-card">
              <span className="highlight-num">04</span>
              <h4>Hackathons & Shipping</h4>
              <p>National Hackathon awards & rapid production delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
