import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container glass-card">
        <div className="contact-cta-wrapper">
          <div className="section-tag">Get In Touch</div>
          
          <h2 className="contact-heading">
            Let's build <span className="text-accent">something meaningful</span>.
          </h2>
          
          <p className="contact-para">
            Whether you have a product idea, an Android application to build, or an AI system to scale, I'm always open to discussing new opportunities and collaborations.
          </p>

          <a
            href="mailto:devsakre30@gmail.com"
            className="contact-email-btn"
            data-cursor="disable"
          >
            <FaEnvelope className="btn-icon" />
            <span>devsakre30@gmail.com</span>
            <FaArrowRight className="arrow-icon" />
          </a>
        </div>

        <div className="contact-links-grid">
          <div className="social-link-item">
            <h4>Email</h4>
            <a
              href="mailto:devsakre30@gmail.com"
              className="social-btn"
              data-cursor="disable"
            >
              <FaEnvelope />
              <span>devsakre30@gmail.com</span>
            </a>
          </div>

          <div className="social-link-item">
            <h4>GitHub</h4>
            <a
              href="https://github.com/devsakre"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              data-cursor="disable"
            >
              <FaGithub />
              <span>github.com/devsakre</span>
            </a>
          </div>

          <div className="social-link-item">
            <h4>LinkedIn</h4>
            <a
              href="https://linkedin.com/in/deveshsakre"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              data-cursor="disable"
            >
              <FaLinkedin />
              <span>linkedin.com/in/deveshsakre</span>
            </a>
          </div>
        </div>

        <div className="contact-footer">
          <p>
            Designed &amp; Developed by <strong>Devesh Sakre</strong>
          </p>
          <span className="copyright-tag">
            <MdCopyright /> 2026 All rights reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
