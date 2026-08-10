import { PropsWithChildren, useState, useEffect } from "react";
import { FiArrowDownRight, FiFileText } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import EarthVisual from "./EarthVisual";
import "./styles/Landing.css";

const roles = ["Software Developer", "Android Developer", "AI/ML Enthusiast"];

const Landing = ({ children }: PropsWithChildren) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsFading(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="hero-grid">
          {/* Left Hero Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <HiOutlineSparkles className="badge-sparkle" />
              <span>Computer Science Engineer</span>
            </div>

            <h3 className="hero-greeting">Hi, I'm</h3>

            <h1 className="hero-title">
              Devesh <span className="hero-title-accent">Sakre</span>
            </h1>

            <h2 className="hero-role">
              <span className={`role-gradient ${isFading ? "fade-out" : "fade-in"}`}>
                {roles[roleIndex]}
              </span>
            </h2>

            <p className="hero-description">
              Building production-ready Android, full-stack, and AI-powered applications.
            </p>

            <div className="hero-cta-group">
              <button
                className="hero-btn primary-btn"
                onClick={() => scrollToSection("#work")}
                data-cursor="disable"
              >
                <span>View My Work</span>
                <FiArrowDownRight className="btn-icon" />
              </button>

              <a
                href="/Devesh_Sakre_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="hero-btn secondary-btn"
                data-cursor="disable"
              >
                <span>Download Resume</span>
                <FiFileText className="btn-icon" />
              </a>
            </div>

            {/* Social Links Row */}
            <div className="hero-social-row">
              <a
                href="https://github.com/DeveshSakre"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                data-cursor="disable"
                aria-label="GitHub Profile"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/devesh-sakre-8972542b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                data-cursor="disable"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:devsakre30@gmail.com"
                className="hero-social-link"
                data-cursor="disable"
                aria-label="Email Devesh Sakre"
              >
                <FaEnvelope />
                <span>Email</span>
              </a>
            </div>

            <button
              className="hero-scroll-indicator"
              onClick={() => scrollToSection("#about")}
              data-cursor="disable"
            >
              <span>Scroll to explore</span>
              <span className="scroll-arrow">↓</span>
            </button>
          </div>

          {/* Right Hero Visual: Earth + Space + Technology */}
          <div className="hero-visual-side">
            <EarthVisual />
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Landing;
